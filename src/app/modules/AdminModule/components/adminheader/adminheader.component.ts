import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsertokenService } from 'src/app/services/usertoken.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css'],
})
export class AdminheaderComponent {
  constructor(private tokenserivce: UsertokenService, private router: Router) {}

  logout() {
    this.tokenserivce.removeToken();

    this.router.navigate(['/']);
  }
}
