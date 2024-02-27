import { Component } from '@angular/core';
import { UsertokenService } from 'src/app/services/usertoken.service';

@Component({
  selector: 'app-companyhead',
  templateUrl: './companyhead.component.html',
  styleUrls: ['./companyhead.component.css']
})
export class CompanyheadComponent {

constructor(private usertoken:UsertokenService){}

  logout(){

    this.usertoken.removeToken();
    this.usertoken.removeusertype();
  }
  
}
