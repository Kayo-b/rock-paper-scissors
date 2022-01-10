const buttons = document.querySelectorAll("button");
var counterCPU = 0;
var counterHuman = 0;

const play = function (values){

    for(let x in values){
        
        values[x].addEventListener("click", (e) => {
            var jogada = e.target.id;
            // var result = getResults(jogada);
            let computer = random()
            let globalResult = versus(jogada,computer);
            if(globalResult === "You win"){
                counterHuman += 1;
            }
            else if(globalResult === "Computer wins"){
                counterCPU += 1;
            }
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


