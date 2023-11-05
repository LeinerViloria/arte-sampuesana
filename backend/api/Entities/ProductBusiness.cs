using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Api.Entities;

public class ProductBusiness : EntityBase
{
    [ForeignKey(nameof(Product))]
    [Required]
    public int RowidProduct { get; set; }
    [ForeignKey(nameof(Business))]
    [Required]
    public int RowidBusiness { get; set; }
    public Product? Product { get; set; }
    public CraftmanBusiness? Business { get; set; }
}