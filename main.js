function goToResults(keywords){
    keywordList = keywords.split(" ");
    keywords = "";
    for(var i in keywordList){
        keywords += keyworldList + "~ ";
    }
    window.location = "./results.html?keywords=" + encodeURIComponent(keywords);
}