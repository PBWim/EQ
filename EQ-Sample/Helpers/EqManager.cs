namespace EQ_Sample.Helpers
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Korzh.EasyQuery;
    using Korzh.EasyQuery.Linq;
    using Korzh.EasyQuery.Services;

    public class EqManager<T> : EasyQueryManagerLinq<T>
    {
        public EqManager(IServiceProvider services) : base(services, new EasyQueryOptions(services))
        {

        }

        public EqManager(IServiceProvider services, EasyQueryOptions options)
            : base(services, options)
        {

        }

        protected override Task<bool> TryLoadModelAsync(DataModel model, string modelId)
        {
            var type = typeof(Data.NWind.Order).Assembly.GetTypes().FirstOrDefault(x => x.Name == modelId);
            if (type == null)
            {
                return Task.FromResult(false);
            }
            model.LoadFromEntityType(type);
            model.SortEntities();
            return Task.FromResult(true);
        }

        protected override void TuneBuilder(IQueryBuilder builder)
        {
            base.TuneBuilder(builder);
            (builder.Formats as QueryFormats).UseTimezoneOffset = true;
        }
    }
}