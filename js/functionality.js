var tam = 4;
var board;

const values = Array.from({ length: 15 }, (_, i) => i + 1);
values.push(0);

var name;
var timer;
var seconds = 0;

function begin(){
    var randomIndex;
    var value;
    var divElement;

    name = prompt("Whats your name?")
    document.getElementsByClassName("name")[0].innerHTML = name;

    //Creating board
    board = new Array(tam);
    for(var i = 0 ; i < tam ; i++){
        board[i] = new Array(tam);
    }

    //Initializing board
    for(var i = 0 ; i < tam ; i++){
        for(var j = 0 ; j < tam ; j++){
            randomIndex = Math.floor(Math.random() * values.length);
            value = values.splice(randomIndex, 1)[0];
            board[i][j] = value;
            document.getElementById(i.toString()+j.toString()).innerHTML = value

            if(value == 0){
                divElement = document.getElementById(i.toString()+j.toString());
                divElement.style.backgroundColor = "white";
            }
        }
    }

    printBoard();

    timer = window.setInterval(
        function(){
            seconds++;
            document.getElementsByClassName("time")[0].innerHTML = seconds
        }, 1000
    );
}

function printBoard(){
    for(var i = 0 ; i < tam ; i++){
        console.log(board[i])
    }
}