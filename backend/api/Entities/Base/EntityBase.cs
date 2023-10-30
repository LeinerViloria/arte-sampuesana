
using System.ComponentModel.DataAnnotations;

namespace Api.Entities
{
    public abstract class EntityBase
    {
        [Key]
        [Required]
        public int Rowid { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }
        [Required]
        public DateTime? LastUpdateDate { get; set; }
    }
}