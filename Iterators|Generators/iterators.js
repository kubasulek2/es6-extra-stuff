let array = [1, 2, 3];

let it = array[Symbol.iterator](); // calling it returns actual iterator;

console.log(it.next(), it.next(), it.next(), it.next()); // value: 1, done: false ---> value: undefined, done: true;

/* We can create or override this function */


// Overriding Symbol.iterator
// Let's return array values doubled.

array[Symbol.iterator] = function () {
	let index = 0;
	return {
		next: function () {
			return index < array.length
				? { done: false, value: array[index++] * 100 }
				: { done: true };
		}
	};
};

/* works only in for of loop: array[0]  is still 1 not 100. */
for (const val of array) {
	console.log(val); // 100/200/300
}


// Creating custom iterable object
// Iterate only over property members
let car = {
	speed: 200,
	color: 'red',
	brand: 'Mercedes',
	drive () { console.log(this); },
	[Symbol.iterator] () {
		const keys = Object.keys(this);
		const self = this;
		let index = 0;
		return {
			next: function () {
				// if not function
				if (typeof self[keys[index]] !== 'function') {
					return index < keys.length
						? { done: false, value: `This ${ keys[index] } is ${ self[keys[index++]] }.` }
						: { done: true };
				} else {
					// skip this one
					index++;
					return this.next();
				}
			}
		};
	}
};

for (const p of car) {
	console.log(p); // This speed is 200. This color is red. dThis brand is Mercedes.
}

/* Now can use it like array!!! */
[...car].forEach(v => console.log(v));