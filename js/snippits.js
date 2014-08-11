/**
 * Add callback for when an IFrame is ready.
 */
var iframe = document.createElement("iframe");
iframe.src = "simpleinner.htm";

if (iframe.attachEvent){
    iframe.attachEvent("onload", function(){
        alert("Local iframe is now loaded.");
    });
} else {
    iframe.onload = function(){
        alert("Local iframe is now loaded.");
    };
}

document.body.appendChild(iframe);
