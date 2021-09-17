const userNameSum = require('./utils/GetUserNameSum');
const reverseUserName = require('./utils/GetReversedUserName');
const paramsValidator = require('./utils/paramsValidator')
const CustomError = require('./utils/CustomErrorClass')
const pickARandomOption = require('./utils/GetRandomOption');
const successfulCalls = require('./utils/GetSuccessfulCallsDistribution');
const express = require('express');
const app = express();

const userNameObj =new userNameSum();
const reverseNameObj = new reverseUserName();

test("Returns 121 for Sun Tzu", () => {
    (userNameObj.surprise('Sun Tzu'.toUpperCase())).then((result) => {
        expect(result).toBe(121);
    })
});

test("Returns nuyaH_lavuY for Yuval_Hayun", () => {
    (reverseNameObj.surprise('Yuval_Hayun')).then((result) => {
        expect(result).toBe('nuyaH_lavuY');
    })
});

test("Throw an error for missing name", () => {
    expect(() => { 
        paramsValidator('' , 2021); 
    }).toThrow(CustomError);
});

test("Throw an error for wrong birth_year format", () => {
    expectedMessage = 'Please enter a valid Integer birth year';
    expect(() => { 
        paramsValidator('user_name' , 21.1); 
    }).toThrow(expectedMessage);
});

test("Throw an error for wrong name format", () => {
    expect(() => { paramsValidator('12_name' , 2011); }).toThrow(CustomError);
});

test("Returns name-sum as the random option for the giveen request", () => {
    let url = '/api/surprise?name=Ali_Baba&birth_year=2005&upsidedown=false';
    app.get(url, (req, res) =>
    expect(pickARandomOption(req)).toBe('name-sum'));
});

test("Returns kanye-quote as the random option for the giveen request", () => {
    let url = '/api/surprise?name=Qu_Qu&birth_year=2003&upsidedown=false';
    app.get(url, (req, res) =>
    expect(pickARandomOption(req)).toBe('kanye-quote'));
});

test("Returns an array without the zero occurrences requests", () => {
    requestsHistory = [{type: 'chuck-norris-joke', count: 0},
    {type: 'kanye-quote', count: 5},
    {type: 'name-sum', count: 0},
    {type: 'reversed-name', count: 0}];
    expectedResult = [{type: 'kanye-quote', count: 5}];
    expect(successfulCalls(requestsHistory)).toStrictEqual(expectedResult);
});