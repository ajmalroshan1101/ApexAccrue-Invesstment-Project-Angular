// import { formatDate } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { __values } from 'tslib';

// @Component({
//   selector: 'app-companyplansection',
//   templateUrl: './companyplansection.component.html',
//   styleUrls: ['./companyplansection.component.css'],
// })
// export class CompanyplansectionComponent implements OnInit {
//   FMbuilder!: FormGroup;
//   constructor() {}

//   ngOnInit(): void {
//     this.FMbuilder = new FormGroup({
//       title: new FormControl(null, [Validators.required]),
//       description: new FormControl(null, [Validators.required]),
//       amountType: new FormControl(null, [Validators.required]),
//       amount: new FormControl(null, [Validators.required, Validators.min(0)]),
//       returnPercentage: new FormControl(null, [Validators.required]),
//       timePeriod: new FormControl(null, [Validators.required]),
//       files: new FormControl(null, [Validators.required]),
//     });
//   }

//   onFileChange(event: any) {
//     const files = event.target.files;
//     if (files.length > 0) {
//       this.FMbuilder.patchValue({
//         file: files[0],
//       });
//     }
//   }
//   onSubmit() {
//     if (this.FMbuilder.valid) {
//       const formdata = new FormData();

//       const value = this.FMbuilder.value;

//       console.log(value);

//       formdata.append('title', value.title);
//       formdata.append('description', value.description);
//       formdata.append('amountType', value.amountType);
//       formdata.append('amount', value.amount);
//       formdata.append('returnPercentage', value.returnPercentage);
//       formdata.append('timePeriod', value.timePeriod);
//       formdata.append('files', value.files);

//       console.log(formdata);
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Companyserivce } from '../../services/company.service';

@Component({
  selector: 'app-companyplansection',
  templateUrl: './companyplansection.component.html',
  styleUrls: ['./companyplansection.component.css'],
})
export class CompanyplansectionComponent implements OnInit {
  FMbuilder!: FormGroup;
  formdata = new FormData();


  constructor(private companyserivce:Companyserivce) {}

  ngOnInit(): void {
    this.FMbuilder = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      amountType: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required, Validators.min(0)]),
      returnPercentage: new FormControl(null, [Validators.required]),
      timePeriod: new FormControl(null, [Validators.required]),
      file: new FormControl(null, [Validators.required]),
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      // this.formdata.patchValue({
      //   file: files[0],  
      // });
      // // this.FMbuilder.get('file').setValue(files[0]);
      this.formdata.append('file', files[0]);

    }
  }

  onSubmit() {
    if (this.FMbuilder.valid) {
      const value = this.FMbuilder.value;

      console.log(value);
      
     this.formdata.append('title', value.title);
     this.formdata.append('description', value.description);
     this.formdata.append('amountType', value.amountType);
     this.formdata.append('amount', value.amount);
     this.formdata.append('returnPercentage', value.returnPercentage);
     this.formdata.append('timePeriod', value.timePeriod);
     this.formdata.append('file', value.file);  

      console.log(this.formdata);

      this.companyserivce.postplan(this.formdata).subscribe({
        next:(data)=>{

        },
        error:(err)=>{
          
        }
      })
    }
  }
}

