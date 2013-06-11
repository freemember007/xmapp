function doClick(e) {  
    alert($.label.text);
}

if (OS_IOS){
	Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
}

$.tabGroup.open();
