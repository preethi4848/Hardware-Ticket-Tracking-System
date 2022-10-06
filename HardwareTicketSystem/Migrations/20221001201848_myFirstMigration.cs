using Microsoft.EntityFrameworkCore.Migrations;

namespace HardwareTicketSystem.Migrations
{
    public partial class myFirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TicketTable",
                columns: table => new
                {
                    ticketId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    empName = table.Column<string>(nullable: true),
                    empAddress = table.Column<string>(nullable: true),
                    type = table.Column<string>(nullable: true),
                    description = table.Column<string>(nullable: true),
                    status = table.Column<string>(nullable: true),
                    image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TicketTable", x => x.ticketId);
                });

            migrationBuilder.InsertData(
                table: "TicketTable",
                columns: new[] { "ticketId", "description", "empAddress", "empName", "image", "status", "type" },
                values: new object[] { 111, "Environment update", "sharath@firstam.com", "Sharath", null, "Opened", "Technical" });

            migrationBuilder.InsertData(
                table: "TicketTable",
                columns: new[] { "ticketId", "description", "empAddress", "empName", "image", "status", "type" },
                values: new object[] { 112, "Update Windows", "dhanu@firstam.com", "Dhanu", null, "Closed", "Software" });

            migrationBuilder.InsertData(
                table: "TicketTable",
                columns: new[] { "ticketId", "description", "empAddress", "empName", "image", "status", "type" },
                values: new object[] { 113, "Networking", "rahul@firstam.com", "Rahul", null, "Processing", "Hardware" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TicketTable");
        }
    }
}
