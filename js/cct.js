// JavaScript File
/*$(document).ready(function(){
    
    $( "#accordion" ).accordion();
  });
*/
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

var myImage = document.getElementById("ch");
var imageArray = ["images/choc600.jpeg", "images/chopieces.jpg", "images/chom.jpg", "images/chocaker.jpg"];
var imageIndex = 0;
function changeImage () {
    myImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;
    if(imageIndex>=imageArray.length) {
        imageIndex=0;
    }
}
setInterval(changeImage, 4000);

function chocolate () {
    var chc = ["Here are some questions which will be answered in on this page:", "What do coins and choclate have in common?", "How was chocolate first consumed, by drinking or eating?", "What invention revolutionalized the art of chocolate making?", "Where are the trees from which chocolate is produced mainly located?", "The performance of what proper processes ensure that chocolate will have the correct flavor?"];
    var randomchc = chc[Math.floor(Math.random()*chc.length)];
    document.getElementById('choc').innerHTML = '<div>' + " " + randomchc + " " + '</div>';
    
}

function form() {
    var text;
    var answer = document.getElementById("chocInputName").value;
     switch(answer) {
         case  "currency": text = "That's Correct!";
         break;
         case "drink": text = "That's Correct! And, it was thought to have magical powers";
         break;
         default: text = "That's not Correct, perhaps you need to read about the history of chocolate again:  <a href="chx.html">Chocolate History</a>"
     }
     document.getElementsByClassName("ans").innerHTML = text;
}




/*var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(10, height, "green", x, 0));
        myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
    myScore.update();
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function accelerate(n) {
    myGamePiece.gravity = n;
}
*/




/*var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
