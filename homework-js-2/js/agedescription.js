//Описание возраста
let ageNumber = "22";
let ageDescription = getAgeDescription(ageNumber);
console.log(ageDescription);
function getAgeDescription(age){
    let Description = `You are currently ${age} years old`
    return  Description;
}