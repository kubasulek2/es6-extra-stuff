# Maps:

* are collections of key value pairs. keys are unique.
* under the hood are arrays of nested two elements(key and value) arrays.
* maps can have any type of keys, so object, array can be the key by contrast to objects, that can only have strings, numbers and symbols as keys.
* maps have different interface than object
* you can iterate them with for of loop with map.keys(), map.values() or map.entries() as iterable
* maps unlike objects preserve keys order.

# WeakMap

* weakMaps keys must be objects!!
* keys of the weakMap are loosely referenced, which means that when you erase other references to object underlying a key key-value pair gets erased
* weakMap interface is poorer - only get, set, has, delete. 

# Sets:

* sets are array-like object that holds only unique values
* set.keys() and set.values() are the same
* however in for el of set loop only one of key or value(since they are the same) is displayed.  

# WeakSet

* weakSets stores only objects.
* weakSet API has only: "add", "delete" and "has" methods
* weakSet value is also garbage collected if there is no other reference to it.