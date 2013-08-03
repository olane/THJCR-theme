/*
TODO
- Page for adding sites?
- Pages for deleting? Add as option on insert/add page?
- Pages for removing images?
- Back end logic for everything
- Styling
*/

var jsonSiteUrl = "/roomdb/sites.php";
var jsonStairUrl = "/roomdb/stairs.php";
var jsonRoomUrl = "/roomdb/rooms.php";
var jsonPicsUrl = "/roomdb/pics.php";


$(document).ready(function(){

	loadSiteList();

	//		set up handlers 
	$("#site-dropdown").change(siteDropdownHandler);
	$("#stair-dropdown").change(stairDropdownHandler);
	$("#newentry").change(checkEnabledStatus);
	$("#room-dropdown").change(roomDropdownHandler);

});



//makes sure the right form elements are enabled and disabled
var checkEnabledStatus = function(){
	if($("#newentry").is(':checked')){
		$("#room-dropdown").attr("disabled","disabled");
		$("#roomname").removeAttr("disabled");
	}
	else{
		$("#room-dropdown").removeAttr("disabled");
		$("#roomname").attr("disabled","disabled");
	}
}




/*----------------DROPDOWNS-----------------*/

var siteID;
var stairID;
var roomID;

var siteDropdownHandler = function(){
	//load staircase list for selected site
	siteID = $("#site-dropdown").find(":selected").attr("value");
	loadStaircaseList(siteID);
}

var stairDropdownHandler = function(){
	//load room list for selected staircase
	stairID = $("#stair-dropdown").find(":selected").attr("value");
	loadRoomList(stairID);
}

var roomDropdownHandler = function(){
	roomID = $("#room-dropdown").find(":selected").attr("value");
	$("#view-link").prop("href", "http://www.jcr.trinhall.cam.ac.uk/room-database/#/" + siteID + "/" + stairID + "/" + roomID);
}


var loadSiteList = function(){

	var displaySiteList = function(siteList){
		var contentString = "";

		for(var i = 0; i < siteList.length; i++){
			contentString += "<option value='" + siteList[i].siteID + "' >"
			contentString += siteList[i].siteName;
			contentString += "</option>";
		}

		$("#site-dropdown").html(contentString).removeAttr('disabled');

		//dropdown auto-selects first site, so manually fire the change event on it
		siteDropdownHandler();

		checkEnabledStatus();
	};


	$.getJSON(
		jsonSiteUrl,
		{},
		function(siteList) {
			siteList.sort(function(a, b){
				return naturalCompare(a.siteName, b.siteName);
			});
			displaySiteList(siteList);
		}
	);
	
};


var loadStaircaseList = function(siteID){

	var displayStairList = function(stairList){
		var contentString = "";

		for(var i = 0; i < stairList.length; i++){
			contentString += "<option value='" + stairList[i].stairID + "' >"
			contentString += stairList[i].stairName;
			contentString += "</option>";
		}

		$("#stair-dropdown").html(contentString).removeAttr('disabled');

		//dropdown auto-selects first staircase, so manually fire the change event on it
		stairDropdownHandler();

		checkEnabledStatus();
	};

	$.getJSON(
		jsonStairUrl,
		{'siteID': siteID,
		'type' : 'list'},
		function(stairList) {
			stairList.sort(function(a, b){
				return naturalCompare(a.stairName, b.stairName);
			});
			displayStairList(stairList);
		}
	);

};


var loadRoomList = function(stairID){

	var displayRoomList = function(roomList){
		var contentString = "";

		for(var i = 0; i < roomList.length; i++){
			contentString += "<option value='" + roomList[i].roomID + "' >"
			contentString += roomList[i].roomName;
			contentString += "</option>";
		}

		$("#room-dropdown").html(contentString).removeAttr('disabled');

		//dropdown auto-selects first room, so manually fire the change event on it
		roomDropdownHandler();

		checkEnabledStatus();
	};

	$.getJSON(
		jsonRoomUrl,
		{'stairID': stairID,
		'type' : 'list'},
		function(roomList) {
			roomList.sort(function(a, b){
				return naturalCompare(a.roomName, b.roomName);
			});
			displayRoomList(roomList);
		}
	);

};









//compare function for natural sorting (eg, A2 comes before A10)
//source: http://my.opera.com/GreyWyvern/blog/show.dml/1671288
function naturalCompare(a, b) {
	function chunkify(t) {
		var tz = [], x = 0, y = -1, n = 0, i, j;

		while (i = (j = t.charAt(x++)).charCodeAt(0)) {
			var m = (i == 46 || (i >=48 && i <= 57));
			if (m !== n) {
				tz[++y] = "";
				n = m;
			}
			tz[y] += j;
		}
		return tz;
	}

	var aa = chunkify(a);
	var bb = chunkify(b);

	for (x = 0; aa[x] && bb[x]; x++) {
		if (aa[x] !== bb[x]) {
			var c = Number(aa[x]), d = Number(bb[x]);
			if (c == aa[x] && d == bb[x]) {
				return c - d;
			} else return (aa[x] > bb[x]) ? 1 : -1;
		}
	}
	return aa.length - bb.length;
}