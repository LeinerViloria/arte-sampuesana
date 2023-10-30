using System.ComponentModel.DataAnnotations;
using Api.Enum;

namespace Api.Entities
{
    public class Craftman : EntityBase
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string LastName {get; set;}
        [Required]
        public enumGender Gender {get; set;} = enumGender.Undefined;
    }
}