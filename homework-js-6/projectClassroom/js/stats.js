/**
 * @param {array} grades
 * @param {number} grade
 */
 export function addGrade(grades, grade) {
    grades.push(grade)
    return grades;
}


/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
	return grades.length;
}


/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
	if (grades.length != 0) {
        return grades[0];
    } else {
        return `no submitted grades`;
    }
}


/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
	if (grades.length != 0) {
        let arrayLength = grades.length - 1;
        return grades[arrayLength];
    } else {
        return `no submitted grades`;
    }
}


/**
 * @param {array} grades
 */
export function getSumOfGrades(grades) {
    let sum = 0 
    grades.forEach(function (grade) {
    sum = sum + grade
    })
    return sum
}


/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
    if (grades.length != 0) {
        let sum = 0;
        grades.forEach(function(grade){
            sum = sum + grade;
        })
    return sum/grades.length;
    } else {
        return `no submitted grades`;
    }
}


/**
 * @param {array} grades
 */
export function getRaisedGrades(grades) {
	return grades.join(",");
}