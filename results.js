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
        "Content-Type": "application/json"
    },
    mode: 'no-cors'
};
var x = fetch(baseURL, init);
x.then(
    async function(response){
        return response.text();
        //TODO: Format data
    }
).then(
    (data) => {
        console.log(data ? JSON.parse(data) : {});
    }
)
/*window.onload = function(){
    document.getElementById("form").innerHTML = keywords;
}*/