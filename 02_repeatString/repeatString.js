const repeatString = function(word, repeticiones) {
    var mensaje = "";
    if (repeticiones < 0){
        return "ERROR";
    } else {
        for(let i = 0; i < repeticiones; i++) {
            mensaje = mensaje + word;
        }
        return mensaje;
    }
};

// Do not edit below this line
module.exports = repeatString;
