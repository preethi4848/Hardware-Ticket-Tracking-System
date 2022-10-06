import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/Models/ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})

export class AddTicketComponent implements OnInit {

  @Output() emitter: EventEmitter<Ticket> = new EventEmitter<Ticket>();
  newTicket : Ticket = {} as Ticket
  url : any;

  
  constructor(private ticketService : TicketService, private router: Router) { }

  ngOnInit(): void {
  }
//for handling File upload feature for the images. 
onChange(event : any){
  if(event.target.files && event.target.files.length){
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_ev)=>{
      this.url = reader.result;
    }
  }else{
    alert("No file has been selected");
  }
}
onSubmit(): void{
  this.ticketService.addTicket(this.newTicket).subscribe((data)=>{
    this.router.navigate(["/Tickets/All"])
    alert(data);
  })
}
}
// onAddClick(){
//   debugger;
//   this.newTicket.image = this.url as string;
//   this.emitter.emit(this.newTicket);//emit takes the arg of which object U R returning. 
// }

  


