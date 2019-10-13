// Read current URL parameters and adjust the UI accordingly.
// Basically a placeholder for any future server-based stuff.
var url = new URL(window.location);
var keywords = url.searchParams.get("keywords");
window.onload = function(){
    keywords = this.decodeURIComponent(keywords);
    document.getElementById("form").innerHTML = keywords;
}