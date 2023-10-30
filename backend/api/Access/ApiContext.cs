using Microsoft.EntityFrameworkCore;
using Api.Entities;

class ApiContext : DbContext
{
    public ApiContext(DbContextOptions<ApiContext> options)
        : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseMySQL("server=localhost;database=proyectoGestion;user=root;");
    }

    public DbSet<Craftman> Craftman => Set<Craftman>();
}