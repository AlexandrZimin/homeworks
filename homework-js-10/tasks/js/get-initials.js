const user1 = {
    firstName: "Sam",
    lastName: "Doe",
    age: 20
  };
  
  const user2 = {
    firstName: "Charlie",
    lastName: "Fort",
    age: 31
  };
  
  /**
   * @param {Object[]} user
   * @param {string} user[].firstName
   * @param {string} user[].lastName
   * @param {number} user[].age
   */
  function getIntials(user) {
    console.log(`${user.firstName[0]}${user.lastName[0]}`)
  }
  
  
  // Sample usage - do not modify
  getIntials(user1); // "SD"
  getIntials(user2); // "CF"
