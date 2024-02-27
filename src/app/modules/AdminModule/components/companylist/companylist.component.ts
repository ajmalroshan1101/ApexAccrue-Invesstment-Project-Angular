import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.css']
})
export class CompanylistComponent implements OnInit{

  companylist! :any[];
  expandedRow: any;

  constructor(private adminserivce : AdminService){}


  ngOnInit(): void {
    
  this.adminserivce.getcompanylist().subscribe({
  next:(data)=>{

    this.companylist = data ;
  },
  error:(error)=>{

  }
 })
  }

  suspend(companyId: string) {
    // Implement the logic for suspending a company based on companyId
  }

}
