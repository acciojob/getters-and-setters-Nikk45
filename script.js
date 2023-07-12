//complete this code
class Person {
	Person(name,age){
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
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`);
	}
}

const person = new Person('John',25);
const student = new Student("John", 30);
const teacher = new Teacher("John", 30);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
