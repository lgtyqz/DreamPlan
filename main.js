function goToResults(keywords){
    /*keywordList = keywords.split(" ");
    keywords = "";
    for(var i in keywordList){
        keywords += keywordList + "~ ";
    }*/
    window.location = "./results.html?keywords=" + encodeURIComponent(keywords);
}