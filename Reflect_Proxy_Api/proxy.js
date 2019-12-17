let person = {
	name: 'Kuba',
	age: 33
};

// handler will set traps, handler use Reflect api
let handler = {
	/* function has the same structure as Reflect.get() */
	get: function (target, property) { return property in target ? target[property] + '!' : 0; },
	set(target, property, value) {
		if (value.length > 2) {
			// target[property] = value;
			// or
			Reflect.set(target, property, value);
		}
		// nothing happen so you cant change
	}
};
const proxy = new Proxy(person, handler);

console.log(proxy.age); // 33!
console.log(proxy.ages); // 0
//console.log(proxy.ages = 112); // no change:  (112).length === undefined && !(undefined > 2)
console.log(proxy.ages = '112'); // ok
console.log((proxy.ages)); // 112!



/* Setting proxy as prototype */

let person2 = {
	name: 'John',
	age: '22'
};

Reflect.setPrototypeOf(person2, proxy);

console.log(person2.name); // John
console.log(person2.hobbies); // 0 - proxy works here

/* nested proxy */


const handler2 = {
	// proxy code
};
/* It doesn't do anything right now, but just to show it's valid */
let nestedProxy = new Proxy(proxy, handler2);


// wrapping functions

const log = (message) => console.log(message);

let fnHandler = {
	apply(target, thisArg, argumentsList) {
		if (argumentsList.length === 1) {
			return Reflect.apply(target, thisArg, argumentsList);
		}
		console.log('This function must have exactly one argument.');
	}
};

const fnProxy = new Proxy(log, fnHandler);

fnProxy('Hello'); // Hello
fnProxy(); // This function must have exactly one argument.

/* Revocable proxy */
const rvcPerson = {
	age: 22,
	name: 'Anne'
};

const rvcHandler = {
	get(target, property) { return Reflect.get(target, property); }
};

const { proxy: rvcProxy, revoke } = Proxy.revocable(rvcPerson, rvcHandler);

console.log(rvcProxy.name);

/* No more operations on this proxy */
revoke();
console.log(rvcProxy.name); // type error: cannot use proxy after revoke