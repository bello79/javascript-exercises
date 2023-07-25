const sumAll = function(number1, number2) {
    const regex = /^[0-9]+$/;
    var suma = 0;

    if (typeof number1 !== 'number' || typeof number2 !== 'number' 
    || number1 < 0 || number2 < 0 || !regex.test(number1.toString()) 
    || !regex.test(number2.toString())) {
        return "ERROR";
    } else if (number1 < number2) {
        for(number1; number1 <= number2; number1++){
            suma = suma + number1;
        }
            return suma;
    } else if(number1 > number2){
        for(number2; number2 <= number1; number2++){
            suma = suma + number2;
    }
            return suma;
    } else {
        suma = number1 + number2;
        return suma;
    }

};

// Do not edit below this line
module.exports = sumAll;
