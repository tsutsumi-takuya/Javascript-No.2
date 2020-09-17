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

const arry = [1, 2, 3, 4, 5, 6, 'mozi', false];

arry[5] = 8;				// 配列を指定して上書き
arry.push('new item');		// 末尾に挿入
arry.unshift('new item');	// 先頭に挿入
const val = arry.pop();		// 末尾を削除
console.log(val);			// popで消した値の表示
const val2 = arry.shift();	// 先頭の値の削除
console.log(val2);			// 削除した値の表示

console.log(arry);
console.log(arry[0]);
console.log(arry.length);

const person = {
	name: ['Code', 'Mafia'],
	age: 32,
	gender: 'male',
	interests: {
		sports: 'Baseball',
		music: 'Chill'
	},
	getFullName: function() {
		console.log(this.name[0] + this.name[1])
	}
};

person.age = 12;				// ageの更新
console.log(person.name);
console.log(person.gender);		// 格納されているものの表示
person.getFullName();

const arryloop = [1,2,3,4,5,6];

for (let i = 0; i < arryloop.length; i++ ) {
	console.log(arry[i]);
}

for (let i in arryloop) {			// inは添字
	console.log(i, arryloop[i]);
}

for (let v of arryloop) {			// vは値
	console.log(v);
}

const todos = [
	{
		id: 1,
		title: 'Go to School',
		completed: true
	},
	{
		id: 2,
		title: 'Go to Musium',
		completed: true
	},
	{
		id: 3,
		title: 'Go to Shopping',
		completed: false
	}
]

for (let i = 0; i < todos.length; i++) {
	let todo = todos[i];
	if (todo.completed === true){
		console.log(i, todo.title);
	}
}

for (let i in todos){
	let todo = todos[i];
	if (todo.completed === true){
		console.log(i, todo.completed);
	}
}

if(false) {
	console.log('this is true');
} else if (true){
	console.log('this is else if block');
} else {
	console.log('this is false');
}

if(1 === '1') {
	console.log('this is true');
} else {
	console.log('this is false');
}

if(1 == '2') {
	console.log('this is true');
} else {
	console.log('this is false');
}

const num = undefined;
const bool = Boolean(num);
console.log(bool);

if(0 == false) {
	console.log('this is true');
} else {
	console.log('this is false');
}

if(0 != '0') {
	console.log('this is true');
} else {
	console.log('this is false');
}

if(0 == '0' && 0 === '0') {
	console.log('this is true');
} else {
	console.log('this is false');
}

if(0 == '0' || 0 === '0') {
	console.log('this is true');
} else {
	console.log('this is false');
}

if(num) {
	console.log('this is true');
} else {
	console.log('this is false');
}

const hi = (name, age) => 40;
// {
// 	console.log('hello ' + name + age); // アロー関数
// 	console.log('hello ' + name + age);
// }

// hi('hello code mafia');
// hi('hello code mafia 2');
// hi();

const arry_3 = [1,2,3,4,5,6];

arry_3.forEach(value => console.log(value));



function Hi(callback, lastname) {
	console.log(callback);
	console.log('hello ' + callback(lastname));
}

function getName() {
	return 'Code mafia';
}

function getFirstName(){
	return 'Code';
}

Hi(function() {
	return 'Code';
});

Hi(getName);
Hi(getFirstName);

Hi(() => 'Code'); // アロー関数

Hi(function(name) {
	return 'Code ' + name;
}, 'Mafia');

Hi(getFirstName, 'Mafia');

function doSomething(a, b, call) {
	const result = call(a,b);
	console.log(result);
}

function multiply(a, b) {
	return a * b;
}

function plus(a, b) {
	return a+b;
}

doSomething(2, 2, multiply);
doSomething(3, 3, plus);

const arry_4 = [1,2,3,4,5];

function forEach(ary, callback_2) {
	for (let i = 0; i < ary.length; i++) {
		callback_2(ary[i]);
	}
}

function log(val) {
	console.log(val);
}

function double(val) {
	val = val * 2;
	log(val);
}

forEach(arry_4, log);
forEach(arry_4, double);
forEach(arry_4, function(val) {
	val = val * 3;
	log(val);
});

const arry_5 = [11,22,33,44,55];

arry_5.forEach(val => console.log(val));

arry_5.forEach(function(val, i, ary) {
	console.log(val, i, ary);
});

for (let i = 0; i < arry_5.length; i++) {
	const v = arry_5[i];
	console.log(v);
}

// arry_5.forEach(function(val) {
// 	console.log(val);
// })

const arry_6 = [1,2,3,4,5];

arry_6.reduce(function(accu, curr) {
	console.log(accu, curr);
	// return accu * curr;
	// 前の値の戻り値がaccuに入る
	// currには配列の値が入る
}, 10);

const str = 'animation';
const strArry = str.split('');

console.log(strArry);

const result = strArry.reduce((accu, curr) => {
	console.log(accu);
	return `${accu}<${curr}>`; // テンプレートリテラル
	// return accu + '<' + curr + '>';
}, "");

console.log(result);