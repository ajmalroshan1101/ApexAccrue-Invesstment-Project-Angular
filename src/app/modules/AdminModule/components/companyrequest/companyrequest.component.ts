import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-companyrequest',
  templateUrl: './companyrequest.component.html',
  styleUrls: ['./companyrequest.component.css']
})
export class CompanyrequestComponent implements OnInit {

companies!:any[];

constructor(private adminservice:AdminService){}

ngOnInit(): void {

  this.adminservice.getcompanies().subscribe({

    next:(data)=>{
      
      this.companies = data
    },
    error: (error) => {
      console.error('Error fetching companies:', error);
      // Handle error as needed
    }
  });
}

  approve(company:any){
    
  // Send approval request to the backend
  this.adminservice.approveCompany(company).subscribe({
   next: (data) => {
      // Handle success 
      this.refreshCompanyList();
    },
    error:(error) => {
      console.error('Error approving company:', error);
      // Handle error as needed
    }
  });
  }


  reject(company:any){

    this.adminservice.rejectCompany(company).subscribe({
      next:(data) => {
        // Handle success 
        this.refreshCompanyList();
      },
      error:(error) => {
        console.error('Error rejecting company:', error);
        // Handle error as needed
      }
  });

  }

  
private refreshCompanyList(): void {
  // refresh the company list after approval/rejection
  // call the getCompanies method again
  this.adminservice.getcompanies().subscribe(
    (data: any[]) => {
      this.companies = data;
    },
    (error) => {
      console.error('Error fetching companies:', error);
      // Handle error as needed
    }
  );
}
}
