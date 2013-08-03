

var jsonSiteUrl = "/roomdb/sites.php";
var jsonStairUrl = "/roomdb/stairs.php";
var jsonRoomUrl = "/roomdb/rooms.php";
var jsonPicsUrl = "/roomdb/pics.php";


$(document).ready(function(){

	loadSiteList();

	//		set up handlers 
	$("#site-dropdown").change(siteDropdownHandler);
	$("#newentry").change(checkEnabledStatus);


});



//makes sure the right form elements are enabled and disabled
var checkEnabledStatus = function(){
	if($("#newentry").is(':checked')){
		$("#stair-dropdown").attr("disabled","disabled");
		$("#stairname").removeAttr("disabled");
	}
	else{
		$("#stair-dropdown").removeAttr("disabled");
		$("#stairname").attr("disabled","disabled");
	}
}


/*----------------DROPDOWNS-----------------*/

var siteDropdownHandler = function(){
	//load staircase list for selected site
	var siteID = $("#site-dropdown").find(":selected").attr("value");
	loadStaircaseList(siteID);
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
