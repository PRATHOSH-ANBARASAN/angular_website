import { Component, HostListener, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu-share/menu/menu.component';
import { ButtonComponent } from "./menu-share/button/button.component";
import { PopupLoginComponent } from "./popup-login/popup-login.component";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HomeComponent } from "./home/home.component";




@Component({
  selector: 'app-root',
  standalone:true,
  imports: [
    RouterOutlet,
      RouterLink,
      RouterLinkActive, 
      ButtonComponent,
  
      
      
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuScroll=false;
  isSidebarShow=false;

  @HostListener('window:scroll',['$event'])
  scrollCheck(){
    if(window.pageYOffset>30){
      this.isMenuScroll=true;
    }
    else{
      this.isMenuScroll=false;
    }
    console.log(this.isMenuScroll)

  }




  openSidebar(){
    this.isSidebarShow=true;

  }
   
  closeSidebar(){
    this.isSidebarShow=false;

  }
 

}
