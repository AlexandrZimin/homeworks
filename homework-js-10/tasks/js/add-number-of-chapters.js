const course1 = {
    name: "Learn English",
    isCompleted: true
  };
  
  const course2 = {
    name: "Learn JavaScript",
    isCompleted: false
  };
  
  /**
   * @param {Object[]} course
   * @param {number} count
   */
  function addNumberOfChapters(course, count) {
    course.numberOfChapters = count
    console.log(course)
  }
  
  
  // Sample usage - do not modify
  addNumberOfChapters(course1, 80); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
  addNumberOfChapters(course2, 60); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }