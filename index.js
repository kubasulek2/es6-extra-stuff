let person = {
	name: 'Kuba',
	age: 33
};

// handler will set traps, handler use Reflect api
let handler = {
	/* function has the same structure as Reflect.get() */
	get: function (target, name) { return name in target ? target[name] + '!' : 0; }
};
const proxy = new Proxy(person, handler);

console.log(proxy.age); // 33!
console.log(proxy.ages); // 0
