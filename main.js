// 7. Classes (lesson 21)

studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
]


class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} + ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    const today = new Date()
    const year = today.getFullYear()
    return year.sort((a, b) => {
      return a - b;
    });
  }
}





class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }

  get getInfo() {
    const varName = new User()
    return varName.course.map(i => new User (i.firstName, i.lastName).fullName)

  }
}
console.log(varName.course)



const students = new Students(studentsData);
// console.log(students.getInfo());
