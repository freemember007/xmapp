function fetch(){
	var list = Alloy.createController('list',{path:'local',id:''}).getView();
	$.myFav.add(list);
}
