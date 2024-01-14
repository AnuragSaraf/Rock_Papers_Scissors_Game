console.log("Rock Paper Scissor Js running");
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');
let pc = document.getElementById('pc');
let message = document.getElementById('message');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');

function competePC(n){
    let rn = Math.floor(Math.random()*3);
    let score_player = (Number)(score1.innerHTML);
    let score_pc = (Number)(score2.innerHTML);
    
    if(n==0){
        rock.style.border = "2px solid black";
        paper.style.border = "1px solid grey";
        scissor.style.border = "1px solid grey";
    }
    if(n==1){
        rock.style.border = "1px solid grey";
        paper.style.border = "2px solid black";
        scissor.style.border = "1px solid grey";
    }
    if(n==2){
        rock.style.border = "1px solid grey";
        paper.style.border = "1px solid grey";
        scissor.style.border = "2px solid black";
    }

    
    switch(rn){
        case 0:
            pc.src = 'assets/rock.png';
            console.log("PC selects rock");
            if(n==0){
                message.textContent = 'Its a tie.';
            }
            if(n==1){
                message.textContent = 'You get a point.';
                score1.textContent = score_player+1;
                score_player++;
            }
            if(n==2){
                message.textContent = 'PC gets a point.';
                score1.textContent = score_pc+1;
                score_pc++;
            }
            break;
        case 1:
            pc.src = 'assets/paper.png';
            console.log("PC selects paper");
            if(n==0){
                message.textContent = 'PC gets a point.';
                score2.textContent = score_pc+1;
                score_pc++;
            }
            if(n==1){
                message.textContent = 'Its a tie.';
            }
            if(n==2){
                message.textContent = 'You get a point.';
                score1.textContent = score_player+1;
                score_player++;
            }
            break;
        case 2:
            pc.src = 'assets/scissors.png';
            console.log("PC selects scissor");
            if(n==0){
                message.textContent = 'You get a point.';
                score1.textContent = score_player+1;
                score_player++;
            }
            if(n==1){
                message.textContent = 'PC gets a point.';
                score2.textContent = score_pc+1;
                score_pc++;
            }
            if(n==2){
                message.innerHTML = 'Its a tie.';
            }
            break;
        default:
            console.log("Invalid Selection.",rn);
            break;
    }
    
    if(score_player>=5 || score_pc>=5){
        setTimeout(() => alert((score_player>score_pc?"Player 1 wins. ":"PC wins. ")+'Game Over!'),1);
        location.reload();
        // return;
    }
}

rock.addEventListener("click",()=>competePC(0));
paper.addEventListener("click",()=>competePC(1));
scissor.addEventListener("click",()=>competePC(2));
