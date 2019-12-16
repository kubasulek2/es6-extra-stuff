// Creating a new Symbol

let _s = Symbol() // No new keyword here!!!
let _s2 = Symbol('Name') // For debugging purposes only!!!
// Behind the scenes it will represent unique id, that we cant access explicitly.




// Using symbols with computed property names. 

let obj = {
	[_s]: 2,
	[_s2]: 4
}


// Can't access symbols directly.

console.log(Object.keys(obj)); // no symbols here;

for (var v in obj) {
	if (obj.hasOwnProperty(v)) {
		console.log(v);  // no symbols here
	}
}


// Getting symbol properties

// When you have a symbol variable
console.log(obj[_s]);

// When don't have:
let symbols = Object.getOwnPropertySymbols(obj);

for (const s of symbols) {
	console.log(obj[s]);
}




/* Sharing symbols */

let _s3 = Symbol.for('key');
let _s4 = Symbol.for('key');

console.log(_s3 === _s4); // true

/* Shared symbols are great for accessibility */

let person = {};

(function addAge (obj) {
	let _ageSymbol = Symbol.for('age');
	obj[_ageSymbol] = 27;
})(person);

// how to get to person age?? You can use shared symbol
let _ageSymbol = Symbol.for('age');
console.log(person[_ageSymbol]);  // 27


// Well-known symbols:

// Symbol.toStringTag
class Person {
	get [Symbol.toStringTag] () {
		return 'Validator';
	}
}
let p = new Person();
console.log();
console.log(p.toString()); // [object Validator]

/*
Well-know Symbols:

Iteration symbols

Symbol.iterator
A method returning the default iterator for an object. Used by for...of.

Symbol.asyncIterator
A method that returns the default AsyncIterator for an object. Used by for await...of.


Regular expression symbols

Symbol.match
A method that matches against a string, also used to determine if an object may be used as a regular expression. Used by String.prototype.match().

Symbol.matchAll
A method that returns an iterator, that yields matches of the regular expression against a string. Used by String.prototype.matchAll().

Symbol.replace
A method that replaces matched substrings of a string. Used by String.prototype.replace().

Symbol.search
A method that returns the index within a string that matches the regular expression. Used by String.prototype.search().

Symbol.split
A method that splits a string at the indices that match a regular expression. Used by String.prototype.split().


Other symbols

Symbol.hasInstance
A method determining if a constructor object recognizes an object as its instance. Used by instanceof.

Symbol.isConcatSpreadable
A Boolean value indicating if an object should be flattened to its array elements. Used by Array.prototype.concat().

Symbol.unscopables
An object value of whose own and inherited property names are excluded from the with environment bindings of the associated object.

Symbol.species
A constructor function that is used to create derived objects.

Symbol.toPrimitive
A method converting an object to a primitive value.

Symbol.toStringTag
A string value used for the default description of an object. Used by Object.prototype.toString().

*/