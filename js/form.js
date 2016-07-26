function form() {
    var text;
    var answer = document.getElementById("chocInputName").value;
     switch(answer) {
         case  "currency": text = "That's Correct!";
         break;
         case  "drink": text = "That's Correct! And, it was thought to have magical powers";
         break;
         default: text = "That's not Correct, perhaps you need to read about the history of chocolate again:  <a href="chx.html">Chocolate History</a>"
     }
     document.getElementsById("chocInputName").innerHTML = text;
}
