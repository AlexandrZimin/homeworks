//Повышает первую температуру в массиве на 1
function incrementFirstTemperature(temperatures) {
    temperatures[0]=temperatures[0] + 1;
    return temperatures; 

}
console.log(incrementFirstTemperature([3, 5, 4, 7]))
console.log(incrementFirstTemperature([-5, 12, 15, 18, 13]))