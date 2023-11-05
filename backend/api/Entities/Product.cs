using System.ComponentModel.DataAnnotations;

namespace Api.Entities;

public class Product : EntityBase
{
    [Required]
    public string Name { get; set; }
    
    [Required]
    [RegularExpression(@"^\$?\d+(\.(\d{2}))?$")]
    [Range(minimum:0, maximum:10_000_000)]
    public decimal Price { get; set; }
    
    [Required]
    public string Image { get; set; }
    
    [Required]
    [Range(0, 5)]
    public int Stars { get; set; }
    
    [StringLength(2000)]
    public string CulturalInformation { get; set; }
}