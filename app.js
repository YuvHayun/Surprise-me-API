const express = require('express');
const fs = require('fs');
const app = express();
const chuckNorrisJoke = require('./utils/GetChuckNorrisJoke');
const kanyeWestQuote = require('./utils/GetKanyeWestQuote');
const userNameSum = require('./utils/GetUserNameSum');
const reverseUserName = require('./utils/GetReversedUserName');
const successfulCalls = require('./utils/GetSuccessfulCallsDistribution');
const pickARandomOption = require('./utils/GetRandomOption');
const paramsValidator = require('./utils/paramsValidator');
const eSurprisesTypes = require('./utils/eSurprisesTypes');

let requestsHistory = [];

// Try to load the requests history from requestsHistory.json file
// If failed, will initiate a requestsHistory array.
try {
    const dataBuffer = fs.readFileSync('requestsHistory.json');
    const dataJSON = dataBuffer.toString();
    requestsHistory =  JSON.parse(dataJSON);
} catch (e) {
    requestsHistory = [{type: 'chuck-norris-joke', count: 0},
    {type: 'kanye-quote', count: 0},
    {type: 'name-sum', count: 0},
    {type: 'reversed-name', count: 0}];
}   

// initializing types to contain suprises objects
const types = {
	[eSurprisesTypes.CHUCK_NORIS] : new chuckNorrisJoke(0),
	[eSurprisesTypes.KANYE_WEST] : new kanyeWestQuote(1),
	[eSurprisesTypes.NAME_SUM] : new userNameSum(2),
    [eSurprisesTypes.REVERSE_NAME] : new reverseUserName(3)
};

// The surprise endpoint handler.
app.get('/api/surprise', (req, res) => {
    try{
        // Validate query contain name and birth_year and validate their format.
        paramsValidator(req.query.name, req.query.birth_year);
        // Draw random option from the possible options according to the Input.
        let chosenOperationStr = pickARandomOption(req);
        (types[chosenOperationStr].surprise(req.query.name)).then((result) => {
            // If the call for the surprise worked,
            // will return the formatted output, update the requests history
            // and save the requests history for backup.
            res.json(formatOutput(chosenOperationStr, result));
            requestsHistory[(types[chosenOperationStr]).index].count++;
            fs.writeFileSync('requestsHistory.json', 
                JSON.stringify(requestsHistory));
        }).catch(error => {
            res.status(error.errorNumber).json(error.message);
        })
    } catch(error){
        res.status(error.errorNumber).json(error.message);
    }
})

// The stats endpoint handler.
app.get('/api/stats', (req, res) => {
    // Sum the total requests history
    successfulCallsSum = requestsHistory[0].count + requestsHistory[1].count
    + requestsHistory[2].count + requestsHistory[3].count;
    res.json({"requestsHistory": successfulCallsSum,
    "distribution": successfulCalls(requestsHistory)})
})

// Helper function, formatting the output.
function formatOutput(type, result){
    return { "type": type, "result": result};
}

module.exports = app;