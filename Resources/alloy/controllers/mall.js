function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.mall = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.GUI_bkC,
        title: "商城",
        id: "mall"
    });
    $.__views.mall && $.addTopLevelView($.__views.mall);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.mall.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tableData = [];
    for (var i = 0; util.mallData.length > i; i++) {
        var row = Ti.UI.createTableViewRow({
            title: util.mallData[i].title,
            id: util.mallData[i].id
        });
        tableData.push(row);
    }
    $.table.setData(tableData);
    $.table.addEventListener("click", function(e) {
        var win = Ti.UI.createWindow({
            title: e.row.title
        });
        var list = Alloy.createController("list", {
            path: "api/feed/mall/",
            id: e.source.id
        }).getView();
        win.add(list);
        Alloy.Globals.tabGroup.activeTab.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;