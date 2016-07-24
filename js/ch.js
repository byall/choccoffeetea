// JavaScript File
var time = new Date ();
var hourNow = time.getHours();
if (hourNow < 4) {
    document.getElementById("hello").innerHTML = "WELCOME, GOOD MORNING!  YOU'RE UP EARLY OR WERE YOU OUT LATE?";
} else if (hourNow < 12) {
    document.getElementById("hello").innerHTML =  "WELCOME, GOOD MORNING!  ISN'T IT A GREAT TIME FOR THAT TASTY CUP OF COFFEE OR TEA?";
} else if (hourNow < 17) {
    document.getElementById("hello").innerHTML =  "WELCOME, GOOD AFTERNOON!  NOW'S THE PEFECT TIME FOR THAT YUMMY TRUFFLE, RIGHT?";
} else {
    document.getElementById("hello").innerHTML =  "WELCOME, GOOD EVENING!  ISN'T IT THAT PERFECT TIME FOR THAT CHAMOLIE TEA?";
    
}

  var knowQuest = ["What do coins and choclate have in common?", "How was chocolate first consumed, by drinking or eating?", "What invention revolutionalized the art of chocolate making?", "Where are the trees from which chocolate is produced mainly located?", "The performance of what proper processes ensure that chocolate will have the correct flavor?"];
    var randomknowQuest = knowQuest[Math.floor(Math.random()*knowQuest.length)];

    document.getElementById("rand").innerHTML = randomknowQuest;
    
