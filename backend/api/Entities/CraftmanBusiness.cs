using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Api.Entities;

[Index(nameof(RowidCraftman), Name="CraftmanBusiness_Index_1", IsUnique = true)]
public class CraftmanBusiness : EntityBase
{
    [Required]
    public string Name {get; set;}
    [Required]
    public string QRUrl {get; set;}
    [ForeignKey(nameof(Craftman))]
    [Required]
    public int RowidCraftman { get; set; }
    public Craftman? Craftman { get; set; }
}