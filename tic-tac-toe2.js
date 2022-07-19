console.log("welcome to my tic tac toe");
let turn= "X";
let gameover = false;

//const music = document.getElementsByTagName("embed");
// func to change turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}
// function to check win
const checkWinner = ()=>{
let text = document.getElementsByClassName('text');
let wins = [
    [1,2,3,40,10,0],
    [1,5,9,40,20,45],
    [1,4,7,30,20,90],
    [2,5,8,40,20,90],
    [3,6,9,50,20,90],
    [3,5,7,40,20,135],
    [4,5,6,40,20,0],
    [7,8,9,40,30,0]

]
wins.forEach(e =>{
    if((text[e[0]-1].innerText === text[e[1]-1].innerText) && (text[e[2]-1].innerText === text[e[0]-1].innerText) && (text[e[0]-1].innerText !== ""))
        {document.querySelector('.changename').innerText = "player " + text[e[0]-1].innerText + " wins";
        let texts = document.querySelectorAll('.text');
        texts[e[0]-1].style.color = "slategray";
        texts[e[1]-1].style.color = "slategray";
        texts[e[2]-1].style.color = "slategray";
        
        gameover = true;

}
})
}
// main logic

    let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click', ()=>{
     if(!gameover){   if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
           //music.play();
            checkWinner();
            if (!gameover){
                document.getElementsByClassName("changename")[0].innerText  = "Turn For " + turn;
            } }
        }})
    })

Reset.addEventListener('click', ()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element => {
        element.style.color = "";
        element.innerText = ""
       
    });
    
    turn = "X";
    gameover = false;
        document.querySelector('.changename').innerText  = "Turn For " + turn;
        let texts = document.querySelectorAll('.text');
        
        
})