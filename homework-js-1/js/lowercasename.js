// Имя в нижнем регистре
const userName = "ALEX";
let nameLowerCase = getLowerCaseName(userName);
console.log(nameLowerCase);
function getLowerCaseName(name){
    return name.toLowerCase();
}