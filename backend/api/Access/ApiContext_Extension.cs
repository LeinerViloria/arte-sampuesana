
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

    public void ResetValues(Object entity, Object UpdatedEntity)
    {
        var ValuesToIgnore = new List<string>(){"Rowid", "CreationDate", "LastUpdateDate"};
        var lEntry = this.Entry(entity);
        foreach (var lProperty in lEntry.Metadata.GetProperties().Where(x => !ValuesToIgnore.Contains(x.Name)))
        {
            lEntry.OriginalValues[lProperty] = UpdatedEntity.GetType().GetProperty(lProperty.Name).GetValue(UpdatedEntity);
            UpdatedEntity.GetType().GetProperty(lProperty.Name).SetValue(entity, lEntry.OriginalValues[lProperty]);
        }
    }
}