Path.map("#/(:siteID)(/)(:stairID)(/)(:roomID)(/)").to(function(){
	var siteID = this.params.siteID;
	var stairID = this.params.stairID;
	var roomID = this.params.roomID;

	if (typeof siteID === 'undefined') {
		// load list of sites
		loadSiteList();
	}
	else if (typeof stairID === 'undefined') {
		// load list of staircases for site
		loadStaircaseList(siteID);
	}
	else if (typeof roomID === 'undefined') {
		// load list of rooms for staircase
		loadRoomList(siteID, stairID);
	}
	else{
		//load room
		loadRoom(siteID, stairID, roomID);
	}
}).exit(function(){
		$("#roomdb_content").animate({opacity:0, left:-100}, 100);
		$("#roomdb_pics").animate({opacity:0, left:-100}, 100);
}).enter(function(){
		$("#roomdb_pics").empty();
});

Path.root("#/");

$(document).ready(function(){
	Path.listen();
});


var jsonSiteUrl = "/roomdb/sites.php";
var jsonStairUrl = "/roomdb/stairs.php";
var jsonRoomUrl = "/roomdb/rooms.php";
var jsonPicsUrl = "/roomdb/pics.php";

var siteListCache =  [];

var loadSiteList = function(){

	var displaySiteList = function(siteList){
		//takes an object representing the list of sites and displays it on the page
		var contentString = "";

		contentString += "<div class='breadcrumb'>";
			contentString += "/ All sites";
		contentString += "</div>";

		contentString += "<h1>All Sites</h1>";

		contentString += "<ul class='siteList'>";
		for(var i = 0; i < siteList.length; i++){
			contentString += "<li><a href='#/" + siteList[i].siteID + "'>";
			contentString += siteList[i].siteName;
			contentString += "</a></li>";
		}
		contentString += "</ul>";

		$("#roomdb_content").html(contentString).stop().css({"left": 100, "opacity":0}).animate({opacity:1, left:0}, 100);
	};

	// use the cached version if we already downloaded the site list
	if(siteListCache.length !== 0){
		displaySiteList(siteListCache);
	}
	else{
		$.getJSON(
			jsonSiteUrl,
			{},
			function(siteList) {
				siteList.sort(function(a, b){
					return naturalCompare(a.siteName, b.siteName);
				});
				siteListCache = siteList;
				displaySiteList(siteListCache);
			}
		);
	}
};


//holds lists of cached staircases for each site that has been loaded
var staircaseListCache = {};

var loadStaircaseList = function(siteID){

	var displayStairList = function(stairList){
		var contentString = "";

		contentString += "<div class='breadcrumb'>";
			contentString += "/ <a href='#/'>All sites</a> / ";
			contentString += stairList[0].siteName;
		contentString += "</div>";

		contentString += "<h1>Staircases at " + stairList[0].siteName + "</h1>";

		contentString += "<ul class='stairList'>";
		for(var i = 0; i < stairList.length; i++){
			contentString += "<li><a href='#/" + siteID + "/" + stairList[i].stairID + "'>";
			contentString += stairList[i].stairName;
			contentString += "</a></li>";
		}
		contentString += "</ul>";

		$("#roomdb_content").html(contentString).stop().css({"left": 100, "opacity":0}).animate({opacity:1, left:0}, 100);
	};

	if(typeof staircaseListCache[siteID] === "undefined"){
		$.getJSON(
			jsonStairUrl,
			{'siteID': siteID,
			'type' : 'list'},
			function(stairList) {
				stairList.sort(function(a, b){
					return naturalCompare(a.stairName, b.stairName);
				});
				staircaseListCache[siteID] = stairList;
				displayStairList(staircaseListCache[siteID]);
			}
		);
	}
	else{
		//we already have a cached copy, display it
		displayStairList(staircaseListCache[siteID]);
	}

};


//holds lists of cached rooms for each staircase that has been loaded
var roomListCache = {};

var loadRoomList = function(siteID, stairID){

	var displayRoomList = function(roomList){
		var contentString = "";

		contentString += "<div class='breadcrumb'>";
			contentString += "/ <a href='#/'>All sites</a> / ";
			contentString += "<a href='#/" + roomList[0].siteID + "'>" + roomList[0].siteName + "</a> / ";
			contentString += roomList[0].stairName;
		contentString += "</div>";

		contentString += "<h1>Rooms on " + roomList[0].stairName + " staircase</h1>";

		contentString += "<ul class='roomList'>";
		for(var i = 0; i < roomList.length; i++){
			contentString += "<li><a href='#/" + siteID + "/" + stairID + "/" + roomList[i].roomID + "'>";
			contentString += roomList[i].roomName;
			contentString += "</a></li>";
		}
		contentString += "</ul>";

		$("#roomdb_content").html(contentString).stop().css({"left": 100, "opacity":0}).animate({opacity:1, left:0}, 100);
	};


	if(typeof roomListCache[stairID] === "undefined"){
		//$("#result").html(ajax_load); //show loading spinner
		$.getJSON(
			jsonRoomUrl,
			{'stairID': stairID,
			'type' : 'list'},
			function(roomList) {
				roomList.sort(function(a, b){
					return naturalCompare(a.roomName, b.roomName);
				});
				roomListCache[stairID] = roomList;
				displayRoomList(roomListCache[stairID]);
			}
		);
	}
	else{
		//we already have a cached version, use it instead
		displayRoomList(roomListCache[stairID]);
	}

	getPics(stairID, "stair");
};


var roomFields = {
	'roomSize' : 'Room Size',
	'roomFurniture' : 'Furniture',
	'roomKitchen' : 'Kitchen Facilities',
	'roomKitchenShare' : 'Number of people per kitchen',
	'roomEatingSpace' : 'Space to eat with others',
	'roomView' : 'View',
	'roomShowerComment' : 'Shower',
	'roomShowerShare' : 'Number of people per shower',
	'roomHeating' : 'Heating',
	'roomSunlight' : 'Sunlight',
	'roomNoise' : 'Noise',
	'roomDecoration' : 'Decoration',
	'roomLaundry' : 'Laundry',
	'roomComments' : 'Other comments'
};


var roomCache = {};

var loadRoom = function(siteID, stairID, roomID){

	var displayRoom = function(roomData){
		var contentString = "";

		contentString += "<div class='breadcrumb'>";
			contentString += "/ <a href='#/'>All sites</a> / ";
			contentString += "<a href='#/" + roomData.siteID + "'>" + roomData.siteName + "</a> / ";
			contentString += "<a href='#/" + roomData.siteID + "/" + roomData.stairID + "'>" + roomData.stairName + "</a> / ";
			contentString += roomData.roomName;
		contentString += "</div>";

		contentString += "<h1>" + roomData.siteName + " - " + roomData.roomName + "</h2>";

		for(var key in roomFields){
			if(roomData[key] !== "" && roomData[key] !== null){
				contentString += "<h2>" + roomFields[key] + "</h2>";
				contentString += "<p>" + roomData[key] + "</p>";
			}
		}

		$("#roomdb_content").html(contentString).stop().css({"left": 100, "opacity":0}).animate({opacity:1, left:0}, 100);
	};

	if(typeof roomCache[roomID] === "undefined"){
		// get the data via ajax
		$.getJSON(
			jsonRoomUrl,
			{'roomID': roomID,
			'type' : 'single'},
			function(room) {
				roomCache[roomID] = room;
				displayRoom(roomCache[roomID]);
			}
		);
	}
	else{
		//use cached version
		displayRoom(roomCache[roomID]);
	}

	getPics(roomID, "room");
};


var picsCache = {};
picsCache.stairs = {};
picsCache.rooms = {};

//gets a list of pics for a room or staircase, and displays them on the page. 
//type = "room" or "stair", id is roomID or stairID
var getPics = function(id, type){
	var picBaseURL = "/roomdb/pics/";

	var displayPics = function(pics){
		if(pics.length !== 0){

			var resultString = "";

			if(type == "stair"){
				resultString += "<h1 id='roomdb-images-title'>Images of the staircase</h1>";
			}
			else if(type == "room"){
				resultString += "<h1 id='roomdb-images-title'>Images of the room</h1>";
			}

			for(var i = 0; i < pics.length; i++){
				resultString += "<div class='roomdb_pic'>";
				resultString += "<img src='" + picBaseURL + encodeURIComponent(pics[i].picLocation) + "'>";
				resultString += "<div class='wp-caption-text'>" + pics[i].picCaption + "</div>";
				resultString += "</div>";
			}
			$("#roomdb_pics").html(resultString).stop().css({"left": 100, "opacity":0}).animate({opacity:1, left:0}, 100);
		}
	};


	if(type == "stair"){
		//get staircase pics
		if(typeof picsCache.stairs[id] === "undefined"){
			//no cache, get from JSON
			$.getJSON(
				jsonPicsUrl,
				{'stairID': id},
				function(pics) {
					picsCache.stairs[id] = pics;
					displayPics(picsCache.stairs[id]);
				}
			);
		}
		else{
			//use cache
			return displayPics(picsCache.stairs[id]);
		}
	}
	else if(type == "room"){
		//get room pics
		if(typeof picsCache.rooms[id] === "undefined"){
			//no cache, get from JSON
			$.getJSON(
				jsonPicsUrl,
				{'roomID': id},
				function(pics) {
					picsCache.rooms[id] = pics;
					displayPics(picsCache.rooms[id]);
				}
			);
		}
		else{
			//use cache
			return displayPics(picsCache.rooms[id]);
		}
	}
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