let boxes = document.querySelectorAll(".box");
let rst = document.querySelector(".rst-btn");
let playerx=true;

let winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=> {
      box.addEventListener("click",()=>{
       if(playerx==true)
{
    console.log("Box is clicked");
    box.innerHTML="X"
    playerx=false;
}
else{
    console.log("box is cliked");
    box.innerHTML="O"
    playerx=true;
    
}
box.disabled=true;
cheakwinner();
})
});
const disablboxes =()=>{
    for(let box of boxes ){
        box.disabled =true;
    }
}
const enblelboxes =()=>{
    for(let box of boxes ){
        box.disabled =false;
        box.innerHTML="";
    }
}
const RestGame =()=>{
    for(let box of boxes ){
        playerx = true;
       enblelboxes();
    }
}

const cheakwinner =() =>{
    for( let pattern of winpattern){
        let pos1= boxes[pattern[0]].innerText;
        let pos2 =boxes[pattern[1]].innerText;
        let pos3 =boxes[pattern[2]].innerText;
       if(pos1!="" && pos2 != "" && pos3 != ""){
        if(pos1===pos2 && pos2===pos3){
            console.log("Winner" ,pos1);
            alert(`Player ${pos1} won the game`);
            disablboxes();
            
        }
            }
                }
                    }
        rst.addEventListener("click",RestGame)
        