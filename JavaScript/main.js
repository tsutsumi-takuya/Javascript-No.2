// var, let, const
// let => 上書き可能
// const => 上書き出来ない

// let name = 'Tom';
// name = 'Tim';
// console.log('hello' + name);

// Number, String, Boolean, Undefined, Null, Symbol

// 動的型付け言語
// let variable = 'str';
// variable = 12;			// Number型
// variable = false;		// Boolean型
// variable = undefined;	// Undefined型

// console.log(typeof variable);	// 型の確認

// 静的型付け言語
// int num = 12;

const hello = function hello(name, age) {
	// let name = 'Code Mafia';
	console.log('Hello ' + name + age);
	return name + age;
}

hello('Code Mafia ', 10);
const returnVal = hello('Code Mafia2 ', 20);
console.log(returnVal);

let good = 'Hello world';
console.log(good.length);			//文字列の値を数値化(プロパティ)
console.log(good.toUpperCase());	// 大文字(メソッド)
console.log(good.slice(0, 5));		// 文字列の切り取り
console.log(good.substring(0, 2));	// 与えられた数字分の文字列の切り取り
console.log(good.split(' '));		// 配列分割

const arry = new Array(1,2,3,4,5,6);
arry[5] = 8;
console.log(arry);
console.log(arry[0]);