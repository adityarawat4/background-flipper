let hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
let btn = document.querySelector(".btn");
let color = document.querySelector("#color");


btn.addEventListener("click",()=>{
    let hexaColor = "#";
    for(let i=0;i<6;i++){
        hexaColor += hex[Math.floor(Math.random()*hex.length)];
    }
    document.body.style.background = hexaColor;
    color.innerHTML = hexaColor;
})