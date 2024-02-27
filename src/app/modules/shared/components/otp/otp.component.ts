import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/services/authguard.service';
import { OtpNumberService } from 'src/app/services/otpnumber.service';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { UserService } from 'src/app/services/user.service';
import { UsertokenService } from 'src/app/services/usertoken.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  constructor(
    private UserService: UserService,
    private OtpNumberService: OtpNumberService,
    private router: Router,
    private usertoken: UsertokenService  
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

    const otpnum = parseInt(otp);

    this.UserService.OTPVerification(otpnum, this.PhoneNumber).subscribe({
      next: (data) => {
        if (data.otpCheck && data.token) {

          this.usertoken.setToken(data.token);

          this.usertoken.storeuser(data.userType)
          
          this.router.navigate(['/user/userhome']);

        } else {

          this.router.navigate(['/usersignup']);
        }

        //  if(data.otpCheck){

        //  }else{

        //  }
      },
    });
  }
}
