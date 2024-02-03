const user=document.getElementById("usersc");
const comp=document.getElementById("compsc");
const Result=document.getElementById("result");
const options=["rock","paper","scissor"];
const myy=document.getElementById("myy");
const coo=document.getElementById("coo");
let my_score=0;
let bot_score=0;
let result;


function compare(choice){
    const bot_choice=options[Math.floor(Math.random()*3)];
    

    if(choice===bot_choice){
       result="Its a ties!!!!";
    }
    else{
        switch(choice){
            case "rock":
                result=(bot_choice==="scissor")?"You Win!!!":"You Loose";
                break;
            case "paper":
                result=(bot_choice==="rock")?"You Win!!!":"You Loose";   
                break; 
                case "scissor":
                result=(bot_choice==="paper")?"You Win!!!":"You Loose";   
                break; 
        }
    }
    if(result==="You Loose"){
       bot_score++;
         Result.style.color="red";
     }
     else if(result==="Its a ties!!!!"){
        
         Result.style.color="grey";
 
     }
     else{
        my_score++;
         Result.style.color="green";
       
     }
    Result.textContent=result;
    user.textContent=`Player: ${choice}`
    comp.textContent=`Bot: ${bot_choice}`
    myy.textContent=`User Score: ${my_score}`
coo.textContent=`Computer Score: ${bot_score}`
    
    

}