var subject = {
    collectionMethod: "query",
    query: "",
    logos: 0, //The research-based path
    ethos: 0, //The service-based path
    pathos: 0 //The collaboration-based/social path
};
var paths = ["logos", "ethos", "pathos"];
var questionIndex = 0;
var questions = [
    new Question("Arts, sciences, or both?",
    ["Arts",
    "Sciences",
    "Both"],
    ["arts, humanities",
    "science, math",
    "interdisciplinary arts science"]
    ),
    new Question("In your opinion, what subject isn't discussed enough in school?",
    ["The importance of knowledge retention vs. memorization",
    "The importance of delving into what you value as a person",
    "The importance of building solid communication skills"],
    ["study skills",
    "ethics",
    "communications"]
    ),
    new Question("Which of the three activities would you most want on your bucket list?",
    ["Contributing a groundbreaking scientific discovery",
    "Giving a TED Talk on a pressing social issue",
    "Writing and publishing an autobiography"],
    ["science research",
    "sociology",
    "writing"]
    ),
    new Question("Which do you consider most important in conflict resolution?",
    ["All of the facts being acknowledged by both sides",
    "Articulating the individual impact both sides have had in the conflict",
    "Making sure both sides empathize with each other to reach mutual understanding"],
    ["research",
    "history",
    "sociology diplomacy"]
    ),
    new Question("Which of the three things would you want to change in the world first?",
    ["Eliminating disease",
    "Homelessness and hunger",
    "Working towards world peace"],
    ["biology",
    "urban studies",
    "global studies, international studies"]
    ),
    new Question("What do you read the most in your free time?",
    ["educational books and articles",
    "the news",
    "others' personal stories"],
    ["research",
    "current events",
    "literature"]
    ),
    new Question("What do you want to improve on as a student?",
    ["My researching skills",
    "My academic writing skills",
    "My verbal communication skills"],
    ["research",
    "writing",
    "debate"]
    ),
    new Question("What kind of people and subjects do you follow on social media?",
    ["Artistic accounts",
    "Activism/Social Change accounts",
    "Entertainment accounts"],
    ["art",
    "activism",
    "media"]
    ),
];
function Question(q, a, keywords){
    //q is the question (a String)
    //a are the answers (an array of Strings)
    //keywords is a list of the keywords associated with the corresponding index
    //in a
    this.question = q;
    this.answers = a;
    this.keywords = keywords;
}
function displayQuestion(){
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("question").innerHTML = questions[questionIndex].question;
    for(var i = 1; i <= 3; i++){
        document.getElementById("a" + i.toString()).innerHTML = questions[questionIndex].answers[i - 1];
    }
}
function processAnswer(){
    //First check whether stuff is answered.
    var answered = false;
    var selected = null;
    for(var i = 1; i <= 3; i++){
        var selector = document.getElementById("r" + i.toString());
        if(selector.checked){
            answered = true;
            selected = i - 1;
        }
        selector.checked = false;
    }
    if(!answered){
        document.getElementById("feedback").innerHTML =
            "You must select an answer to move on!";
    }else{
        if(subject.collectionMethod == "paths"){
            subject[paths[selected]]++;
        }else if(subject.collectionMethod == "query"){
            subject.query += questions[questionIndex].keywords[selected];
            subject.query += ", ";
        }
        // Process and display the next question, or go to the next page if the
        // questionnaire is finished.
        questionIndex++;
        if(questionIndex == questions.length - 1){
            document.getElementById("continue").innerHTML = "Finish!";
        }
        if(questionIndex >= questions.length){
            goToResults(subject.query);
        }
        displayQuestion();
    }
}
window.onload = function(){
    displayQuestion(questionIndex);
}