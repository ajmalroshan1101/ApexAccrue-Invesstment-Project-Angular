import { Component } from '@angular/core';
import { UsertokenService } from 'src/app/services/usertoken.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent {

  constructor(private tokenserivce : UsertokenService){}

  logout(){
    
    this.tokenserivce.removeToken();
    console.log('hello');
    
  }
  
}
