import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyForm } from '../../models/companysignup';
import { industryList } from '../../models/industry';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {
  companyForm!: FormGroup;
  industries: string[] = industryList;


  constructor(private sharedservice:SharedService) {}

  ngOnInit(): void {
    this.companyForm = new FormGroup({
      companyName: new FormControl (null, [Validators.required]),
      owner: new FormControl (null, [Validators.required]),
      streetAddress:new FormControl (null, [Validators.required]),
      city:new FormControl (null, [Validators.required]),
      state:new FormControl (null, [Validators.required]),
      zipcode: new FormControl (null, [Validators.required]),
      country:new FormControl (null, [Validators.required]),
      email: new FormControl (null, [Validators.required,Validators.email]),
      phoneNumber: new FormControl (null, [Validators.required]),
      nominalCapital:new FormControl (null, [Validators.required,Validators.min(0)]),
      industry:new FormControl (null, [Validators.required]),
      website: new FormControl (null, [Validators.required]),
      companyDescription: new FormControl (null, [Validators.required]),
      verificationCheckbox: new FormControl (null, [Validators.required]),
    });
  }

  onSubmit(): void {
    if (this.companyForm.valid) {
      const formData :CompanyForm = this.companyForm.value;
      console.log('Company Signup Data:', formData);
      this.sharedservice.companysignup(formData).subscribe({
        next:(data) =>{
          console.log(data);
          
        },
        error:(err)=>{
          console.log(err);
          
        }

      })
    }
  }
}
