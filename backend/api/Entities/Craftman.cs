using System.ComponentModel.DataAnnotations;

namespace Api.Entities
{
    public class Craftman : EntityBase
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string LastName {get; set;}
    }
}