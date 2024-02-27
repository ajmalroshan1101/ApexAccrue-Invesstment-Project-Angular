import { Component, OnInit } from '@angular/core';
import { Companyserivce } from '../../services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companyhome',
  templateUrl: './companyhome.component.html',
  styleUrls: ['./companyhome.component.css']
})
export class CompanyhomeComponent implements OnInit {

  constructor(private companyserive:Companyserivce,private router:Router){

  }
  ngOnInit(): void {
    

    this.companyserive.tokencheck().subscribe({
      next:(data)=>{

      },
      error:(err)=>{
       
       
          this.router.navigate(['/userlogin']);
        
      }
    })

  }

}
