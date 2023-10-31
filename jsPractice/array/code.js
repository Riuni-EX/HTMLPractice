//配列の初期化
let arr = [1,2,3,"Alice",12.5];
//中身の確認
console.log(arr);
//要素の個数確認
console.log(arr.length);
//配列に値の追加
arr.push("追加しました");
console.log(arr);
//删除最后一个数组
arr.pop();
console.log(arr);

//配列の作成
let arr2 = new Array(5);
arr2[0] = 12;
arr2[1] = "hello";
console.log(arr2);

//プロジェクトの書き方
let obj = {name:"Alice",id:122,isStudent:true};
console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
//値の上書きの仕方
obj.id = 30;
console.log(obj.id);

obj["isStudent"] = false;
console.log(obj["isStudent"]);

//for-of
for(let a of arr){
    console.log(a);
}
//for-in
for(let kay in arr){
    console.log(key + ":" +obj[key])
}