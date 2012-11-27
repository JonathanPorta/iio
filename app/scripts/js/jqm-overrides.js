

$(document).bind("mobileinit", function(){
	$.extend($.mobile, {
		ajaxEnabled : false,
		linkBindingEnabled : false,
		pushStateEnabled : false,
		hashListeningEnabled : false
	});
});

$(document).bind("pageinit", function(){
	console.log("JQM: Page init!");
});
