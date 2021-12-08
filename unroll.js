function unroll(array) {

    let results = [];

    while (array.length > 0) {

        // Get top row 
        results = [...results, array.shift()];

        // Get right column
        results = [...results, array.map(row => row.pop())];

        // Get bottom row in reverse 
        results = [...results, array.pop().reverse()];

        // Get left column in reverse 
        results = [...results, array.map(row => row.shift()).reverse()];
    }
    return results.flat();
}
      

module.exports = unroll;
