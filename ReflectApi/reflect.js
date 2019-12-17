class Person {
	constructor (name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log(`Hello, i'm ${ this.name }`);
	}
}
class TopObj {
	constructor () {
		this.age = 27;
	}
}

/* Reflect.construct take 3 args  constructor/class, array of arguments, and optional constructor/class to override prototype*/
let reflected = Reflect.construct(Person, ['Kuba'], TopObj);

console.log(reflected); //TopObj{name: 'Kuba'}

console.log(reflected instanceof TopObj); // true
console.log(reflected instanceof Person); // false

/* Reflect apply */
let person1 = Reflect.construct(Person, ['Kuba', 22]);

// Apply takes 3 args, func, this context, and array of args for the func.
Reflect.apply(person1.greet, new Person('Max'), []); // hello i'm Max
Reflect.apply(person1.greet, {}, []); // hello i'm undefined



/* Reflect prototypes */

class Shape {

}

class Square extends Shape {
	constructor (size) {
		super();
		this.size = size;
	}
	get area() { return Math.pow(this.size, 2); }
}

let s = new Square(5);

Square.prototype.color = 'red';

let proto = {
	color: 'green',
	get area() { return 20; }
};
console.log(Reflect.getPrototypeOf(s)); // Square {color: 'red'}
console.log(Reflect.setPrototypeOf(s, proto)); // {color: 'green'}

console.log(s.area); // 20


/* Access properties with Reflect */

console.log(Reflect.get(s, 'size')); // 5
// set or reset property
console.log(Reflect.set(s, 'size', 6)); // 6




// override this, only works with getters!!!
class Size {
	constructor (size) {
		this._size = size;
		this.count = 1;
	}
	get size() { return this._size; }
	set size(val) { return this._size = val; }
}
let size = new Size(20);
let size2 = { _size: 55, count: 2 };

/* third argument sets this. */
console.log(Reflect.get(size, 'size', size2)); // 55
/* Works only when getters encountered */
console.log(Reflect.get(size, 'count', size2)); // still 1, no getters

/* The same with set */
console.log(Reflect.set(size, 'size', 2, size2)); // override with setter and this arg
console.log(Reflect.get(size2, '_size')); // now 2


/* Has method */
console.log(Reflect.has(size, 'size')); // true


/* Own keys */

console.log(Reflect.ownKeys(size)); // [_size, count]

/* Define property */

Reflect.defineProperty(size, 'spinning', {
	value: true,
	//defaults all false - writable, configurable, enumerable
});

for (const key in size) { console.log(key); } // no spinning
console.log(Reflect.ownKeys(size)); // displays spinning

size.spinning = false;
console.log(size.spinning); //true
delete size.spinning;
console.log(size.spinning); //true


// reflect delete

Reflect.deleteProperty(size, 'count');


/* Prevent extensions */

Reflect.preventExtensions(size); // cant add new props from now on

Reflect.isExtensible(size); // false