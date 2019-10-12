// Read current URL parameters and adjust the UI accordingly.
// Basically a placeholder for any future server-based stuff.
var url = new URL(window.location);
var c = url.searchParams.get("keywords");
window.onload = function(){
    document.getElementById("keywords").innerHTML = c;
}