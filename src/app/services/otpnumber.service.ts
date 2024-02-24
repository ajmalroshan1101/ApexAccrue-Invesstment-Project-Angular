import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OtpNumberService {
  phonenumbers$ = new BehaviorSubject<any>(null);

  receivephonenum(phonenumber123: any) {}

}
