﻿namespace EQ_Sample.Data.NWind
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using Korzh.EasyQuery;

    [DisplayColumn("Name")]
    [EqEntity(DisplayName = "Client")]
    public class Customer : IEntity
    {
        [Column("CustomerID")]
        public string Id { get; set; }

        [Display(Name = "Company Name")]
        public string CompanyName { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public string Region { get; set; }

        public string PostalCode { get; set; }

        [EqListValueEditor]
        public string Country { get; set; }

        public string ContactName { get; set; }

        public string ContactTitle { get; set; }

        public string Phone { get; set; }

        public string Fax { get; set; }
    }
}