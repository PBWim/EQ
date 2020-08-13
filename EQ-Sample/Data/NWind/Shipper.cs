namespace EQ_Sample.Data.NWind
{
    using System.ComponentModel.DataAnnotations.Schema;

    public class Shipper : IEntity
    {
        [Column("ShipperID")]
        public int Id { get; set; }

        public string CompanyName { get; set; }

        public string Phone { get; set; }
    }
}