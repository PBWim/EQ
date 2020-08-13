var Home = (function () {
    function Home() {
        var _this = this;
        $(document).ready(function () {
            _this.init();
        });
    }
    Home.prototype.init = function () {
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
        };
        window.easyQuerySettings = options;
        app.EQConfigSearch("Order");
    };
    return Home;
}());
var home = new Home();
//# sourceMappingURL=home.js.map