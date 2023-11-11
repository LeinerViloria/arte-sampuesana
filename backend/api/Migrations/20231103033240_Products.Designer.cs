﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(ApiContext))]
    [Migration("20231103033240_Products")]
    partial class Products
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.13")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Api.Entities.Craftman", b =>
                {
                    b.Property<int>("Rowid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("Gender")
                        .HasColumnType("int");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime?>("LastUpdateDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.HasKey("Rowid");

                    b.ToTable("Craftman");
                });

            modelBuilder.Entity("Api.Entities.CraftmanBusiness", b =>
                {
                    b.Property<int>("Rowid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime?>("LastUpdateDate")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("RowidCraftman")
                        .HasColumnType("int");

                    b.HasKey("Rowid");

                    b.HasIndex(new[] { "RowidCraftman" }, "CraftmanBusiness_Index_1")
                        .IsUnique();

                    b.ToTable("CraftmanBusinesses");
                });

            modelBuilder.Entity("Api.Entities.CraftmanBusiness", b =>
                {
                    b.HasOne("Api.Entities.Craftman", "Craftman")
                        .WithMany()
                        .HasForeignKey("RowidCraftman")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Craftman");
                });
#pragma warning restore 612, 618
        }
    }
}
