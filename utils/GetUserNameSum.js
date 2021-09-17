const requiredSuperClass = require('./GetSurpriseSuperClass');

class GetUserNameSum extends requiredSuperClass{
    constructor(index){
        super(index);
    }

    async surprise(name) {
        name = name.toUpperCase();
        var sum = 0;
        // Iterate thru the userName's string.
        // Convert only the letters to numbers and sum it.
        for (let i = 0; i < name.length; i++) {
            if ((name.charCodeAt(i) >= 65) && (name.charCodeAt(i) <= 90)){
                sum += name.charCodeAt(i) - 64;
            }
        }
        return sum;
    }
}


module.exports = GetUserNameSum;