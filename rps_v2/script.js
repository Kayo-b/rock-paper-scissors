var counterCPU = 0;
var counterHuman = 0;
var buttons = document.querySelectorAll("button");
var roundHuman = 0;
var roundCPU = 0;
var round = null;
var counterCPU = 0;
var counterHuman = 0;
var roundCountHuman = 0;
var roundCountCPU = 0;


// function rounds(number,player,computer){
//     while(player + computer <= number){
//         return
//     }
//     // for(x = number; x<=number; x--){

        
//     // }
// }

// counter = function(finalResult){
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




buttons.forEach(addEventListener('click', function(e){
    let result = e.target.id;
    let computer = random();
    let finalResult = versus(result,computer);
    // let counter = counter(finalResult);
    if(finalResult === "You win"){
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
    else if(finalResult === "Computer wins"){
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
    
    }
    document.getElementById("finalResult").innerText = finalResult;
    document.getElementById("humano").innerText = result;
    document.getElementById("computador").innerText = computer;
    document.getElementById("scoreHumano").innerText = counterHuman;
    document.getElementById("scoreComputador").innerText = counterCPU;
    document.getElementById("roundScoreH").innerText = roundCountHuman;
    document.getElementById("roundScoreC").innerText = roundCountCPU;





}));


// var buttons = document.querySelectorAll("button");
// const play = function(var1){
//     for(let x in var1){
//         var1[x].forEach(addEventListener('click', function(e){
//             let result = e.target.id;
//             let computer = random();
//             let finalResult = versus(result,computer);
//             if(finalResult === "You win"){
//                 counterHuman += 1;
//             }
//             else if(finalResult === "Computer wins"){
//                 counterCPU += 1;
//             }
//             document.getElementById("finalResult").innerText = finalResult;
//             document.getElementById("humano").innerText = result;
//             document.getElementById("computador").innerText = computer;
//             document.getElementById("scoreHumano").innerText = counterHuman;
//             document.getElementById("scoreComputador").innerText = counterCPU;
        
           
        
        
        
//         }));
//     }

 
// }
// play(buttons);


function random(){
    let result = Math.floor(Math.random()*3);
    console.log(result)
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
    

    if(player1 === "rock" && computer === "scissors" || player1 === "paper" && computer === "rock" || player1 === "scissors" && computer === "paper" ){       
        return "You win";
    }
    else if (computer === "scissors" && player1 === "paper" || computer === "paper" && player1 === "rock" || computer === "rock" && player1 === "scissors"){     
        return "Computer wins";   
    }
    
    else
        return "Draw!";   
}

