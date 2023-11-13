using Microsoft.EntityFrameworkCore;
using Api.Entities;

public partial class ApiContext : DbContext
{
    public ApiContext(DbContextOptions<ApiContext> options)
        : base(options) { }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      
    }

    public DbSet<Craftman> Craftman => Set<Craftman>();
    public DbSet<CraftmanBusiness> CraftmanBusiness => Set<CraftmanBusiness>();
    public DbSet<Product> Product => Set<Product>();
}
