﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(ApiContext))]
    partial class ApiContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
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

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("QRUrl")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<int>("RowidCraftman")
                        .HasColumnType("int");

                    b.HasKey("Rowid");

                    b.HasIndex(new[] { "RowidCraftman" }, "CraftmanBusiness_Index_1")
                        .IsUnique();

                    b.ToTable("CraftmanBusiness");
                });

            modelBuilder.Entity("Api.Entities.Product", b =>
                {
                    b.Property<int>("Rowid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("CulturalInformation")
                        .IsRequired()
                        .HasMaxLength(2000)
                        .HasColumnType("varchar(2000)");

                    b.Property<string>("Image")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<DateTime?>("LastUpdateDate")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(65,30)");

                    b.Property<int>("Stars")
                        .HasColumnType("int");

                    b.HasKey("Rowid");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("Api.Entities.ProductBusiness", b =>
                {
                    b.Property<int>("Rowid")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("CreationDate")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime?>("LastUpdateDate")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("RowidBusiness")
                        .HasColumnType("int");

                    b.Property<int>("RowidProduct")
                        .HasColumnType("int");

                    b.HasKey("Rowid");

                    b.HasIndex("RowidBusiness");

                    b.HasIndex("RowidProduct");

                    b.ToTable("ProductBusiness");
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

            modelBuilder.Entity("Api.Entities.ProductBusiness", b =>
                {
                    b.HasOne("Api.Entities.CraftmanBusiness", "Business")
                        .WithMany()
                        .HasForeignKey("RowidBusiness")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Api.Entities.Product", "Product")
                        .WithMany()
                        .HasForeignKey("RowidProduct")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Business");

                    b.Navigation("Product");
                });
#pragma warning restore 612, 618
        }
    }
}
