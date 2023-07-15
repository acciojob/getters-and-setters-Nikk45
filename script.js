// complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}

	getName(){
		return this._name;
	}

	setAge(newAge){
		this._age = newAge;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(`${this._name} is teaching`);
	}
}

// const person = new Person('John', 25);
// console.log(person.age);  // Output: 30

// const student = new Student('Alice', 20);
// student.study();            

// const teacher = new Teacher('Bob', 35);
// teacher.teach(); 


	
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
