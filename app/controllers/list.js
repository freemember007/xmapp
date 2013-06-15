// 处理传入的变量
var args = arguments[0] || {};
var path = args.path;
var id = args.id;

// 活动指示器
var actInd = Alloy.createController('actInd').getView();
$.table.add(actInd);

// 获取数据
var offset = 0;
var feeds = $.localFeeds;
var reg = /来自@淘点便宜货网 --详情请点击：|（来源网站：http:\/\/t\.cn\/[a-z0-9A-Z]*） @淘必得|(，|。|！|!|：|:|-)\s*[a-zA-z]+\:\/\/[^\s]*|[a-zA-z]+\:\/\/[^\s]*|#.*?#|\[.*?\]|\|.*|- 真的值得买，什么值得买，每日推荐网购优惠信息，海淘、海外购优惠促销值值值尽在“真的值得买”|促销详情:|来自: @什么值得买|来自: @值值值 - 详情请看:|来自@美国便宜货网|来自:@趣购365|\[更多优惠信息，请访问我们的论坛|更多国外优惠信息|\| 活动页面点此.*|购买链接在此|\.\.\s+（来源网站|商品介绍点击链接在此|详情请见|，优惠信息内详|更多优惠信息|，请访问我们的网站|更多优惠|更多信息|链接在此 - 详情请看：|\| 详情点此了解|点击查看>>>>|（购买页面）|点击选购>>>>|>>>|购买点此|无返利点此|，购买点击|团购链接|，链接在此，|直接地址|，团购地址|团购地址|抢购点击|\[链接在此\]|猛击链接|直达电商连接|详情页面:|详情：|- 详情请看：|详情请看|详情|传送门|相关视频|视频页面:|@什么可以买：|非败不可|\|\| 每天优惠多|\| 每天优惠多|》\|\| 值不值得买 ？|》值不值得买？|》值不值得买 |》值不值得买|【趣购推荐】|【更新:得利网】|【得利网】|【.{2,6}】|[\(（].{2,}?[\)）]|（分享自 @harlemyin）|\| CheapHuo\|易活|，到手.+元|（.*到手.+）|(，|,|。|！|!|：|:)$|　+/g
function fetchFeed(reset){
	if (reset == true){
		offset = 0;
	}
  util.get(path + id + '/' + offset.toString(), function(res){
  	$.table.remove(actInd);
  	offset += 10;
		var data = JSON.parse(res);
		if (reset == true){
			feeds.reset();
		}
		for(var i=0; i<data.length; i++){
			var title = data[i].title.replace(reg,'');
			title = title.replace(/】.*|^【/g, '');
			var time = moment(data[i].time).fromNow();
			var feed = Alloy.createModel("feed",{
				title: title, 
				time: time, 
				image_url: data[i].image_url, 
				mimage_url: data[i].mimage_url, 
				description: data[i].description, 
				price:data[i]. price, 
				blink:data[i]. blink, 
				brand:data[i]. brand, 
				pname:data[i]. pname
			});
			feeds.add(feed);
	  }
	  
	})
}
function fetchLocal(){
	var feed = Alloy.createModel("feed");
	feeds.comparator = function(feed) { return -feed.get("favTime")}; // 设定集合的排序方法,minus表示逆序
	feeds.fetch();
	$.table.remove(actInd);
}
path === 'local'? fetchLocal() : fetchFeed();

// 打开商品详情
function showDetail(e){
	var detail = Alloy.createController('detail', e.row).getView();
	Alloy.Globals.tabGroup.activeTab.open(detail)
}

// 下拉刷新
var pullView = path === 'local'? null : Alloy.createController('pullView', {table:$.table,fetch:fetchFeed,reset:true}).getView();
$.table.headerPullView = pullView;


// 底部刷新
var updating = false;
var loadingInd = Alloy.createController('actInd').getView();
var loadingRow = Ti.UI.createTableViewRow({height:40});
loadingRow.add(loadingInd);
function beginUpdate(){
	updating = true;
	$.table.appendRow(loadingRow);
	loadingInd.show();//貌似这个必须有，否则仅第一次显示
	setTimeout(endUpdate,2000);
}
function endUpdate(){
	updating = false;
	fetchFeed();
}
$.table.addEventListener('scroll',function(e){
	if ((!updating) && path !== 'local' && e.contentSize.height>800 && (e.contentOffset.y + e.size.height + 32 > e.contentSize.height)) {
        beginUpdate();
    }
});


//释放内存
$.table.addEventListener('close', function() {
     $.destroy();
});