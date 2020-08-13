namespace EQ_Sample.Controllers
{
    using System.Linq;
    using System.Threading.Tasks;
    using EQ_Sample.Data;
    using Korzh.EasyQuery.Services;
    using Microsoft.AspNetCore.Mvc;

    public class EqController : Controller
    {
        private readonly EasyQueryManagerLinq<IEntity> eqManager;

        public EqController(EasyQueryManagerLinq<IEntity> eqManager)
        {
            this.eqManager = eqManager;
        }

        [HttpGet("{modelId}")]
        public async Task<IActionResult> Models(string modelId)
        {
            var type = typeof(Data.NWind.Order).Assembly.GetTypes().FirstOrDefault(x => x.Name == modelId);
            if (type == null)
            {
                return this.Json("");
            }

            var entityModel = await this.eqManager.GetModelAsync(modelId);
            var modelJson = await entityModel.SaveToJsonStringForClientAsync();
            return this.Ok("{\"result\":\"ok\", \"model\":" + modelJson + "}");
        }
    }
}