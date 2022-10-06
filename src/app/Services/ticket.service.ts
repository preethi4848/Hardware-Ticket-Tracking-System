import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../Models/ticket';
import { HttpClient } from '@angular/common/http';

//Injectable makes this class singleton object and will be able to inject it into any Component of this module. 
@Injectable({
  providedIn: 'root'
})

export class TicketService {

  //Url of the Web API that U R trying to access.
  url : string = "http://localhost:56728/Tickets/All";  

  //Here httpClient is a singleton object that is injected by angular when U consume the Ticket Service object. 
  constructor(private httpClient : HttpClient) { }

   /*
  http://localhost:61648/Tickets/All ==> for GetAll
  http://localhost:61648/Tickets/{id} ===> for Getting single Ticket
  http://localhost:61648/Tickets ==> For adding and updating
  http://localhost:61648/Tickets/{id} ==> For Deleting...
  */
  //We will create functions that can be called by all our components of this application. 

  public getAllTickets() : Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(this.url);
  }

  public getTicket(id : number) : Observable<Ticket>{
    const tempUrl = 'http://localhost:56728/Tickets/' + id;
    return this.httpClient.get<Ticket>(tempUrl);
  }

  public updateTicket(emp : Ticket) : Observable<string>{
    const tempUrl = 'http://localhost:56728/Tickets'
    return this.httpClient.put<string>(tempUrl,emp);
   }

   public addTicket(emp : Ticket): Observable<string>{
    const tempUrl='http://localhost:56728/Tickets'
    return this.httpClient.post<string>(tempUrl,emp);
   }
}
