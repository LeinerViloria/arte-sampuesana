using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Actualizacion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CraftmanBusinesses_Craftman_RowidCraftman",
                table: "CraftmanBusinesses");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CraftmanBusinesses",
                table: "CraftmanBusinesses");

            migrationBuilder.RenameTable(
                name: "CraftmanBusinesses",
                newName: "CraftmanBusiness");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CraftmanBusiness",
                table: "CraftmanBusiness",
                column: "Rowid");

            migrationBuilder.CreateTable(
                name: "Product",
                columns: table => new
                {
                    Rowid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Price = table.Column<decimal>(type: "decimal(65,30)", nullable: false),
                    Image = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Stars = table.Column<int>(type: "int", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    LastUpdateDate = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Product", x => x.Rowid);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddForeignKey(
                name: "FK_CraftmanBusiness_Craftman_RowidCraftman",
                table: "CraftmanBusiness",
                column: "RowidCraftman",
                principalTable: "Craftman",
                principalColumn: "Rowid",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CraftmanBusiness_Craftman_RowidCraftman",
                table: "CraftmanBusiness");

            migrationBuilder.DropTable(
                name: "Product");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CraftmanBusiness",
                table: "CraftmanBusiness");

            migrationBuilder.RenameTable(
                name: "CraftmanBusiness",
                newName: "CraftmanBusinesses");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CraftmanBusinesses",
                table: "CraftmanBusinesses",
                column: "Rowid");

            migrationBuilder.AddForeignKey(
                name: "FK_CraftmanBusinesses_Craftman_RowidCraftman",
                table: "CraftmanBusinesses",
                column: "RowidCraftman",
                principalTable: "Craftman",
                principalColumn: "Rowid",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
