// 7. Classes (lesson 21)

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
    const courseRes = 2022 - this.admissionYear;
    courseRes.sort();
  }
}

class Students {
  constructor(
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
    ],
  ) {
    this.studentsData = studentsData;
  }

  get getInfo() {
    return `${this.course}`;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
