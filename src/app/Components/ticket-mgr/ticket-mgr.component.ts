import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-ticket-mgr',
  templateUrl: './ticket-mgr.component.html',
  styleUrls: ['./ticket-mgr.component.css']
})
export class TicketMgrComponent implements OnInit {
  
  ticketList: Ticket[] = [];
  constructor(private ticketService : TicketService) { }

  ngOnInit(): void {
    this.getAllTicketsFromServer();
  }

  getAllTicketsFromServer(){
    this.ticketService.getAllTickets().subscribe((data : Ticket[]) => {
      this.ticketList = data
    })
  }
}
