function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.oversea = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "海外购",
        id: "oversea"
    });
    $.__views.oversea && $.addTopLevelView($.__views.oversea);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var list = Alloy.createController("list", {
        path: "api/feed/country/",
        id: "2"
    }).getView();
    $.oversea.add(list);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;