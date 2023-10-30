using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApiContext>(options => {
    var serverVersion = new MySqlServerVersion(new Version(8, 0, 34));
    options.UseMySql("server=localhost;database=proyectoGestion;user=root;", serverVersion);
}, ServiceLifetime.Transient);

builder.Services.AddControllers();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.MapControllers();

app.Run();

