using Microsoft.EntityFrameworkCore;
using Api.Entities;

class ApiContext : DbContext
{
    public ApiContext(DbContextOptions<ApiContext> options)
        : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      var serverVersion = new MySqlServerVersion(new Version(8, 0, 34));

      optionsBuilder.UseMySql("server=localhost;database=proyectoGestion;user=root;", serverVersion);
    }

    public DbSet<Craftman> Craftman => Set<Craftman>();
}