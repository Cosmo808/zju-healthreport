'use strict';

// chrome.runtime.onInstalled.addListener(function() {
	
// });

chrome.runtime.onStartup.addListener(function() {
    chrome.tabs.create({url: "https://healthreport.zju.edu.cn/ncov/wap/default/index?from=history"});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

});

// chrome.webNavigation.onCompleted.addListener(function(details) {
// 	if (details.url.match("zjuam.zju.edu.cn")) {
        
// 	}else if(details.url.match("healthreport.zju.edu.cn")){
        
//     }else return
// });