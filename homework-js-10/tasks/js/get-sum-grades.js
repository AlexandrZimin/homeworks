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
  function getSumGrades(students) {
    let sum = 0
    students.forEach(function (gradeOfStudent){
        sum = sum + gradeOfStudent.learnEnglish.grade
    });
    return sum
  }
  
  
  // Sample usage - do not modify
  console.log(getSumGrades(students)); // 37