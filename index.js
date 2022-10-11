var choice=["rock","paper","scissor"];
var userScore=0;
var computerScore=0;

function getComputerChoice() {
    return Math.floor(Math.random()*3);
    
    
}
for (let i = 0; i < 3; i++) {
    document.querySelectorAll(".choice")[i].addEventListener("click", function() {
       /* var userClick="";
        userClick= this.innerHTML;*/
        playGame(this.innerHTML);
        
    });
        
}
function playGame(userClick){

    var computerChoice=choice[getComputerChoice()];
    var userChoice = userClick;
    console.log(userChoice);
    document.getElementById("computer_choice").innerHTML=computerChoice;
    document.getElementsByClassName("computer_choice_img")[0].src=computerChoice+".png";
    document.getElementById("user_choice").innerHTML=userChoice;
    document.getElementsByClassName("user_choice_img")[0].src=userChoice+".png";

    
    
    /*choice comparision*/ 
    if (userChoice==computerChoice) {
        document.getElementById("result").innerHTML="Its a draw!";    
    } else {
        if (userChoice=="rock" && computerChoice=="scissor") {
            document.getElementById("result").innerHTML="User wins!";  
            userScore+=1; 
            document.getElementById("user_score").innerHTML=userScore;     
        } else {
            if (userChoice=="paper" && computerChoice=="rock") {
                document.getElementById("result").innerHTML="User wins!";
                userScore+=1;
                document.getElementById("user_score").innerHTML=userScore;                  
            } else {
                if (userChoice=="scissor" && computerChoice=="paper") {
                    document.getElementById("result").innerHTML="User wins!";
                    userScore+=1;  
                    document.getElementById("user_score").innerHTML=userScore;    
                } else {
                    document.getElementById("result").innerHTML="Computer wins!"; 
                    computerScore+=1;  
                    document.getElementById("computer_score").innerHTML=computerScore;             
                }            
            }                
        }    
    }
}



