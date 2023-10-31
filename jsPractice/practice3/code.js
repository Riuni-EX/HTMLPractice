let label = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

let num = 0;

button1.addEventListener('click',()=>{
    console.log(0);
});
button2.addEventListener('click',()=>{
    console.log(num++);
});
button3.addEventListener('click',()=>{
    console.log(num--);
});
