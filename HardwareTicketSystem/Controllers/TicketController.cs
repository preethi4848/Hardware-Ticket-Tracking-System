using HardwareTicketSystem.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace HardwareTicketSystem.Controllers
{
    [ApiController]
    public class TicketController : ControllerBase
    {
        private MyDbContext _context = null;
        public TicketController(MyDbContext context)
        {
            _context = context;
        }
        //GET ALL TICKETS
        [Route("Tickets/All")]
        public List<Ticket> GetAll() => _context.Tickets.ToList();

        //VIEW INDIVIDUAL TICKET DETAILS
        [Route("Tickets/{id}")]
        public Ticket GetTicket(int id) => _context.Tickets.FirstOrDefault((s) => s.ticketId == id);

        //ADD OPERATION
        [Route("Tickets")]
        [HttpPost]
        public string AddNew(Ticket emp)
        {
            _context.Tickets.Add(emp);
            _context.SaveChanges();
            return "Ticket added to server";
        }

        //UPDATE OPERATION
        [Route("Tickets")]
        [HttpPut]
        public string Update(Ticket emp)
        {
            var selected = _context.Tickets.FirstOrDefault((s) => s.ticketId == emp.ticketId);
            if (selected == null) return "Ticket not found to update";
            selected.empName = emp.empName;
            selected.empAddress = emp.empAddress;
            selected.type = emp.type;
            selected.description = emp.description;
            selected.status = emp.status;
            _context.SaveChanges();
            return "Ticket updated in the server";
        }    
    }
}


