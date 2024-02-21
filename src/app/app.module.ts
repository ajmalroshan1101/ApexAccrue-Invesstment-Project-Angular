import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OtpComponent } from './shared/otp/otp.component';
import { UserService } from './services/user.service';
import { OtpNumberService } from './services/otpnumber.service';
import { AuthGuard } from './guards/auth.guard';
import { HomepageComponent } from './shared/homepage/homepage.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CommonloginComponent } from './shared/commonlogin/commonlogin.component';

@NgModule({
  declarations: [AppComponent, OtpComponent, HomepageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    UserService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
