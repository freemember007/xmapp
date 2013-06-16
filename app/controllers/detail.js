// 处理传入的变量
var args = arguments[0] || {};
$.detail.hideTabBar( )
$.title.text = args.children[1].text;
$.desc.text = args.desc;
$.image.image = args.mimage_url;
$.price.text = '限时抢购：' + args.children[2].text

// 识别商品所在网站
for (var i=0; i<util.mallData.length; i++) {
	if ( (args.blink).indexOf(util.mallData[i].id) != -1 ) {
		$.button.text = '去' + util.mallData[i].title + '抢购';
	}
}


// 判断是否已收藏过
function checkFav(){
	var feeds = Alloy.createCollection('feed')
	feeds.fetch();
	if (feeds.get($.title.text) != null) {
		$.favButton.title = '取消收藏'
	} else {
		$.favButton.title = '收藏'
	}
}

// 收藏/取消收藏
function doFav(){
	var feed = Alloy.createModel("feed",{
		title: $.title.text,
		time: args.children[3].text,
		image_url: args.children[0].image,
		mimage_url: args.mimage_url,
		description: args.desc,
		price: args.children[2].text,
		blink: args.blink,
		favTime: (new Date()).getTime(),
	});
	if ($.favButton.title == '收藏'){
		feed.save();
		$.favButton.title = '取消收藏'
	} else {
		feed.destroy();
		$.favButton.title = '收藏'
	}
	
}


// 放大图片
function zoomImage(){
	Alloy.createController('zoomImage', $.image.image).getView();
}

// 打开购物网站
function openWebview(){
	var webWin = Alloy.createController('webWindow', args.blink).getView();
	Alloy.Globals.tabGroup.activeTab.open(webWin);
}