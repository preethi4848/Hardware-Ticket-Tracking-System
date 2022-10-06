import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  //members of the component
  ticketList : Ticket[] = [];
  selectedTicket :  Ticket = {} as Ticket //typecast it to treat the obj as Employee
  searchValue : string = ""

  constructor() { }

  ngOnInit(): void {
    
    //this is the place to initialize ur data
    this.ticketList.push({"ticketId":111,"empName":"Sharath","empAddress":"sharath@firstam.com","type":"Technical","description":"Environment update","status":"Under Review","image":"./assets/images/technical.jpg"})
    this.ticketList.push({"ticketId":112,"empName":"Dhanu","empAddress":"dhanu@firstam.com","type":"Software","description":"Update Windows","status":"Closed","image":"./assets/images/software.jpg"})
    this.ticketList.push({"ticketId":113,"empName":"Rahul","empAddress":"rahul@firstam.com","type":"Hardware","description":"Networking","status":"Closed","image":"./assets/images/hardware.jpg"})
    this.ticketList.push({"ticketId":119,"empName":"Yash","empAddress":"yash@firstam.com","type":"Software","description":"Windows 10 Update","status":"Opened","image":"./assets/images/s1.jpg"})
    this.ticketList.push({"ticketId":121,"empName":"Duti","empAddress":"duti@gmail.com","type":"Technical","description":"System error","status":"Opened","image":"./assets/images/t1.jpg"})
  
  }
onDetailClick(ticket : Ticket){
  this.selectedTicket = ticket
}
//event handler for the emitter event of the add-ticket component
onAddNew(ticket : Ticket){
  this.ticketList.push(ticket);
  alert("New ticket is added to database");
}
}

