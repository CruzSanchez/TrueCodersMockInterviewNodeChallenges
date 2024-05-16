//Challenge 1
//Write a method called GenerateSequence that takes an int named n as parameters and returns an int array containing the numbers from 1 to n.
//Example - int n = 5 your return value would be an array that looks like this [1, 2, 3, 4, 5]
//Always assume n >= 0 if the input is 0, return an empty array
function generateSequence(n: number) {
   
    let sequence = [];
    
    for(let i = 1; i <= n; i++){
        sequence.push(i);
    }

    return sequence;
}

module.exports = generateSequence;