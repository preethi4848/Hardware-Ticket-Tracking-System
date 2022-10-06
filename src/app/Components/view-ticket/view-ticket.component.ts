import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.component.html',
  styleUrls: ['./view-ticket.component.css']
})
export class ViewTicketComponent implements OnInit {
  
  //data of the Component...
  ticketId : any;
  selected : Ticket = {} as Ticket
  constructor(private ticketService : TicketService, private activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {

    //get the parameters from the Url using paramMap function of the activatedRoute. 
    this.activatedRoute.paramMap.subscribe((map)=>{
      //Get the id from the Map(Map is JS's version of dictionary)

      this.ticketId = map.get("id");//Get the value of the key called id....

      if(this.ticketId != null){//if not null call the service method....

        this.ticketService.getTicket(parseInt(this.ticketId)).subscribe((data)=>{
          this.selected = data as Ticket;//set the foundEmp object to the member. 
        })
      }
    })
  }
}

