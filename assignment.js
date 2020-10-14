// Date 13-Oct-2020

// ************ Problem Statement-1 ***************

// 1.1 --> Destructure person object and log name, city, state, hobby1, hobby2, hasVotingRights
// 1.2 --> Add property 'married' to person object while destructuring and assign default value to false 
 
let person = {
  name:'Rahul',
  address: {
  city: 'Pune',
  state: 'MH'
  },
  hobbies: ["Reading", "Swiming"],
  hasVotingRights: true
 };

// Destructuring above Object
let { 
  name,
  address:{
    city:city123,
    state
  },
  hobbies:[hobby1,hobby2],
  hasVotingRights,
  married = false
} = person;

console.log(name);
console.log(city123);
console.log(state);
console.log(hobby1);
console.log(hobby2);
console.log(hasVotingRights);
console.log(married);

// Log of the above destructured object
// Rahul
// Pune
// MH
// Reading
// Swiming
// true
// false


// ************ Problem Statement-2 ***************
//2 --> There is a marks object:
let marks = {
  "Ajay": 78,
  "Vijay": 92,
  "Sanjay": 67
  };
 // Create the function topScorer(marks) that returns the name of the top-scored person.
 // If marks is empty, it should return null.
 // Use Object.entries and destructuring to iterate over key/value pairs.

 function topScorer(studentMarks){
  if (Object.keys(studentMarks).length === 0) return null
  for (let entry of Object.entries(studentMarks).sort((a,b)=>b[1]-a[1])){
    return entry
  } 
}
let result = topScorer(marks)
console.log(result)

// log of result if marks object is not empty
// [ 'Vijay', 92 ]

// log of result if marks object is empty
// null