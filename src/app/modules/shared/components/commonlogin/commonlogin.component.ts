import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';
import { LoginPOst } from 'src/app/models/loginpost';
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
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitFrom(from: NgForm) {

    this.userserive.loginpost(from.value).subscribe({
      next: (data) => {

        this.usertoken.setToken(data.token);
        this.usertoken.storeuser(data.user);
        
        if (data.user === 'user') {
          this.router.navigate(['/user/userhome']);
        }else if(data.user === 'admin'){
          this.router.navigate(['/admin/adminhome']);
        }else if(data.user === 'company'){
          this.router.navigate(['/company']);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
