//要素の取得
let text = document.getElementById("text-1");
//中身の確認
console.log(text);
//要素の内容を取得
console.log(text.innerHTML);
//要素の内容を変更
text.innerHTML = "nihao";

let ex = document.getElementsByClassName("ex1");
console.log(ex);
console.log(ex[0].innerHTML);

let ex2 = document.getElementsByTagName("div");
console.log(ex2);
console.log(ex2[1].innerHTML);

let link = document.getElementById("link-1");
//要素の内容を取得
console.log(link.innerHTML);
//urlの内容を取得
console.log(link.href);
//urlの変更
link.href = "https://eng-entrance.com/what-is-domhttps://eng-entrance.com/what-is-dom"
//target_brank
link.target = "_blank";
