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

  handleClickEvent() {
    console.log("Function called");
    this.anotherHandleClickEvent();
    console.log("My application name is", this.title);
  }

  anotherHandleClickEvent() {
    console.log("Another function called");
  }
}
