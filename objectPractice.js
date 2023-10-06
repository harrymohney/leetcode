let student = {
  name: 'John Doe',
  age: 20,
  grades: {
      math: 'A',
      english: 'B',
      science: 'A'
  },
  isGraduated: false
};

  
for (let subject in student) {
  console.log(student[subject]);
};
  

/*
Access the name property of the object and log to the console.

console.log(student.name);

Access the length of the name property and log to console.

console.log(student.name.length);

Access the index of letter 'D' in the name property.

console.log(student.name.indexOf('D'));

Log the substring of name from index 5 to 8.

console.log(student.name.substring(5, 8));

Log the keys of the grades object iteratively.

for (let subject in student.grades) {
    console.log(subject);
  };

Log all the grades of the student iteratively.

for (let subject in student.grades) {
    console.log(student.grades[subject]);
  };

Check if the student has graduated.

console.log(student.isGraduated);

Update the isGraduated property to true.

student.isGraduated = true;
  
  console.log(student.isGraduated);

Add a new property school with the value 'Hogwarts'.

student.school = 'Hogwarts';
  
  console.log(student.school);

Delete the age property from the object.

delete student.age;
  
  console.log(student.age);

Iterate over all the properties (keys) in the student object.

for (let key in student) {
  console.log(key);
};
or
for (let subject in student) {
  console.log(subject);
};
code doesn't care what it's called as long as it's -in- student common practice refer to it as key

Iterate over all the values in the student object.

for (let subject in student) {
  console.log(student[subject]);
};



dog == cats
will return false
that is a comparison operator
=== this is a strict comparison
== are these equal? === are they equal in all ways?
+ addition operator - subtraction operator
/ division operator
* multiplication operator
= assignment operator
*/