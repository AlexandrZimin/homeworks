const users = [
    {
      firstName: "Sam",
      lastName: "Blue",
      age: 21,
    },
    {
      firstName: "Charlie",
      lastName: "Bon",
      age: 38,
    }
  ];
  
  /**
   * @param {{firstName: String, lastName: String, age: Number}[]} users
   */
  function getFullNames(users) {
      let array = []
      let fullName = ``
      users.forEach(function (names){
        fullName = `${names.firstName} ${names.lastName}`
        array.push(fullName)
      })
    return array
  }
  
  
  // Sample usage - do not modify
  console.log(getFullNames(users)); // [Sam Blue, Charlie Bon]