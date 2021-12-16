let player1 = window.prompt("whats your play? Rock, Paper or Scissors")
let computer = random()

function random(){
    let result = Math.floor(Math.random()*3);
    alert(result);
    if(result === 0){
        return "rock";
    }
    else if(result === 1){
        return "paper";
    }
    else{
        return "scissors";
    }

    

}



function versus(player1,computer){

    if(player1 === "rock" && computer === "scissors" || computer === "rock" && player1 === "scissors" ){
        return "rock wins";
    }
    else if(player1 === "paper" && computer === "rock" || computer === "paper" && player1 === "rock"){
        return "paper wins";
    }
    else if(player1 === "scissors" && computer === "paper" || computer === "scissors" && player1 === "paper"){
        return "scissors wins";
    }
    else{
        return "Draw!"
    }

}

alert("Computer plays " + computer)
alert(versus(player1,computer))

console.log(Math.floor(Math.random()*3))