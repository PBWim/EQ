class Home {
    constructor() {
        $(document).ready(() => {
            this.init();
        });
    }
    init() {
        var options = {
            loadDefaultModel: true,
            loadModelOnStart: false,
            loadQueryOnStart: false,
            useBootstrap: true,
            clearResultOnQueryChange: false,
            endpoint: '/api/eq',
            widgets: {
                filterBar: {
                    queryPanel: {
                        showPoweredBy: false,
                        attrElementFormat: "{entity} {attr}"
                    }
                }
            },
            onError: function (error) {
                window.EqView.context.getQuery().userConditions = {};
                alert("Error" + " " + error.type + " " + "operation fail");
            },
        }
        window.easyQuerySettings = options;
        app.EQConfigSearch("Order");
    }
}
let home = new Home();