import { Component } from '@angular/core';
import { PopupLoginComponent } from "../popup-login/popup-login.component";
import {ReactiveFormsModule,FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [PopupLoginComponent,ReactiveFormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

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
