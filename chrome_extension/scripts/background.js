
function activateContentScript()
{
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {}, null);
    });
}
var extensionActive = 0; 
chrome.browserAction.setBadgeText({text:"off"});
function  on_extension_click(tab)
{
    
    if(extensionActive==0){
	console.log("Activating Extension");
	chrome.browserAction.setBadgeText({text:"on"});

    }else{
	console.log("Deactivating Extension");
	chrome.browserAction.setBadgeText({text:"off"});
    }
    activateContentScript();
    extensionActive ^= 1;
}
chrome.browserAction.onClicked.addListener(on_extension_click);
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	console.log(request);
    }
);
