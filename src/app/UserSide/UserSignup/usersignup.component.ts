import { Component, OnInit } from "@angular/core";
import {  FormControl, FormGroup, Validators } from "@angular/forms";
import { SignupPost } from "src/app/Interfaces/signupform";
import { UserService } from "src/app/services/user.service";

@Component({
    selector:'app-usersignup',
    templateUrl:'./usersignup.component.html',
    styleUrls:['./usersignup.component.css']
})

export class UserSignupComponent implements OnInit{

    FMbuilder!:FormGroup

    constructor(private Serivce:UserService){}


ngOnInit(): void {
    
    this.FMbuilder = new FormGroup({

        FullName: new FormControl(null,[Validators.required]),
        Email: new FormControl(null,[Validators.required,Validators.email]),
        Password: new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
        spassword: new FormControl(null,Validators.required),
        Phone: new FormControl(null,[Validators.required])
    })

    
}
SubmitForm(){

    const formdata = this.FMbuilder.value as SignupPost;
    console.log('conmpon ent --')
    console.log(
        formdata
    );
    
    this.Serivce.SignupPost(formdata).subscribe({
        next: (data) => {
            console.log(data);
        },
        error: (err) => {
            console.log('err ========')
            console.log(err);
        }
    })
    
}

}

