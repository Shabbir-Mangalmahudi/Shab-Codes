let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-game");
let newgamebtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let ch = document.querySelector("#text");

let turnO=true;
let count=0;

const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetgame=()=>{
    turnO=true;
    count=0;
    enableboxes();
    msgcontainer.classList.add("hide");
};

const showwinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    disableboxes();
    msgcontainer.classList.remove("hide");
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

const disableboxes = () => {
    for (box of boxes) {
    box.disabled=true;
    }
};

const enableboxes = () => {
    for (box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};

const gamedraw = () => {
    msg.innerText="The Game was draw";
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO)
        {
            ch.innerText = "Chance of X"
            box.innerText = "O";
            turnO = false;
        }
        else
        {
            ch.innerText = "Chance of O"
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();
        
        if(count === 9 && !iswinner)
        {
            gamedraw();
        }
    });
});

const checkwinner = () => {
    for (pattern of  winpatterns) {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
    

        if(pos1!="" && pos2!="" && pos3!="")
        {
        if(pos1===pos2 && pos2===pos3)
        {
            showwinner(pos1);
            return true;
        }
    }
    
    }

};