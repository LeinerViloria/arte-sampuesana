using Microsoft.EntityFrameworkCore;
using Api.Entities;

class ApiContext : DbContext
{
    public ApiContext(DbContextOptions<TodoDb> options)
        : base(options) { }

    public DbSet<Craftman> Craftman => Set<Craftman>();
}