import { Component } from '@angular/core';
import { ButtonComponent } from "../menu-share/button/button.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ButtonComponent,ReactiveFormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  userLoginForm:FormGroup=new FormGroup({
    Lname: new FormControl("",[Validators.required]),
    Lpassword: new FormControl("",[Validators.required,Validators.pattern("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")]),
  })

  onloginsubmit(){
    const formValue=this.userLoginForm.value;
    debugger
  }



}
