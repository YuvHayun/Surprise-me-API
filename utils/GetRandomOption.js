const eSurprisesTypes = require('./eSurprisesTypes');

function pickARandomOption(req){
    let Options = createOptionsArray(req);
    let chosenOption = Math.floor(Math.random() * Options.length);
    return Options[chosenOption];
}

function createOptionsArray(req){
    let optionsArray = [];
    // Checks if one of the options can be reverse-name.
    if ((req.query.upsidedown) && (req.query.upsidedown === 'true')) {
        optionsArray.push(eSurprisesTypes.REVERSE_NAME);
    }
    // Checks if one of the options can be name-sum.
    if (!req.query.name.startsWith('Q')) {
        optionsArray.push(eSurprisesTypes.NAME_SUM);
    }
    // Checks if one of the options can be check-norris-joke.
    if (req.query.birth_year < 2000){
        optionsArray.push(eSurprisesTypes.CHUCK_NORIS);
    }
    // Checks if one of the options can be kanye-quote.
    else if (req.query.birth_year > 2000 && !req.query.name.startsWith('A') && !req.query.name.startsWith('Z')) {
        optionsArray.push(eSurprisesTypes.KANYE_WEST);
    }
    return optionsArray;
}
module.exports = pickARandomOption;