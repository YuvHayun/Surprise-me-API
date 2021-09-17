const requiredSuperClass = require('./GetSurpriseSuperClass');

class GetReversedUserName extends requiredSuperClass{
    constructor(index){
        super(index);
    }

    async surprise(name) { 
        return name.split("").reverse().join("");
    }
}


module.exports = GetReversedUserName;