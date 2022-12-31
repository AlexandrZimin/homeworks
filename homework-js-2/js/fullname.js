//Получение полного имени 
let name = "Alex";
let surname = "Zimin";
console.log(getFullName(name, surname))
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}