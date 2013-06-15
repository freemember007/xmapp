var sitePath = ENV_DEV? "http://xmzdm.com/" : "http://xmzdm.com/";


exports.send = function(url, data, onload){
	var networkType = Ti.Network.getNetworkType();
	if(networkType == Ti.Network.NETWORK_NONE){
		Ti.UI.createAlertDialog({title:"提示", message:"网络连接异常，请检查。", ok:"确定"}).show();
		return;
	}
	var xhr = Titanium.Network.createHTTPClient();
	xhr.timeout = 60000;
    xhr.onload = function(e){
    	if (this.status != 200) {
	        alert(e);
	        alert(this.status);
	    }else{
    		onload(this.responseText);
	    }
    };
    xhr.onerror = function(e){
        alert(e.error);
    };
    xhr.open('POST',sitePath + url);
    xhr.send(data);
}

exports.get = function(url, onload){
	var networkType = Ti.Network.getNetworkType();
	if(networkType == Ti.Network.NETWORK_NONE){
		Ti.UI.createAlertDialog({title:"提示", message:"网络连接异常，请检查。", ok:"确定"}).show();
		return;
	}
	var xhr = Titanium.Network.createHTTPClient();
    xhr.onload = function(e){
    	if (this.status != 200) {
	        alert(e);
	        alert(this.status);
	    }else{
    		onload(this.responseText);
	    }
    };
    xhr.onerror = function(e){
        alert(e.error);
    };
    xhr.open('get',sitePath + url);
    xhr.send();
}

exports.mallData = [
	 {id:'taobao.com',title:'淘宝'},
	 {id:'tmall.com',title:'天猫'},
	 {id:'jd.com',title:'京东'},
	 {id:'amazon.cn',title:'亚马逊'},
	 {id:'amazon.com',title:'美国亚马逊'},
	 {id:'dangdang.com',title:'当当'},
	 {id:'51buy.com',title:'易迅'},
	 {id:'suning.com',title:'苏宁易购'},
	 {id:'newegg.com.cn',title:'新蛋'},
	 {id:'yihaodian.com',title:'一号店'}
];

exports.alert = function(message){
	Ti.UI.createAlertDialog({
		title: "提示",
		message: message,
		ok: "确定"
	}).show();
}
