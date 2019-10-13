// Read current URL parameters and adjust the UI accordingly.
// Basically a placeholder for any future server-based stuff.
var url = new URL(window.location);
var objectResponse = null;
var keywords = url.searchParams.get("keywords");
keywords = this.decodeURIComponent(keywords);

var baseURL = "https://dreamplan.search.windows.net/indexes/catalog-json-index/docs?api-version=2019-05-06&search=" + keywords;
var apiKey = new Headers();
apiKey.append('api-key', "63686663099E6433AFC3694E2F0D22E0");
apiKey.append('content-type', 'application/json');
var init = {
    method: 'GET',
    headers: {
        "api-key": "63686663099E6433AFC3694E2F0D22E0",
        "Content-Type": "application/json",
        "origin": "https://dreamplan.search.windows.net"
    },
    mode: 'cors',
};
var x = fetch(baseURL, init);
console.log(x);
x.then(
    function(response){
        return response.text();
        //TODO: Format data
    }
).then(
    (data) => {
        createList(data ? JSON.parse(data) : {});
    }
)

var myPlanBaseURL = "https://myplan.uw.edu/course/#/courses/";
function createList(classData){
    console.log(classData);
    var listHTML = "";
    for(var i = 0; i < classData.value.length; i++){
        listHTML += "<div class=\'result\'>"
        tagStrip = classData.value[i].title.split(">")[1];
        console.log(tagStrip);
        keyTerms = tagStrip.split(" ");
        fullClassURL = myPlanBaseURL + encodeURIComponent(keyTerms[0] + " " + keyTerms[1]);
        listHTML += "<a class='resultTitle' href=" + fullClassURL + ">" + classData.value[i].title + "</a><br><br>";
        listHTML += classData.value[i].description + "<br>";
        listHTML += "</div><br>";
    }
    document.getElementById("form").innerHTML = listHTML;
}
/*window.onload = function(){
    document.getElementById("form").innerHTML = keywords;
}*/