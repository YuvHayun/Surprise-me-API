const CustomError = require('./CustomErrorClass')

// Check all the possible exceptions regarding the querry parameters.
function paramsValidator(name, birthYear) {
    if (!name) {
        if (!birthYear) {
            throw new CustomError('Please make sure you enter a birth' +
                ' year and a name', 400);
        } else {
            throw new CustomError('Please make sure you enter a name', 400);
        }
    } else if(!birthYear){
        throw new CustomError('Please make sure you enter a birth year', 400);
    } else if(isInvalidBirthYear(birthYear)){
        throw new CustomError('Please enter a valid Integer birth year', 400);
    } else if(isInvalidName(name.toUpperCase())){
        throw new CustomError('Invalid name, please make sure the name you' +
            ' enter contain only letters and _ for spacing', 400);
    }
}

// Helper function, 
// check if the given birth_year is an Integer and in the right range.
function isInvalidBirthYear(value){
    let isInt = !isNaN(value) && 
        ((x) => { return (x | 0) === x; })(parseFloat(value));
    return !isInt || (value > 2021) || (value < 0);
}

// Helper function, 
// check if the given name contain only letters and _ for spacing.
function isInvalidName(name) {
    for (let i = 0; i < name.length; i++) {
        if ((name.charCodeAt(i) < 65) || ((name.charCodeAt(i) > 90)
            && (name.charCodeAt(i) != 95))){
            return true;
        }
    }
    return false;     
}

module.exports = paramsValidator;