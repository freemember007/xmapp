// 准备数据
var catelogData = [
	 {id:1,title:'服饰箱包'},
	 {id:2,title:'美容护肤'},
	 {id:3,title:'数码家电'},
	 {id:4,title:'家居厨卫'},
	 {id:5,title:'母婴用品'},
	 {id:6,title:'运动文体'},
	 {id:7,title:'食品保健'},
	 {id:8,title:'手表配饰'}
];

// 设置tableData
var tableData = [];
for (var i=0; i<catelogData.length; i++) {
	var row = Ti.UI.createTableViewRow({
		title: catelogData[i].title,
		id: catelogData[i].id,
	});
	tableData.push(row);
}
$.table.setData(tableData);

// click事件监听
$.table.addEventListener('click',function(e){
	var win = Ti.UI.createWindow({
		title: e.source.title,
	});
	var list = Alloy.createController('list', {path:'api/feed/catlog/', id:e.source.id}).getView();
	win.add(list);
	Alloy.Globals.tabGroup.activeTab.open(win);
})