function getSelectedText() {
    var text = "";
    var selection = window.getSelection();
    var type = typeof selection;
    if (type != "undefined") {
        text = selection.toString();
    }    
    return text;
}

function doSomethingWithSelectedText() {
    var selectedText = getSelectedText();
    if (selectedText) {
	process_user_input(selectedText);
	
    }
}
function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

function process_user_input(text)
{
    clearSelection();    
    words = text.split(/ /);
    words.forEach(
	function(entry) {
	    console.log(entry);
	}
    );
    chrome.runtime.sendMessage(words);    
}


var extensionOn = 0; 
function process_page()
{
    if(extensionOn==0)
    {
	console.log("Addon Activated");
	document.onmouseup = doSomethingWithSelectedText
    }else{
	console.log("Addon Deactivated");
	document.onmouseup = function(){};
    }
    extensionOn^=1;

}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	process_page();
    }
);

