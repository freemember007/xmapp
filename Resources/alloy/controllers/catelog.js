function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.catelog = Ti.UI.createWindow({
        backgroundColor: Alloy.Globals.GUI_bkC,
        title: "分类",
        id: "catelog"
    });
    $.__views.catelog && $.addTopLevelView($.__views.catelog);
    $.__views.table = Ti.UI.createTableView({
        id: "table"
    });
    $.__views.catelog.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var catelogData = [ {
        id: 1,
        title: "服饰箱包"
    }, {
        id: 2,
        title: "美容护肤"
    }, {
        id: 3,
        title: "数码家电"
    }, {
        id: 4,
        title: "家居厨卫"
    }, {
        id: 5,
        title: "母婴用品"
    }, {
        id: 6,
        title: "运动文体"
    }, {
        id: 7,
        title: "食品保健"
    }, {
        id: 8,
        title: "手表配饰"
    } ];
    var tableData = [];
    for (var i = 0; catelogData.length > i; i++) {
        var row = Ti.UI.createTableViewRow({
            title: catelogData[i].title,
            id: catelogData[i].id
        });
        tableData.push(row);
    }
    $.table.setData(tableData);
    $.table.addEventListener("click", function(e) {
        var win = Ti.UI.createWindow({
            title: e.source.title
        });
        var list = Alloy.createController("list", {
            path: "api/feed/catlog/",
            id: e.source.id
        }).getView();
        win.add(list);
        Alloy.Globals.tabGroup.activeTab.open(win);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;