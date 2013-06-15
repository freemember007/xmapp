var args = arguments[0] || {};
var table = args.table;
var fetch = args.fetch;
var reset = args.reset;


var pulling = false;
var reloading = false;


function beginReloading(){
	fetch(reset);
	setTimeout(endReloading,2000);
}

function endReloading(){
	// when you're done, just reset
	table.setContentInsets({top:0},{animated:true});
	reloading = false;
	$.lastUpdatedLabel.text = "上次更新: "+moment(new Date()).fromNow();
	$.statusLabel.text = "下拉刷新...";
	$.actInd.hide();
	$.arrow.show();
}

table.addEventListener('scroll',function(e){
	var offset = e.contentOffset.y;
	if (offset < -65.0 && !pulling && !reloading){
		var t = Ti.UI.create2DMatrix();
		t = t.rotate(-180);
		pulling = true;
		$.arrow.animate({transform:t,duration:180});
		$.statusLabel.text = "释放刷新...";
	}
	else if((offset > -65.0 && offset < 0 ) && pulling && !reloading){
		pulling = false;
		var t = Ti.UI.create2DMatrix();
		$.arrow.animate({transform:t,duration:180});
		$.statusLabel.text = "下拉刷新...";
	}    
});

table.addEventListener('dragEnd', function(){	
	if(pulling && !reloading){
		reloading = true;
		pulling = false;
		$.arrow.hide();
		$.actInd.show();
		$.statusLabel.text = "加载中...";
		table.setContentInsets({top:60},{animated:true});
		table.scrollToTop(-60,true);
		$.arrow.transform=Ti.UI.create2DMatrix();
		beginReloading();
	}
});