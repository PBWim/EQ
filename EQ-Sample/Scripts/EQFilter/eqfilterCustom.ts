declare var easyquery: any;

class EqfilterCustom extends easyquery.core.EqServerQueryExecutor {
    constructor(context: any) {
        super(context);
    }
    executeQuery(params) {
        var context = this.context;
        var filterObj = {
            query: context.getQuery().toJSONData(),
            options: params.options
        }    
    }
}