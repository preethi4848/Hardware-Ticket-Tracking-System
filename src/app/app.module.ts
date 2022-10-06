import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { TicketMgrComponent } from './Components/ticket-mgr/ticket-mgr.component';
import { AddTicketComponent } from './Components/add-ticket/add-ticket.component';
import { ViewTicketComponent } from './Components/view-ticket/view-ticket.component';
import { EditTicketComponent } from './Components/edit-ticket/edit-ticket.component';
import { SearchPipe } from './Pipes/search.pipe';
import { MasterComponent } from './Components/master/master.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TicketMgrComponent,
    AddTicketComponent,
    ViewTicketComponent,
    EditTicketComponent,
    SearchPipe,
    MasterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
