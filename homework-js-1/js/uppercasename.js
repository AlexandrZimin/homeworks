// Имя в верхнем регистре
const userName = "alex";
let nameUpperCase = getUpperCaseName(userName);
console.log(nameUpperCase);
function getUpperCaseName(name){
    return name.toUpperCase();
}