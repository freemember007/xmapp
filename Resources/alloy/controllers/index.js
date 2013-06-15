function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.tabGroup = Ti.UI.createTabGroup({
        backgroundColor: "#fff",
        activeTabIconTint: "#ffcc00",
        barColor: "#000",
        tabsBackgroundColor: "#000",
        id: "tabGroup"
    });
    $.__views.__alloyId1 = Alloy.createController("latest", {
        id: "__alloyId1"
    });
    $.__views.tab1 = Ti.UI.createTab({
        icon: "rss.png",
        window: $.__views.__alloyId1.getViewEx({
            recurse: true
        }),
        id: "tab1",
        title: "最新"
    });
    $.__views.tabGroup.addTab($.__views.tab1);
    $.__views.__alloyId4 = Alloy.createController("catelog", {
        id: "__alloyId4"
    });
    $.__views.tab2 = Ti.UI.createTab({
        icon: "grid.png",
        window: $.__views.__alloyId4.getViewEx({
            recurse: true
        }),
        id: "tab2",
        title: "分类"
    });
    $.__views.tabGroup.addTab($.__views.tab2);
    $.__views.__alloyId6 = Alloy.createController("mall", {
        id: "__alloyId6"
    });
    $.__views.tab3 = Ti.UI.createTab({
        icon: "globe.png",
        window: $.__views.__alloyId6.getViewEx({
            recurse: true
        }),
        id: "tab3",
        title: "商城"
    });
    $.__views.tabGroup.addTab($.__views.tab3);
    $.__views.__alloyId8 = Alloy.createController("oversea", {
        id: "__alloyId8"
    });
    $.__views.tab4 = Ti.UI.createTab({
        icon: "dollar.png",
        window: $.__views.__alloyId8.getViewEx({
            recurse: true
        }),
        id: "tab4",
        title: "海外购"
    });
    $.__views.tabGroup.addTab($.__views.tab4);
    $.__views.__alloyId10 = Alloy.createController("myFav", {
        id: "__alloyId10"
    });
    $.__views.tab5 = Ti.UI.createTab({
        icon: "star.png",
        window: $.__views.__alloyId10.getViewEx({
            recurse: true
        }),
        id: "tab5",
        title: "我的收藏"
    });
    $.__views.tabGroup.addTab($.__views.tab5);
    $.__views.tabGroup && $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
    $.tabGroup.open();
    Alloy.Globals.tabGroup = $.tabGroup;
    Alloy.Globals.tab1 = $.tab1;
    Alloy.Globals.tab2 = $.tab2;
    Alloy.Globals.tab3 = $.tab3;
    Alloy.Globals.tab4 = $.tab4;
    Alloy.Globals.tab5 = $.tab5;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;