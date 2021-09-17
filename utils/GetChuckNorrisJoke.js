const requiredSuperClass = require('./GetSurpriseSuperClass');
const CustomError = require('./CustomErrorClass')
const axios = require('axios');

class GetChuckNorrisJoke extends requiredSuperClass{
    constructor(index){
        super(index);
    }

    async surprise(name){
        try {
            const response =
                await axios.get('https://api.chucknorris.io/jokes/random');
            return response.data.value;
        } catch (err) {
            throw new CustomError('Cant reach the site,' +
            ' please make sure you are connected to the internet', 500);
        }
    }
}


module.exports = GetChuckNorrisJoke;