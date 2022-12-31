// Выводит сумму элементов массива больше 10
/**
 * @param {array} grades
 */
function sumGradesAbove10(grades) {
    let sum = 0;
	for (let i = 0; i < grades.length; i++){
        if (grades[i] >= 10){
            sum = sum + grades[i]
        }
    }
    return sum
}


console.log(sumGradesAbove10([10, 5, 18, 3, 14, 19, 9])) // 61
console.log(sumGradesAbove10([18, 4, 9, 20, 8])) // 38