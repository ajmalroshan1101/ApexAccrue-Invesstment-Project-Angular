import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OtpNumberService } from 'src/app/services/otpnumber.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private OtpNumberService: OtpNumberService,
    private router:Router
  ) {}

  @ViewChild('otp1') otp1!: ElementRef<HTMLInputElement>;
  @ViewChild('otp2') otp2!: ElementRef<HTMLInputElement>;
  @ViewChild('otp3') otp3!: ElementRef<HTMLInputElement>;
  @ViewChild('otp4') otp4!: ElementRef<HTMLInputElement>;
  @ViewChild('otp5') otp5!: ElementRef<HTMLInputElement>;
  @ViewChild('otp6') otp6!: ElementRef<HTMLInputElement>;

  PhoneNumber!: any;

  ngOnInit(): void {
    this.OtpNumberService.phonenumbers$.subscribe((number) => {
      console.log('number', number);
      this.PhoneNumber = number;
    });
  }

  otp1val1 = '';
  otp1val2 = '';
  otp1val3 = '';
  otp1val4 = '';
  otp1val5 = '';
  otp1val6 = '';

  moveToNext(nextInput: HTMLInputElement) {
    if (nextInput && nextInput.value.length == 0) {
      nextInput.focus();
    }
  }

  Submitform() {
    const otp =
      this.otp1val1 +
      this.otp1val2 +
      this.otp1val3 +
      this.otp1val4 +
      this.otp1val5 +
      this.otp1val6;

      console.log(this.PhoneNumber);
      

    const otpnum = parseInt(otp);

    this.UserService.OTPVerification(otpnum,this.PhoneNumber).subscribe({
      next: (data) => {
        console.log(data);

        if(data.otpCheck){

          this.router.navigate(['/user/userhome']);

        }else{

          console.log('hello bhaya');
          
        }
        
      //  if(data.otpCheck){

      //  }else{
        
      //  }
      }
    });
  }
}
