import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, ProfileComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: '.component-ts-span-class {font-size: 18px; color: white; background-color: blue;}'
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

  //------------------------
  // Counter App code starts
  //------------------------
  count = 0;

  handleCounter(action:string) {
    if (action == 'increment') {
      this.count ++;
    }
    if (action == 'decrement') {
      this.count --;
    }
    if (action == 'reset') {
      this.count = 0;
    }
  }

  //------------------------
  // Counter App code ends
  //------------------------


  //------------------------
  // Events code starts
  //------------------------

  //click event
  //Here if we make type of event as any then, less amount of problems got arised 
  handleEvent(event:any) {
    console.log("event details", event);
    console.log("event type", event.type);
    console.log("button element name", event.target.name);
    console.log("button element class", event.target.className);
    console.log("button name", event.target.innerText);
  }
  //but if we make type of event as MouseEvent then, we have to use the statement "as HTMLButtonElement" to access these properties
  handleEventNew(event:MouseEvent) {
    console.log("event details", event);
    console.log("event type", event.type);
    console.log("button element name", (event.target as HTMLButtonElement).name);
    console.log("button element class", (event.target as HTMLButtonElement).className);
    console.log("button name", (event.target as HTMLButtonElement).innerText);
  }

  handleInputEvent(event:Event) {
    console.log("event details", event);
    console.log("event type", event.type);
    console.log("input element name", (event.target as HTMLInputElement).name);
    console.log("input element value", (event.target as HTMLInputElement).value);
  }

  //------------------------
  // Events code ends
  //------------------------


  //-------------------------------
  // Get and Set value code starts
  //-------------------------------
  firstname:string = "";
  lastname:string = "";
  displayFirstName:string = "";
  displayLastName:string = "";

  inputFirstName(event:Event) {
    this.firstname = (event.target as HTMLInputElement).value;
  }

  getValue() {
    this.displayFirstName = this.firstname;
  }

  setValue() {
    this.firstname = 'ayush';
    this.displayFirstName = this.firstname;
  }

  getValueNew(val:string) {
    this.lastname = val;
    this.displayLastName = this.lastname;
  }

  setValueNew() {
    this.lastname = 'bhatnagar';
    this.displayLastName = this.lastname;
  }
  //-------------------------------
  // Get and Set value code ends
  //-------------------------------


  //--------------------------------------
  // Control flow - if else - code starts
  //--------------------------------------
  displayDiv:boolean = false;

  showDiv() {
    this.displayDiv = true;
  }
  hideDiv() {
    this.displayDiv = false;
  }
  toggleDiv() {
    if(this.displayDiv) { this.displayDiv = false; }
    else { this.displayDiv = true; }
  }


  displayRedDiv = true;
  toggleDivs() {
    if(this.displayRedDiv) { this.displayRedDiv = false; }
    else { this.displayRedDiv = true; }
  }
  //--------------------------------------
  // Control flow - if else - code ends
  //--------------------------------------


  //--------------------------------------
  // Control flow - else if ladder - code ends
  //--------------------------------------
  color:string = 'blue';

  changeColor(val:string) {
    this.color = val;
  }
  //--------------------------------------
  // Control flow - else if ladder - code ends
  //--------------------------------------

  //--------------------------------------
  // for loop code starts
  //--------------------------------------
  users = ["Shubham", "Ayush", "Akansha","Avika"]

  students = [
    {name: "shubham", age: 29, email: "shubham@gmail.com"},
    {name: "ayush", age: 26, email: "ayush@gmail.com"},
    {name: "akansha", age: 30, email: "akansha@gmail.com"},
    {name: "avika", age: 2, email: "avika@gmail.com"}
  ]
  //--------------------------------------
  // for loop code starts
  //--------------------------------------

  //--------------------------------------
  // signal code starts
  //--------------------------------------
  counter = signal(10);
  x = 20;

  constructor() {
    effect(() => {
      // here whenever signal variable valuse gets changed then the below lines are executing i.e. effect() function is calling 
      // but whenever property value gets changed then the below lines are not executing i.e. effect() function is not calling 

      console.log("Updated signal value", this.counter());
      console.log("Updated property value", this.x);
    })
  }

  updateSignalValue(operation:string) {
    if (operation == '+') {
      this.counter.set(this.counter() + 1);
    }
    if (operation == '-') {
      this.counter.set(this.counter() - 1);
    }
  }
  updatePropertyValue() {
    this.x = 30;
  }

  data = signal<number | string>(10);
  data2: WritableSignal<number | string> = signal(10);
  data3:Signal<number> = computed(() => 200);
  signal_x = signal(5);
  signal_y = signal(6);
  signal_z = computed(() => this.signal_x() + this.signal_y());

  updateSignal() {
    console.log('data before:', this.data());
    this.data.set(15);  //no error
    console.log('data after:', this.data());
    // this.data.set("hello");  // error: Argument of type 'string' is not assignable to parameter of type 'number'
    //Therefore, we have to define string datatype also for signal value i.e. data = signal<number | string>(10);
    this.data.set("hello");
    console.log('data after2:', this.data());

    console.log('data2 before:', this.data2());
    this.data2.set(15);
    console.log('data2 after:', this.data2());
    this.data2.set("hello");
    console.log('data2 after2:', this.data2());

    console.log('data3 before:', this.data3());
    // this.data3.set(15); //error: Property 'set' does not exist on type 'Signal<number>' as this is a computable signal i.e. readonly signal
    console.log('data3 after:', this.data3());

    console.log('signal_z before:', this.signal_z());
    this.signal_x.set(this.signal_x() + 1);
    console.log('signal_z after:', this.signal_z());
  }
  
  //--------------------------------------
  // signal code starts
  //--------------------------------------

  //-------------------------------------------
  // for loop contextual variables code starts
  //-------------------------------------------
  users_new = ["shubham", "ayush", "akansha", "avika"];
  //-------------------------------------------
  // for loop contextual variables code ends
  //-------------------------------------------

  //-------------------------------------------
  // two way binding code starts
  //-------------------------------------------
  student_name = ""
  //-------------------------------------------
  // two way binding code ends
  //-------------------------------------------

  //-------------------------------------------
  // two way binding code without ngModel starts
  //-------------------------------------------
  student_name_2 = ""

  updateStudentName(event:Event) {
    this.student_name_2 = (event.target as HTMLInputElement).value;
  }
  //-------------------------------------------
  // two way binding code without ngModel ends
  //-------------------------------------------
}
