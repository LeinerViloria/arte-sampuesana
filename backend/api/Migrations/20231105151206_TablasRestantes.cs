using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class TablasRestantes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "CulturalInformation",
                table: "Product",
                type: "varchar(2000)",
                maxLength: 2000,
                nullable: false,
                defaultValue: "")
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "ProductBusiness",
                columns: table => new
                {
                    Rowid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    RowidProduct = table.Column<int>(type: "int", nullable: false),
                    RowidBusiness = table.Column<int>(type: "int", nullable: false),
                    CreationDate = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    LastUpdateDate = table.Column<DateTime>(type: "datetime(6)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductBusiness", x => x.Rowid);
                    table.ForeignKey(
                        name: "FK_ProductBusiness_CraftmanBusiness_RowidBusiness",
                        column: x => x.RowidBusiness,
                        principalTable: "CraftmanBusiness",
                        principalColumn: "Rowid",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductBusiness_Product_RowidProduct",
                        column: x => x.RowidProduct,
                        principalTable: "Product",
                        principalColumn: "Rowid",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_ProductBusiness_RowidBusiness",
                table: "ProductBusiness",
                column: "RowidBusiness");

            migrationBuilder.CreateIndex(
                name: "IX_ProductBusiness_RowidProduct",
                table: "ProductBusiness",
                column: "RowidProduct");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductBusiness");

            migrationBuilder.DropColumn(
                name: "CulturalInformation",
                table: "Product");
        }
    }
}
