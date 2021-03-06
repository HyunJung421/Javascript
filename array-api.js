'use strict';
// Q1. make a string out of an array
{       
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  // split: return type -> string[]
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);

}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // find: return the value of **the first element** in the array where predicate is true
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // filter: return **the elements** of an array that meet the condition specified in a callback function
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // map: calls a defined callback function on each element of an array, 
  //      and returns an array that contains the results
  const result = students.map((student) => student.score);
  console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{
  // some: determines whether **the specified callback function returns true** for any element of an array.
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // every: determines whether **all the members of an array** satisfy the specified test.
  const result2 = students.every((student) => student.score < 50);
}

// Q9. compute students' average score
{
  // reduce: The return value of the callbackfn is provided as an argument in the next call to the callbackfn
  const sum = students.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
  const result = sum / students.length;
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a- b) // ascending
    // sort((a, b) => b - a) -> descending
    .join();
  console.log(result);
}