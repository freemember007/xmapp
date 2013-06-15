if (OS_IOS){
	Titanium.UI.iPhone.statusBarStyle = Titanium.UI.iPhone.StatusBar.TRANSLUCENT_BLACK;
}

$.tabGroup.open();

// 全局变量
Alloy.Globals.tabGroup = $.tabGroup;
Alloy.Globals.tab1 = $.tab1;
Alloy.Globals.tab2 = $.tab2;
Alloy.Globals.tab3 = $.tab3;
Alloy.Globals.tab4 = $.tab4;
Alloy.Globals.tab5 = $.tab5;
