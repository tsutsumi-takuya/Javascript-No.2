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

const num = Number(false);
console.log(num);

if(0 == false) {
	console.log('this is true');
} else {
	console.log('this is false');
}