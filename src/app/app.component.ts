import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = "Hardware Ticket Tracking System";
  year = new Date().getFullYear();//Gets the Year component of UR System Date...
  rights = "@FAI Inc-Powered By Angular-" + VERSION.major
  today = new Date();
}
