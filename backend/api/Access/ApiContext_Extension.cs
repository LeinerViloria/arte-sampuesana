
public partial class ApiContext
{
    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        return Task.FromResult(InternalSave());
    }
    public override int SaveChanges()
    {
        return InternalSave();
    }
    internal int InternalSave()
    {
        foreach (var entry in ChangeTracker.Entries())
        {
            if(entry.State == Microsoft.EntityFrameworkCore.EntityState.Added)
            {
                var CreationDateProperty = entry.Entity.GetType().GetProperty("CreationDate");
                CreationDateProperty?.SetValue(entry.Entity, DateTime.UtcNow);
            }

            var LastUpdateDateProperty = entry.Entity.GetType().GetProperty("LastUpdateDate");
            LastUpdateDateProperty?.SetValue(entry.Entity, DateTime.UtcNow);
        }
        var result = base.SaveChanges();
        return result;
    }
}