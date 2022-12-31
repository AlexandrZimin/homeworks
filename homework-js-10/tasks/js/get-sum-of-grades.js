const student = {
    name: "Sam Doe",
    age: 24,
    grades: [13, 15, 15, 14, 18]
  };
  
  /**
   * @param {Object} student
   * @param {string} student.name
   * @param {number} student.age
   * @param {number[]} student.grades
   */
  function getSumOfGrades(student) {
    let sum = 0
    student.grades.forEach(function (grade){
        sum = sum + grade
    });
    return sum
  }
  
  
  // Sample usage - do not modify
  console.log(getSumOfGrades(student)); // 75