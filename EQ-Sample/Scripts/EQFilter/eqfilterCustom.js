var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EqfilterCustom = (function (_super) {
    __extends(EqfilterCustom, _super);
    function EqfilterCustom(context) {
        return _super.call(this, context) || this;
    }
    EqfilterCustom.prototype.executeQuery = function (params) {
        var context = this.context;
        var filterObj = {
            query: context.getQuery().toJSONData(),
            options: params.options
        };
    };
    return EqfilterCustom;
}(easyquery.core.EqServerQueryExecutor));
//# sourceMappingURL=eqfilterCustom.js.map