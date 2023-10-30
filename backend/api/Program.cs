var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ApiContext>();
builder.Services.AddControllers();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.MapControllers();

app.Run();

