const buttons = document.querySelectorAll("button");
var counterCPU = 0;
var counterHuman = 0;
var roundCountHuman = 0;
var roundCountCPU = 0;


const play = function (values){

    for(let x in values){
        
        values[x].addEventListener("click", (e) => {
            var jogada = e.target.id;
            // var result = getResults(jogada);
            let computer = random()
            let globalResult = versus(jogada,computer);
            if(globalResult === "You win"){
                counterHuman += 1;
                if(counterHuman >= 3){
                    round = "You Won The Round!";
                    roundCountHuman += 1;
                    if(roundCountHuman === 5){
                        alert("You Win!");
                        roundCountCPU = 0;
                        roundCountHuman = 0;
                    }
                    counterCPU = 0;
                    counterHuman = 0;
                } 
            }
            else if(globalResult === "Computer wins"){
                counterCPU += 1;
                if(counterCPU >= 3){
                    round = "CPU Won The Round!";
                    roundCountCPU += 1;
                    if(roundCountCPU === 5){
                        alert("Computer Wins!")
                        roundCountCPU = 0;
                        roundCountHuman = 0;
                    }
                    counterCPU = 0;
                    counterHuman = 0;
                }
                return counterCPU;
            }
            document.getElementById("result").innerText = globalResult;
            document.getElementById("computer").innerHTML = computer;
            document.getElementById("human").innerText = jogada;
            document.getElementById("round").innerText = round;
            document.getElementById("counterCPU").innerText = counterCPU;
            document.getElementById("counterHuman").innerText = counterHuman;
            document.getElementById("roundCountHuman").innerText = roundCountHuman;
            document.getElementById("roundCountCPU").innerText = roundCountCPU;
            console.log(globalResult)

        });
    }
}
play(buttons);

// var counter = function(finalResult){
//     if(finalResult === "You win"){
//         counterHuman += 1;
//         if(counterHuman >= 3){
//             return "You Won The Round!";
//         }
        
//     }
//     else if(finalResult === "Computer wins"){
//         counterCPU += 1;
//         if(counterCPU >= 3){
//             return "CPU Won The Round!";
//         }
//         return counterCPU;
//     }
// }

function versus(player1,computer){

    if(player1 === "rock" && computer === "scissors" || player1 === "paper" && computer === "rock" || player1 === "scissors" && computer === "paper" ){
        return "You win";
    }
    else if (computer === "scissors" && player1 === "paper" || computer === "paper" && player1 === "rock" || computer === "rock" && player1 === "scissors"){
        return "Computer wins";}
    else
        return "Draw!"
    
    
}

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


