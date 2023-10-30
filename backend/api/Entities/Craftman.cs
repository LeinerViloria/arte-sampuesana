using System.ComponentModel.DataAnnotations;

namespace Api.Entities
{
    public class Craftman
    {
        [Key]
        [Required]
        public int Rowid { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string LastName {get; set;}
    }
}