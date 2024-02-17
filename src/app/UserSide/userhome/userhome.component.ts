import { Component } from '@angular/core';
import { RouteReuseStrategy, Router } from '@angular/router';
import { UsertokenService } from 'src/app/services/usertoken.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],
})
export class UserhomeComponent {
  constructor(private usertoken: UsertokenService, private router: Router) {}

  logout() {
    this.usertoken.removeToken();

    this.usertoken.removeusertype();

    console.log(1);

    this.router.navigate(['/homepage']);
  }
}
