function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("feed");
    $.__views.latest = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.GUI_bkC,
        title: "最新",
        id: "latest"
    });
    $.__views.latest && $.addTopLevelView($.__views.latest);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var list = Alloy.createController("list", {
        path: "api/feed/country/",
        id: "1"
    }).getView();
    $.latest.add(list);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;