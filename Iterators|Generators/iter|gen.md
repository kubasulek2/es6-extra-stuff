# Iterators and Generators:

## Iterators: 

* All objects that values can be "for of" looped, arrays, sets, maps, strings and so on, use iterators internally.
* Iterator is a function that returns obj with property next which is a function.
* You can override iterators or create a custom one.
* Objects with [Symbol.iterator] property are array-likes and can be spread or Array.from(obj)
* Then you can use array methods on this objects

## Generators:

* Generator is a function that can by executed in steps.
* generators have a "*" after "function" keyword and before function name.
* "yield" is a keyword
* 
* 
* 