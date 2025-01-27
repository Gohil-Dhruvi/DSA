// Initialize a Set :-

const mySet = new Set();

// 1. Add elements to the Set
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(20); // Duplicate values are ignored

console.log("After adding elements:");
console.log(mySet); // Output: Set(4) { 10, 20, 30, 40 }

// 2. Check if an element exists in the Set (has)
console.log("Does the Set have 20? ", mySet.has(20)); // Output: true
console.log("Does the Set have 50? ", mySet.has(50)); // Output: false

// 3. Delete an element from the Set
mySet.delete(20);
console.log("After deleting 20:");
console.log(mySet); // Output: Set(3) { 10, 30, 40 }

// 4. Get the size of the Set
console.log("Size of the Set: ", mySet.size); // Output: 3

// 5. Iterate through the Set using forEach
console.log("Iterating using forEach:");
mySet.forEach((value) => {
  console.log(value);
});

// 6. Get all values from the Set
console.log("Values in the Set:");
console.log(mySet.values()); // Output: [Set Iterator] { 10, 30, 40 }
console.log([...mySet.values()]); // Output: [10, 30, 40]

// 7. Get all entries from the Set (key-value pairs, where key === value)
console.log("Entries in the Set:");
console.log(mySet.entries()); // Output: [Set Iterator] { [10, 10], [30, 30], [40, 40] }
console.log([...mySet.entries()]); // Output: [[10, 10], [30, 30], [40, 40]]

// 8. Get all keys from the Set (keys === values for a Set)
console.log("Keys in the Set:");
console.log(mySet.keys()); // Output: [Set Iterator] { 10, 30, 40 }
console.log([...mySet.keys()]); // Output: [10, 30, 40]

// 9. Clear the Set
mySet.clear();
console.log("After clearing the Set:");
console.log(mySet); // Output: Set(0) {}


// Initialize a Map :-

const myMap = new Map();

// 1. Add key-value pairs to the Map
myMap.set("a", 10);
myMap.set("b", 20);
myMap.set("c", 30);
myMap.set("d", 40);
myMap.set("b", 50); // Updates the value for key 'b'

console.log("After adding key-value pairs:");
console.log(myMap); // Output: Map(4) { 'a' => 10, 'b' => 50, 'c' => 30, 'd' => 40 }

// 2. Get a value by key
console.log("Value for key 'b':", myMap.get("b")); // Output: 50
console.log("Value for key 'e':", myMap.get("e")); // Output: undefined

// 3. Check if a key exists in the Map
console.log("Does the Map have key 'c'? ", myMap.has("c")); // Output: true
console.log("Does the Map have key 'e'? ", myMap.has("e")); // Output: false

// 4. Delete a key-value pair
myMap.delete("c");
console.log("After deleting key 'c':");
console.log(myMap); // Output: Map(3) { 'a' => 10, 'b' => 50, 'd' => 40 }

// 5. Get the size of the Map
console.log("Size of the Map: ", myMap.size); // Output: 3

// 6. Iterate through the Map using forEach
console.log("Iterating using forEach:");
myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// 7. Get all keys from the Map
console.log("Keys in the Map:");
console.log(myMap.keys()); // Output: [Map Iterator] { 'a', 'b', 'd' }
console.log([...myMap.keys()]); // Output: ['a', 'b', 'd']

// 8. Get all values from the Map
console.log("Values in the Map:");
console.log(myMap.values()); // Output: [Map Iterator] { 10, 50, 40 }
console.log([...myMap.values()]); // Output: [10, 50, 40]

// 9. Get all entries (key-value pairs) from the Map
console.log("Entries in the Map:");
console.log(myMap.entries()); // Output: [Map Iterator] { ['a', 10], ['b', 50], ['d', 40] }
console.log([...myMap.entries()]); // Output: [['a', 10], ['b', 50], ['d', 40]]

// 10. Clear the Map
myMap.clear();
console.log("After clearing the Map:");
console.log(myMap); // Output: Map(0) {}


