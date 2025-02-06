import { Component } from '@angular/core';
import {ReactiveFormsModule,FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-popup-login',
  imports: [ReactiveFormsModule],
  templateUrl: './popup-login.component.html',
  styleUrl: './popup-login.component.css'
})
export class PopupLoginComponent {

  userRegForm:FormGroup=new FormGroup({
    Uname: new FormControl("",[Validators.required]),
    Uemail: new FormControl("",[Validators.required,Validators.pattern("/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/")]),
    Unumber:new FormControl("",[Validators.required,Validators.minLength(10)]),
    Upassword: new FormControl("",[Validators.required,Validators.minLength(6)]),
  })

  

  onuserSubmit(){
    const isValid=this.userRegForm.valid;
    const formValue=this.userRegForm.value;
    debugger;
  }


}
