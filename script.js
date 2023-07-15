// complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	get name(){
		return this.name;
	}

	set age(newAge){
		this.age = newAge;
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age);
	}
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age);
	}
	teach(){
		console.log(`${this.name} is teaching`);
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
