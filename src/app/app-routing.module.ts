import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TicketMgrComponent } from './Components/ticket-mgr/ticket-mgr.component';
import { AddTicketComponent } from './Components/add-ticket/add-ticket.component';
import { ViewTicketComponent } from './Components/view-ticket/view-ticket.component';
import { EditTicketComponent } from './Components/edit-ticket/edit-ticket.component';
import { MasterComponent } from './Components/master/master.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path:'Home',component:HomeComponent},
  {path: 'Tickets/All', component: TicketMgrComponent},
  {path: 'Tickets/AddNew', component: AddTicketComponent},
  {path: 'Tickets/View/:id', component: ViewTicketComponent},
  {path: 'Tickets/Edit/:id', component: EditTicketComponent},
  {path: 'Master', component: MasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
