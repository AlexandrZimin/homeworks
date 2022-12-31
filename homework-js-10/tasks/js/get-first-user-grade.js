const students = [
    {
      name: "Sam Doe",
      age: 24,
      learnEnglish: {
        startYear: 2020,
        grade: 18
      }
    },
    {
      name: "Charlie Bron",
      age: 31,
      learnEnglish: {
        startYear: 2021,
        grade: 19
      }
    }
  ];
  
  /**
   * @typedef {{startYear: Number, grade: Number}} Course
   * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
   *
   * @param {Student[]} students
   */
  function getFirstStudentGrade(students) {
    console.log(`${students[0].learnEnglish.grade}`)
  }
  
  
  // Sample usage - do not modify
  getFirstStudentGrade(students); // 18