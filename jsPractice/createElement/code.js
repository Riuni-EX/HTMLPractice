//ol idを使って要素の情報を取得
let list = document.getElementById("list");

//新しい要素の作成
let newLink = document.createElement("a");
//内容を挿入
newLink.innerHTML = "developer.mozilla.org";
//最後に挿入
list.append(newLink);

//新しい<li>
let item = document.createElement("li");
list.append(item);
item.append(newLink);

//要素の情報を取得
let removeLink = document.getElementById("link-2");
//削除
//removeLink.remove();
removeLink.parentNode.remove();

//ボダンをクリックしたら
//ボダン1をクリックしました
let btnEvent = document.getElementById("button1");
/*btnEvent.onclick = function(){
    console.log("ボタン1をクリックしました");
}
btnEvent.onclick = function(){
    console.log("ボタン2をクリックしました");
}*/

btnEvent.addEventListener("click",()=>{
    console.log("ボタン1をクリックしました");
});
btnEvent.addEventListener("click",()=>{
    console.log("ボタン2をクリックしました");
});

function hello(){
    console.log("hello");
}
