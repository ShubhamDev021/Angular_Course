import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_course';
  name:string = 'Shubham';

  handleClickEvent() {
    var brother_name = 'Ayush';

    console.log("Function called");
    this.anotherHandleClickEvent();
    console.log("My application name is", this.title);
    console.log("My name is", this.name);
    //this.name = 20;   //this line will error that Type 'number' is not assignable to type 'string'
    console.log("My brother's name is", brother_name);
  }

  anotherHandleClickEvent() {
    console.log("Another function called");
  }
}
