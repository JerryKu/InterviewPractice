/*
Given an integer, we need to find the super digit of the integer.

We define super digit of an integer x using the following rules:

If x has only 1 digit, then its super digit is x.
Otherwise, the super digit of x is equal to the super digit of the digit-sum of x. Here, digit-sum of a number is defined as the sum of its digits.
For example, super digit of 9875 will be calculated as:

super_digit(9875) = super_digit(9+8+7+5)
                  = super_digit(29)
                  = super_digit(2+9)
                  = super_digit(11)
                  = super_digit(1+1)
                  = super_digit(2)
                  = 2.

You are given two numbers n and k. You have to calculate the super digit of p.

p is created when number n is concatenated k times. That is, if n=123 and k=3, then p = 123123123.
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
function rep(p){
    let result = 0;
    for(let i = 0; i < p.length;i++){
        result += parseInt(p[i]);
    }
    return result;
}

function digitSum(p) {
    if(p.length == 1) return p;

    return digitSum(rep(p)+"");
    // Complete this function
}

function main() {
    var n_temp = readLine().split(' ');
    var n = n_temp[0];
    var k = parseInt(n_temp[1]);
    let p = parseInt(digitSum(n))*k;

    var result = digitSum(p+"");
    process.stdout.write("" + result + "\n");

}
