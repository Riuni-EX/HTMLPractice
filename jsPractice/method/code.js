//メソッドを作成戻り値なし、バラメーターなし
function printHello(){
    console.log("hello");
}

//メソッドの呼び出し
printHello();

//メソッドを作成戻り値あり、バラメーターあり
function sum(a,b){
    return a + b;
}

//メソッドの呼び出し
console.log(sum(1,2));

//デフォルトバラメーター
function print(str1,str2="sekai",str3="!!!!"){
    console.log(str1 + "" + str2 + "" + str3);
}
//メソッドの呼び出し
print("hello");
print("hello","こんにちは");
print("hello","konnichiha","nihao");

let add = (x,y)=>x+y;
console.log(add(2,3));