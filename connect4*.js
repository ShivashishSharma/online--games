console.log("welcome to my connect four");
let turn= "X"; 
let gameover = false;

const changeTurn = ()=>{
    return turn === "X"? "O": "X"
}

const checkWinner = ()=>{
let text = document.getElementsByClassName('text');
let wins = [
    [1,2,3,4],
    [5,2,3,4],
    [5,6,3,4],
    [7,6,5,4],
    [8,9,10,11],
    [12,9,10,11],
    [12,13,10,11],
    [14,13,12,11],
    [15,16,17,18],
    [19,16,17,18],
    [19,20,17,18],
    [21,20,19,18],
    [22,23,24,25],
    [26,23,24,25],
    [26,27,24,25],
    [28,27,26,25],
    [29,30,31,32],
    [33,30,31,32],
    [33,34,31,32],
    [35,34,33,32],
    [36,37,38,39],
    [40,37,38,39],
    [40,41,38,39],
    [42,41,40,39],
    [1,8,15,22],
    [29,8,15,22],
    [29,36,15,22],
    [2,9,16,23],
    [30,9,16,23],
    [30,37,16,23],
    [3,10,17,24],
    [31,10,17,24],
    [31,38,17,24],
    [4,11,18,25],
    [32,11,18,25],
    [32,39,18,25],
    [5,12,19,26],
    [33,12,19,26],
    [33,40,19,26],
    [6,13,20,27],
    [34,13,20,27],
    [34,41,20,27],
    [7,14,21,28],
    [35,14,21,28],
    [35,42,21,28],
[15,23,31,39],
 [8,16,32,24],
 [16,24,32,40],
  [1,9,17,25],
   [33,9,17,25],
 [33,41,17,25],
 [2,10,18,26],
 [10,18,26,34],
 [18,26,34,42],
 [3,11,19,27],
 [11,19,27,35],
 [4,12,28,20],
[4,10,16,22],
 [5,11,17,23],
 [11,17,23,29],
 [6,12,18,24],
 [12,18,24,30],
[18,24,30,36],
[7,13,19,25],
 [13,19,25,31],
 [19,25,31,37],
 [14,20,26,32],
 [20,32,26,38],
[21,27,33,39],
]


wins.forEach(e =>{
    if((text[e[0]-1].innerHTML === text[e[1]-1].innerHTML) && (text[e[2]-1].innerHTML === text[e[0]-1].innerHTML) && (text[e[0]-1].innerHTML !== "") && (text[e[3]-1].innerHTML === text[e[0]-1].innerHTML))
        {document.querySelector('.changename').innerText = "Player " + text[e[0]-1].innerHTML + " Wins";
        let texts = document.querySelectorAll('.text');
        texts[e[0]-1].style.color = "cadetblue";
        texts[e[1]-1].style.color = "cadetblue";
        texts[e[2]-1].style.color = "cadetblue";
        texts[e[3]-1].style.color = "cadetblue";
        gameover = true;

}
})
}


    let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.text');
    element.addEventListener('click', ()=>{
     if(!gameover){   if(boxtext.innerHTML === ''){
            if(turn === "X")
            {boxtext.innerHTML = "&#x25CF;";}
            else{boxtext.innerHTML = "O"}
            turn = changeTurn();
            checkWinner();
            if (!gameover){if(turn === "X")
                {document.getElementsByClassName("changename")[0].innerHTML  = "Turn For &#x25CF;" ;}
                else{ document.getElementsByClassName("changename")[0].innerHTML = "Turn For O"}
            } }
        }})
    })

Reset.addEventListener('click', ()=>{
    let text = document.querySelectorAll('.text');
    Array.from(text).forEach(element => {
        element.style.color = "black";
        element.innerHTML = ""
       
    });
    
    turn = "X";
    gameover = false;
        document.querySelector('.changename').innerHTML  = "Turn for &#x25CF;";
        let texts = document.querySelectorAll('.text');
        
        
})
