namespace EQ_Sample.Data.NWind
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class Category : IEntity
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Column("CategoryID")]
        public int Id { get; set; }

        public string CategoryName { get; set; }

        public string Description { get; set; }

        [ScaffoldColumn(false)]
        public byte[] Picture { get; set; }

    }
}