function init()
{
    chrome.browserAction.setBadgeText({text:""});
    var bgPage = chrome.extension.getBackgroundPage();
    var new_words = bgPage.new_words;
    var content_div = document.getElementById("content");
    var injected_html = "<table><tr><th>word</th></tr>"; //
    for(var i = 0; i < new_words.length;i++)
	injected_html+="<tr><td>"+new_words[i]+"</td></tr>";
    injected_html+="</table>";
    console.log(injected_html);
    content_div.innerHTML = injected_html;
}

window.onload = init;
