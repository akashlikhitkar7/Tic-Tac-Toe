let music = new Audio();
let audioTurn = new Audio("/music/notification22-60937.mp3");
let gameover = new Audio("/music/michael_message.mp3");
let turn = "X";
let score = false;



let changeTurn = ()=>{
    return turn === "X"? "0":"X";

}
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn()
            document.querySelector('.line').style.width = "0";
            audioTurn.play()
            chenwin()
            scores = true
            if(!score){
                document.getElementsByClassName("info")[0].innerText = `Turn for ${boxtext.innerText} `
                
        
            }
        }

    })
})
let chenwin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ];
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            score = true;
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + "won";
            document.getElementsByTagName("img")[0].style.width = "100px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = "30vw";
            document.querySelector('.line').style.height = "3px";
            gameover.play();


        }
    });

};

    let boxsText = document.getElementsByClassName('box')
    Array.from(boxsText).forEach(element =>{
        let boxsTexts = element.querySelector('.boxtext')
        reset.addEventListener('click', ()=>{
            boxsTexts.innerText = " "
            turn = "X" 
            document.getElementsByTagName("img")[0].style.width = "0" 
            score = false;
            document.getElementsByClassName("info")[0].innerText = `Turn for`+ turn
            document.querySelector('.line').style.width = "0";

        })
    })
