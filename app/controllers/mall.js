// 设置tableData
var tableData = [];
for (var i=0; i<util.mallData.length; i++) {
	var row = Ti.UI.createTableViewRow({
		title: util.mallData[i].title,
		id: util.mallData[i].id,
	});
	tableData.push(row);
}
$.table.setData(tableData);

// click事件监听
$.table.addEventListener('click',function(e){
	var win = Ti.UI.createWindow({
		title: e.row.title,
	});
	var list = Alloy.createController('list', {path:'api/feed/mall/', id:e.source.id}).getView();
	win.add(list);
	Alloy.Globals.tabGroup.activeTab.open(win);
})