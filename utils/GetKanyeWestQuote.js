const requiredSuperClass = require('./GetSurpriseSuperClass');
const CustomError = require('./CustomErrorClass')
const axios = require('axios');

class GetKanyeWestQuote extends requiredSuperClass{
    constructor(index){
        super(index);
    }

    async surprise(name){
        try {
            const response = await axios.get('https://api.kanye.rest/')
            return response.data.quote;
        } catch (err) {
            throw new CustomError('Cant reach the site,' +
            ' please make sure you are connected to the internet', 500);
        }
    }
}


module.exports = GetKanyeWestQuote;