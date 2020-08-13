interface Window {
    EQ: any;
    easyQuerySettings: any;
    EqGridSelector: any;
    eqIsPaging: any;
    eqObject: any;
    EqWidgetSelector: any;
    EqView: any;
}

class App {
    EQConfigSearch(modelName, filter: Array<any> = null) {
        window.eqObject = null;
        if (!window.EqView) {
            let view = new easyquery.ui.DataFilterView();
            let context = view.getContext();
            context.useEnterprise("0uo6BQcy_pU-eeWAgzISFNmGiV8lwZBGVvkaRGhPoN4BFJKGY4U");
            context.getServices().registerQueryExecutorResolver((context) => new EqfilterCustom(context));
            context.setDefaultModelId(modelName);
            view.init(window.easyQuerySettings);
            window.EqView = view;
        } else {
            window.EqView.context.setDefaultModelId(modelName);
        }

        //if (filter != null) {
            app.EQInitSearch(modelName, filter);
        //}

        if (window.EqView.context.getModel().aggrFunctions.length > 0) {
            window.EqView.context.clearQuery();
            app.EQInitSearch(modelName);
        }
    }

    EQInitSearch(modelName, filter: Array<any> = null) {
        var view = window.EqView;
        if (view) {
            var broker = view.context();
            broker.loadModel({
                modelId: modelName,
                success: (modelData) => {
                    if (filter != null) {
                        var query = broker.context.getQuery();
                        $.each(filter, function (index, value) {
                            let cond = query.addSimpleCondition(value);
                            if (typeof (value.enabled) !== 'undefined' && value.enabled == false) {
                                cond.enabled = false;
                            }
                            if (typeof (value.readOnly) !== 'undefined' && value.readOnly == true) {
                                cond.readOnly = true;
                            }
                        });
                        broker.context.refreshWidgets();
                        window.eqIsPaging = true;
                        window.eqObject = {
                            query: query.toJSONData(),
                            options: { page: 1, resultFormat: 1 }
                        };
                        window.EqGridSelector.data(window.EqWidgetSelector).dataSource.read();
                    }

                    $("#FilterBar").removeClass("disable-filter-div");
                }
            });
        }
    }
}
let app = new App();