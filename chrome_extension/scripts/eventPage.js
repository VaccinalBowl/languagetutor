
var func = function(){
    alert("Success!");
};

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse){
        if(request.msg == "startFunc") func();
    }
);
