var known_words=[""];
var new_words;



function download_languagetutor_words()
{
    var lt_request = new XMLHttpRequest();
    lt_request.onreadystatechange=function(){
	if(lt_request.readyState==4 && lt_request.status==200){
	    console.log(lt_request.responseText);
	}
    };
    lt_request.open("GET","http://localhost:3000/words.json",true);
    lt_request.send();
}



function process_selected_text(info, tab) 
{
    download_languagetutor_words();
    var text = info.selectionText;
    text=text.toLowerCase();
    text=text.replace(/\u0301/g,"");
    var re = /[^\-йцукенгшщзхъёэждлорпавыфячсмитьбю]+/;
    new_words = text.split(re).filter(function(s, i, a) {
	return a.indexOf(s) === i && s !== "" & s!=="-";
    });;
    console.log(new_words);
    if(new_words.length>0)
	chrome.browserAction.setBadgeText({text:"new*"});

}
chrome.contextMenus.create(
    {"title": "Send selected text to language tutor", "contexts":["selection"],"onclick": process_selected_text}
);

