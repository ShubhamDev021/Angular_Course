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
  name_or_age:string|number = "Akansha";
  other:any = "Avika";

  handleClickEvent() {
    var brother_name = 'Ayush';

    console.log("Function called");
    this.anotherHandleClickEvent();
    console.log("My application name is", this.title);
    console.log("My name is", this.name);
    //this.name = 20;   //this line will error that Type 'number' is not assignable to type 'string'
    console.log("My brother's name is", brother_name);

    console.log("My sister's name is", this.name_or_age);
    this.name_or_age = 30;
    console.log("My sister's age is", this.name_or_age);

    console.log("Value 1 is", this.other);
    this.other = 2;
    console.log("Value 2 is", this.other);
    this.other = true;
    console.log("Value 3 is", this.other);
    this.other = {
      name: 'abc',
      age: 15,
      class: 'High School'
    };
    console.log("Value 4 is", this.other);
  }

  anotherHandleClickEvent() {
    console.log("Another function called");
  }

  sum(a:number, b:number) {
    console.log("Sum =", (a+b));
  }
}
