// Имя в верхнем регистре
let userName = "alex";
let nameUpperCase = getUpperCaseName(userName);
console.log(nameUpperCase);
function getUpperCaseName(name){
    return name.toUpperCase();
}