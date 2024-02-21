import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPOst } from 'src/app/Interfaces/loginpost';
import { UserService } from 'src/app/services/user.service';
import { UsertokenService } from 'src/app/services/usertoken.service';

@Component({
  selector: 'app-commonlogin',
  templateUrl: './commonlogin.component.html',
  styleUrls: ['./commonlogin.component.css'],
})
export class CommonloginComponent implements OnInit {
  username!: string;

  password!: string;

  show!: boolean;

  showpassword!: false;

  constructor(
    private userserive: UserService,
    private usertoken: UsertokenService,
    private router : Router
  ) {}

  ngOnInit(): void {}

  usercheck() {
    console.log(this.username);

    this.userserive.loginFindUser(this.username).subscribe({
      next: (data) => {
        console.log(data);

        this.show = data.user;

        if (data.user) {
          this.userserive
            .loginFindUserandPassword(this.username, this.password)
            .subscribe({
              next: (data) => {
                console.log(data);

                this.showpassword = data.result;
              },
              error: (err) => {
                console.log(err);
              },
            });
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitFrom(from: NgForm) {
    console.log(from.value);

    this.userserive.loginpost(from.value).subscribe({
      next: (data) => {
        console.log(data);

        this.usertoken.setToken(data.token);
        this.usertoken.storeuser(data.user);

        this.router.navigate(['/user/userhome'])
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
