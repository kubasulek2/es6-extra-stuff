let cardAce = {
	name: 'Ace of Spades'
};
let cardKing = {
	name: 'King of Clubs'
};

let deck = new Map();

deck.set('as', cardAce);
deck.set('kc', cardKing);

// equivalent
// let deck = new Map([['as', cardAce], ['kc', cardKing]]);

console.log(deck);

// size
console.log(deck.size); // 2;

// override value
deck.set('kc', { a: 2 });

// size stay the same
console.log(deck.size); // 2;

// get value
console.log(deck.get('kc'));

// check if value exists
console.log(deck.has('kc'));

// delete value
console.log(deck.delete('kc'));

console.log(deck.size);

// delete all values;
console.log(deck.clear());
console.log(deck); // Empty map;

deck.set('as', cardAce);
deck.set('kc', cardKing);

/* Iterating over map */

console.log(deck.keys()); // return iterator


for (let key of deck.keys()) {
	console.log(key); // keys here
}

for (let val of deck.values()) {
	console.log(val); // values here
}

for (let map of deck.entries()) {
	console.log(map[0], map[1]); // keys, values here
}

// map for each
deck.forEach(el => el.checked = true);


/* Weak maps */

let weakMap = new WeakMap();

let obj = { a: 1 };

weakMap.set(obj, 'hello');
console.log(weakMap.get(obj));

obj = null;
/* from now weakMap is empty */