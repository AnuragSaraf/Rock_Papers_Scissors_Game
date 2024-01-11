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
    if(score_player>=5 || score_pc>=5){
        alert(score_player>score_pc?"Player 1 wins. ":"PC wins. "+'Game Over!')
        location.reload();

        // return;
    }
    switch(rn){
        case 0:
            pc.src = 'assets/rock.png';
            console.log("PC selects rock");
            if(n==0){
                message.innerHTML = 'Its a tie.';
            }
            if(n==1){
                message.innerHTML = 'You get a point.';
                score1.innerHTML = score_player+1;
            }
            if(n==2){
                message.innerHTML = 'PC gets a point.';
                score2.innerHTML = score_pc+1;
            }
            break;
        case 1:
            pc.src = 'assets/paper.png';
            console.log("PC selects paper");
            if(n==0){
                message.innerHTML = 'PC gets a point.';
                score2.innerHTML = score_pc+1;
            }
            if(n==1){
                message.innerHTML = 'Its a tie.';
            }
            if(n==2){
                message.innerHTML = 'You get a point.';
                score1.innerHTML = score_player+1;
            }
            break;
        case 2:
            pc.src = 'assets/scissors.png';
            console.log("PC selects scissor");
            if(n==0){
                message.innerHTML = 'You get a point.';
                score1.innerHTML = score_player+1;
            }
            if(n==1){
                message.innerHTML = 'PC gets a point.';
                score2.innerHTML = score_pc+1;
            }
            if(n==2){
                message.innerHTML = 'Its a tie.';
            }
            break;
        default:
            console.log("Invalid Selection.",rn);
            break;
    }
}

rock.addEventListener("click",()=>competePC(0));
paper.addEventListener("click",()=>competePC(1));
scissor.addEventListener("click",()=>competePC(2));
