/*
Find the number of ways that a given integer, , can be expressed as the sum of the  powers of unique, natural numbers.

If X = 10 and N = 2, we need to find the number of ways that 10 can be represented as the sum of squares of unique numbers.

10 = 1^2 + 3^2

This is the only way in which  can be expressed as the sum of unique squares.
*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function powerSum(value, power, num) {
    if(Math.pow(num, power) < value){
        return powerSum(value, power, num + 1) + powerSum(value-Math.pow(num, power), power, num+1);
    }else if(Math.pow(num, power) == value){
        return 1;
    }else{
        return 0;
    }
    // Complete this function
}

function main() {
    var X = parseInt(readLine());
    var N = parseInt(readLine());
    var result = powerSum(X, N, 1);
    process.stdout.write("" + result + "\n");

}
