import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{

  @Input('size')
  size='S'; // S M L
  @Input('name')
  name='';

  ngOnInit(): void {
    
  }


}
