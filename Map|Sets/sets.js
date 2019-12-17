// Create
let set = new Set([1, 1, 1]); // Set {1} - only unique

// Add value
set.add(2);

// Delete
set.delete(2); // Set{1}

// Clear all 
set.clear(); // Set{}

// Add multiple values
[1, 2, 3].forEach(el => set.add(el));

// Check if value is in set
set.has(1); // true

/* Set has the same keys and values */
console.log(set.keys()); // 1,2,3
console.log(set.values()); // 1,2,3
console.log(set.entries()); // [1,1],[2,2],[3,3]

for (const el of set) {
	console.log(el); // 1,2,3
}


/* WeakSet */
let a = { a: 2 };
let b = { b: 3 };

let weakSet = new WeakSet([a, b]);
console.log(weakSet);