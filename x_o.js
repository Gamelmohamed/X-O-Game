let players = ["X", "O"]
let turn = Math.floor(Math.random()*players.length)
let header = document.querySelector(".header")
header.innerHTML = (players[turn]+" TURN")

let squares = []

function winner(){
   for (i=1;i<10;i++){
    squares [i]=  document.getElementById("item"+i).innerHTML
   }

   

   if(squares[1] == squares[2] && squares[2]==squares[3] && squares[2] != "")
   {
    
        header.innerHTML= `${squares[2]}  winner`
        document.getElementById("item"+1).style.background = "#000"
        document.getElementById("item"+2).style.background = "#000"
        document.getElementById("item"+3).style.background = "#000";
        setTimeout(function(){location.reload()},2000)
   }

   else if (squares[4] == squares[5] && squares[5]==squares[6] && squares[6] != "")
   {
    
        header.innerHTML= `${squares[5]}  winner`
        document.getElementById("item"+4).style.background = "#000"
        document.getElementById("item"+5).style.background = "#000"
        document.getElementById("item"+6).style.background = "#000"
        setTimeout(function(){location.reload()},2000)
   }

   else if (squares[7] == squares[8] && squares[8]==squares[9] && squares[9] != "")
   {
    
        header.innerHTML= `${squares[8]}  winner`
        document.getElementById("item"+7).style.background = "#000"
        document.getElementById("item"+8).style.background = "#000"
        document.getElementById("item"+9).style.background = "#000"
        setTimeout(function(){location.reload()},2000)
   }

   else if (squares[1] == squares[4] && squares[4]==squares[7] && squares[7] != "")
   {
    
        header.innerHTML= `${squares[7]}  winner`
        document.getElementById("item"+1).style.background = "#000"
        document.getElementById("item"+4).style.background = "#000"
        document.getElementById("item"+7).style.background = "#000"
        setTimeout(function(){location.reload()},2000)
   }

   else if (squares[2] == squares[5] && squares[5]==squares[8] && squares[2] != "")
   {
    
        header.innerHTML= `${squares[5]}  winner`
        document.getElementById("item"+2).style.background = "#000"
        document.getElementById("item"+5).style.background = "#000"
        document.getElementById("item"+8).style.background = "#000"
        setTimeout(function(){location.reload()},2000)
   }

   else if (squares[3] == squares[6] && squares[6]==squares[9] && squares[6] != "")
   {
    
        header.innerHTML= `${squares[6]}  winner`
        document.getElementById("item"+3).style.background = "#000"
        document.getElementById("item"+6).style.background = "#000"
        document.getElementById("item"+9).style.background = "#000"
        setTimeout(function(){location.reload()},2000)
   }

   else if (squares[1] == squares[5] && squares[5]==squares[9] && squares[5] != "")
   {
    
        header.innerHTML= `${squares[5]}  winner`
        document.getElementById("item"+1).style.background = "#000"
        document.getElementById("item"+5).style.background = "#000"
        document.getElementById("item"+9).style.background = "#000"
        setTimeout(function(){location.reload()},2000)

   }

   else if (squares[3] == squares[5] && squares[5]==squares[7] && squares[5] != "")
   {
    
        header.innerHTML= `${squares[5]}  winner`
        document.getElementById("item"+3).style.background = "#000"
        document.getElementById("item"+5).style.background = "#000"
        document.getElementById("item"+7).style.background = "#000"
        setTimeout(function(){location.reload()},2000)
   }

    else if (!squares.includes("")) {
        
        header.innerHTML = "TIE";
        setTimeout(function(){location.reload()},2000)

   }
   
}


function game(id){
    let element = document.getElementById(id)
    
    if (turn === 0 && element.innerHTML == "")
    {
        element.innerHTML = "x";
        turn = 1;
        header.innerHTML = "O TURN ";
    }

    else if (turn === 1 && element.innerHTML == ""){
        
        element.innerHTML = "o";
        turn = 0;
        header.innerHTML = "X TURN";
    }
    winner()
}




