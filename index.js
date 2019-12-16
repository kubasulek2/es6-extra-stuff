
let arr = [1, 2, 3];

console.log(arr + 1); // "1,2,31"

// arr[Symbol.toPrimitive] = function () {
// 	return this.reduce((p, n) => p + n, 0);
// };

// the same as

arr.valueOf = function () {
	return this.reduce((p, n) => p + n, 0);
};

console.log(arr + 1); // 7