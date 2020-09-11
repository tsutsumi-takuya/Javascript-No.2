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