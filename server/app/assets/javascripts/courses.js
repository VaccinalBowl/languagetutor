function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}







var rowhtml = '<tr><td></td><td></td><td><input  id="english" name="english" type="text" /></td><td><input id="chinese" name="chinese" type="text" /></td><td><input id="pinyin" name="pinyin" type="text" /></td><td></td><td><a class="btn btn-mini btn-danger" data-confirm="Are you sure?" data-method="delete" href="/courses/22/words/16" rel="nofollow">Delete</a></td></tr>'
        
function createNewWord()
{
    var eng = document.getElementById("english");
    var chi = document.getElementById("chinese");
    var pin = document.getElementById("pinyin");
    
    if((eng!=null)&&(eng.value != "")&&(chi.value != "" )&&(pin.value != ""))
    {
	console.log(eng.value+":"+chi.value+":"+pin.value);
	post_to_url('/courses/22/words',{english:eng.value,chinese:chi.value,pinyin:pin.value});
    }
    



    $('#course-words > tbody:last').append(rowhtml);
}

$(document).ready(
    function()
    {
	
	$('#glyphspan').click(createNewWord);
    }
);

