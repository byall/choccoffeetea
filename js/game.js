/*JavaScript for Bars and Sticks Game*/
var chocChunk;
var whiteStick = [];
var gameScore;

function startGame() {
    chocChunk = new component(20, 30, "images/dk.png", 10, 120, "image");
    gameScore = new component("30px", "Consolas", "#C41283", 280, 40, "text");
    myGameArea.start();
}
//Function for Area of Game on Canvas
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 680;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}
/*Function for Game Components:  Image of Chocolate Chunk, White Sticks and Game Scoring*/
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
    this.image = new Image();
    this.image.src = color;
  }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
      ctx.drawImage(this.image, 
        this.x, 
        this.y,
        this.width, this.height);
    } else if (this.type == "text") {
      ctx.font = this.width + " " + this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
  }

    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
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
//Function for Random Sized White Sticks
function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < whiteStick.length; i += 1) {
        if (chocChunk.crashWith(whiteStick[i])) {
            myGameArea.stop();
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
        whiteStick.push(new component(10, height, "#FFF", x, 0));
        whiteStick.push(new component(10, x - height - gap, "#FFF", x, height + gap));
    }
    for (i = 0; i < whiteStick.length; i += 1) {
        whiteStick[i].speedX = -1;
        whiteStick[i].newPos();
        whiteStick[i].update();
    }
    gameScore.text="SCORE: " + myGameArea.frameNo;
    gameScore.update();
    chocChunk.newPos();
    chocChunk.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}
//Fnctions for Game Controlls
function moveup() {
    chocChunk.speedY = -1;
}

function movedown() {
    chocChunk.speedY = 1;
}

function moveleft() {
    chocChunk.speedX = -1;
}

function moveright() {
    chocChunk.speedX = 1;
}

function clearmove() {
    chocChunk.speedX = 0;
    chocChunk.speedY = 0;
}
