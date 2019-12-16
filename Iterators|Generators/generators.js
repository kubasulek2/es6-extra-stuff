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