function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "#fff",
        barColor: "#000",
        id: "tabGroup"
    });
    $.__views.__alloyId0 = Alloy.createController("latest", {
        id: "__alloyId0"
    });
    $.__views.tab1 = Ti.UI.createTab({
        window: $.__views.__alloyId0.getViewEx({
            recurse: true
        }),
        id: "tab1",
        title: "最新"
    });
    $.__views.tabGroup.addTab($.__views.tab1);
    $.__views.__alloyId2 = Alloy.createController("catelog", {
        id: "__alloyId2"
    });
    $.__views.tab2 = Ti.UI.createTab({
        window: $.__views.__alloyId2.getViewEx({
            recurse: true
        }),
        id: "tab2",
        title: "分类"
    });
    $.__views.tabGroup.addTab($.__views.tab2);
    $.__views.__alloyId4 = Alloy.createController("mall", {
        id: "__alloyId4"
    });
    $.__views.tab3 = Ti.UI.createTab({
        window: $.__views.__alloyId4.getViewEx({
            recurse: true
        }),
        id: "tab3",
        title: "网站"
    });
    $.__views.tabGroup.addTab($.__views.tab3);
    $.__views.__alloyId6 = Alloy.createController("oversea", {
        id: "__alloyId6"
    });
    $.__views.tab5 = Ti.UI.createTab({
        window: $.__views.__alloyId6.getViewEx({
            recurse: true
        }),
        id: "tab5",
        title: "海外购"
    });
    $.__views.tabGroup.addTab($.__views.tab5);
    $.__views.__alloyId8 = Alloy.createController("coupon", {
        id: "__alloyId8"
    });
    $.__views.tab5 = Ti.UI.createTab({
        window: $.__views.__alloyId8.getViewEx({
            recurse: true
        }),
        id: "tab5",
        title: "优惠券"
    });
    $.__views.tabGroup.addTab($.__views.tab5);
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
    $.tabGroup.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;