/* 
File: content.js
Author: VaccinalBowl


This is a content script. It is injected into every page that is loaded into the browser. 
It waits for messages from the background page. The receipt of the message from the background script triggers the activation or deactivation of the script. 

When the script is active and the user selects some text this script will detect whether or not text has been selected. It will then go through the selection searching for russian words
and removing all of the other characters in the selection. The array of words is then send back to the background script. 

If this script is not active normal browser behavior occurs. 


*/


// getSelectedText() gets all of the selected text
function getSelectedText() {
    var text = "";
    var selection = window.getSelection();
    var type = typeof selection;
    if (type != "undefined") {
        text = selection.toString();
    }    
    return text;
}


/* clearSelection() when call will remove the selection
   from the browser window or document */
 
function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}

/*
  process_user_input() is called when there is text in the
  selection. Firstly it clears the selection from visibility
  and the converts everything to lower case. It removes 
  all stress marks from the russian text represented normally by
  \u0301. Then we split the document on anything that does not
  represent a cyrillic word. The output of the split document is 
  filtered of duplicates, blanks and '-' and then forwarded back 
  to the browser. 
*/
function process_user_input(text)
{

    clearSelection();
    text=text.toLowerCase();
    text=text.replace(/\u0301/g,"");
    var re = /[^\-йцукенгшщзхъёэждлорпавыфячсмитьбю]+/;
    words = text.split(re).filter(function(s, i, a) {
	return a.indexOf(s) === i && s !== "" & s!=="-";
    });;
    console.log(words);
    chrome.runtime.sendMessage(words);    

}

/* check_selection() will check if the
   selection contains some text and if it has some
   the text will then be pass on to the processor */

function check_selection() {
    var selectedText = getSelectedText();
    if (selectedText) {
	process_user_input(selectedText);
    }
}


var extensionOn = 0; //When the script is first inserted the extension is in the off state.  

/* toggle_script() is called whenever the script receives
   the message to toggle from the background page. */
function toggle_script()
{           
    if(extensionOn==0)
    {
	console.log("Addon Activated");
	document.onmouseup = check_selection //assigns the action listener when script activated
    }else{
	console.log("Addon Deactivated");
	document.onmouseup = null;
    }
    extensionOn^=1;

}
/* When the script is injected we register it to receive
   messages from the background script */ 
   chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
	toggle_script();
    }
);

