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
function getLastUserFullName(users) {
	console.log(`${users[users.length - 1].firstName} ${users[users.length - 1].lastName}`)
}


// Sample usage - do not modify
getLastUserFullName(users); // "Charlie Bon"