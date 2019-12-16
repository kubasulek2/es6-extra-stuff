/* function* generator == function * generator == function *generator */
function* generator () {
	yield 'House';
	yield 'Garage';
}

const it = generator(); // generator returns an iterator object.
console.log(it.next()); // { value: 'House', done: false }
console.log(it.next()); // { value: 'House', done: false } 
console.log(it.next()); // { value: undefined, done: true }


/* Generators in action */

let obj = {
	[Symbol.iterator]: gen
};

function* gen () {
	let index = 100;
	while (index-- > 0) {
		yield index;
	}
}

for (const el of obj) {
	console.log(el); // 99/98/97...0;
}

/* Reusable generator func */

function* gen2 (end) {
	let index = 0;
	while (index < end) {
		yield index++;
	}
}
let it2 = gen2(10);

// actually you can iterate it, but cant create an array, like with object containing iterator.
for (const el of it2) {
	console.log(el); // work
}

let myArr = [...it2]; // doesn't work:(


// controlling iterators with throw

function* gen3 (end) {
	let index = 0;
	while (index < end) {
		try {
			yield index++;
		} catch (error) {
			//index++;
			// return here;
			// return error;
			console.log(error);
		}
	}
}

let it3 = gen3(5);

console.log(it3.next());
console.log(it3.throw('Error Here'));
console.log(it3.return(('Error Here'))); // or return here to set value to 'Error Here' and done to true 
console.log(it3.next());
console.log(it3.next());


/* Passing numbers to generators */

function* fibonacci (n = 0) {
	let n2 = n + 1;
	while (true) {
		let current = n;
		n = n2;
		n2 = n + current;
		let reset = yield current; // reading value
		if (reset) { n = 0; n2 = n + 1; }
		/* or */
		//if (reset) break; // generator is over {value: undefined, done: true}
	}
}

const getFibonacci = fibonacci(2);
console.log(getFibonacci.next().value); // 2
console.log(getFibonacci.next().value); // 3
console.log(getFibonacci.next().value); // 5
console.log(getFibonacci.next().value); // 8
console.log(getFibonacci.next().value); // 13
console.log(getFibonacci.next().value); // 21
console.log(getFibonacci.next(true).value); // passing value here | 0
console.log(getFibonacci.next().value); // 1


// generator as property

let obj2 = {
	* generator () {
		yield 'property generator';
	}
};

console.log(obj2.generator().next()); // property generator;

/* yield* */

let obj3 = {
	* generator () {
		yield* [1, 2, 3];
		yield 5;
	}
};


let it4 = obj3.generator();
console.log(it4.next()); // 1
console.log(it4.next()); // 2
console.log(it4.next()); // 3
console.log(it4.next()); // 5

/* Spread */
let it5 = obj3.generator();
console.log([...it5]); // [1,2,3,5]


/* Async example */

function getName () {
	setTimeout(() => iter.next('Kuba'), 1000);
}

function getAge () {
	setTimeout(() => iter.next(22), 4000);
}

let iter = (function* () {
	const name = yield getName();
	console.log(name); // kuba after one sec
	
	const age = yield getAge();
	console.log(age); // 22 after 4 secs
}());

// Don't understand that  there is 3 next but only 2 yields ant yet second value isn't undefined.

iter.next();