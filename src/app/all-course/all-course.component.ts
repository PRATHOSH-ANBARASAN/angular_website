import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-course',
  imports: [],
  templateUrl: './all-course.component.html',
  styleUrl: './all-course.component.css'
})
export class AllCourseComponent {

  userList :any[]=[];

  constructor(private http: HttpClient){


  }
  getUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any)=>{
      this.userList=result;

    })
  }



}
