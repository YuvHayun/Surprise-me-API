const successfulCalls = (distribution) => {
    filteredDistribution = [];
    // Iterate thru the requestsHistory, filter calls with zero counter.
    for (let i = 0; i < distribution.length; i++) {
        if (distribution[i].count != 0) {
            filteredDistribution.push(distribution[i]);
        }
    }
    return filteredDistribution;
}


module.exports = successfulCalls;