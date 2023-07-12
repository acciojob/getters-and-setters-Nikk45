//complete this code
// class Person {
// 	Person(name,age){
// 		this.name = name;
// 		this.age = age;
// 	}

// 	get name(){
// 		return this.name;
// 	}

// 	set age(newAge){
// 		this.age = newAge;
// 	}
// }

// class Student extends Person {
// 	study(){
// 		console.log(`${this.name} is studying`);
// 	}
// }

// class Teacher extends Person {
// 	teach(){
// 		console.log(`${this.name} is teaching`);
// 	}
// }

// const person = new Person('John', 25);
// console.log(person.name);  // Output: John
// person.age = 30;
// console.log(person.age);  // Output: 30

// const student = new Student('Alice', 20);
// console.log(student.name);  // Output: Alice
// student.study();            // Output: Alice is studying.

// const teacher = new Teacher('Bob', 35);
// console.log(teacher.name);  // Output: Bob
// teacher.teach(); 

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(newAge) {
    this._age = newAge;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

// Creating instances and using the classes
const person = new Person('John', 25);
console.log(person.name);  // Output: John
person.age = 30;
console.log(person.age);  // Output: 30

const student = new Student('Alice', 20);
console.log(student.name);  // Output: Alice
student.study();            // Output: Alice is studying.

const teacher = new Teacher('Bob', 35);
console.log(teacher.name);  // Output: Bob
teacher.teach(); 
	
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
