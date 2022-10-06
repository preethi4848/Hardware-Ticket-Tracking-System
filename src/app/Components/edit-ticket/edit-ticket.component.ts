import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  foundEmp : Ticket = {} as Ticket;
  ticketId : any;
  constructor(private ticketService : TicketService, private activatedRoute : ActivatedRoute) { }

  //Find the matching record and display it in the View
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((map)=>{
      this.ticketId = map.get("id");
      this.ticketService.getTicket(parseInt(this.ticketId)).subscribe((data : Ticket)=>{
        this.foundEmp = data;
      })
    })
  }

  //Event handler for the Submit button that is clicked after the changes are made by the user.
  onSubmit(): void{
    this.ticketService.updateTicket(this.foundEmp).subscribe((data)=>{
      alert(data);
      
    })
  }
}

