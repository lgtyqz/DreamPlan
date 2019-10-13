var subject = {
    logos: 0, //The research-based path
    ethos: 0, //The service-based path
    pathos: 0 //The collaboration-based/social path
};
var questionIndex = 0;
var questions = [
    new Question("Arts, sciences, or both?",
    ["Arts",
    "Sciences",
    "Both"]
    ),
    new Question("In your opinion, what subject isn't discussed enough in school?",
    ["The importance of knowledge retention vs. memorization",
    "The importance of delving into what you value as a person",
    "The importance of building solid communication skills"]
    ),
    new Question("Which of the three activities would you most want on your bucket list?",
    ["Contributing a groundbreaking scientific discovery",
    "Giving a TED Talk on a pressing social issue",
    "Writing and publishing an autobiography"]
    ),
    new Question("Which do you consider most important in conflict resolution?",
    ["All of the facts being acknowledged by both sides",
    "Articulating the individual impact both sides have had in the conflict",
    "Making sure both sides empathize with each other to reach mutual understanding"]
    ),
    new Question("Which of the three things would you want to change in the world first?",
    ["Eliminating disease",
    "Homelessness and hunger",
    "Working towards world peace"]
    ),
    new Question("What do you read the most in your free time?",
    ["educational books and articles",
    "the news",
    "others' personal stories"]
    ),
    new Question("What do you want to improve on as a student?",
    ["My researching skills",
    "My academic writing skills",
    "My verbal communication skills"]
    ),
    new Question("What do you want to improve on as a student?",
    ["My researching skills",
    "My academic writing skills",
    "My verbal communication skills"]
    ),
];
function Question(q, a){
    //q is the question (a String)
    //a are the answers (an array of Strings)
    this.question = q;
    this.answers = a;
}
function displayQuestion(){

}
function processQuestion(){

}