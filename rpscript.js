const buttons = document.querySelectorAll("button");

const play = function (values){

    for(let x in values){
        
        values[x].addEventListener("click", (e) => {
            var jogada = e.target.id;
            // var result = getResults(jogada);
            let computer = random()
            let globalResult = versus(jogada,computer);
            document.getElementById("result").innerText = globalResult;
            document.getElementById("computer").innerHTML = computer;
            document.getElementById("human").innerText = jogada;
            console.log(jogada)
            console.log(computer)
            console.log(globalResult)

        });
    }
}
play(buttons);

// for(let x in buttons){
//     buttons[x].addEventListener("click", (e) => {
//         // let result = getResults(document.getElementById(e.target.id));
//         var jogada = e.target.id;
//         var result = getResults(jogada);
//         globalResult = result;
//         console.log(globalResult)
//         return false;
//     });
// }

// function getResults(var1){
//     x = var1+1123;
//     return x;
// }

// console.log(globalResult)






// var player1 = function getResults(var1){
//         let x = var1;
//         return x;
//     }
function versus(player1,computer){

    if(player1 === "rock" && computer === "scissors" || player1 === "paper" && computer === "rock" || player1 === "scissors" && computer === "paper" ){
        return "You win";
    }
    else if (computer === "scissors" && player1 === "paper" || computer === "paper" && player1 === "rock" || computer === "rock" && player1 === "scissors"){
        return "Computer wins";}
    else
        return "Draw!"
    
    
}

// alert("Computer plays " + computer)
// alert(versus(player1,computer))

// console.log(Math.floor(Math.random()*3))

function random(){
    let result = Math.floor(Math.random()*3);
    if(result === 0){
        console.log("Computer Playes ROCK");
        return "rock";
    }
    else if(result === 1){
        console.log("Computer Playes PAPER");
        return "paper";
    }
    else{
        console.log("Computer Playes SCISSORS");
        return "scissors";
    }

    

}


