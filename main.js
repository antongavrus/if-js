// 8. Classes (lesson 21)

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
];

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
    const today = studentsData;
    const date = new Date();
    const year = date.getFullYear();
    return today
      .sort((a, b) => {
        return a.admissionYear > b.admissionYear
          ? -1
          : a.admissionYear === b.admissionYear
          ? 0
          : 1;
      })
      .map((i) => {
        return { ...i, course: year - i.admissionYear };
      });
  }
}

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }

  get getInfo() {
    const varName = new Student();
    return varName.course.map(
        (i) => { return new User(i.firstName, i.lastName).fullName + ' - ' + i.courseName + ', ' + i.course + ' курс' }, );
  }
}

const students = new Students(studentsData);
console.log(students.getInfo);

