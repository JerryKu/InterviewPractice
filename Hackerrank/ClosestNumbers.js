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

function closestNumbers(arr) {
    // Complete this function
    arr = arr.sort((a,b)=>{
        return a-b;
    });
    let min = Number.MAX_VALUE;
    let res = [];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] - arr[i-1] <= min){
            min = arr[i] - arr[i-1];
        }
    }
    for(let i = 1; i < arr.length; i++){
        if(arr[i] - arr[i-1] == min){
            res.push(arr[i-1]);
            res.push(arr[i]);
        }
    }
    return res;
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var result = closestNumbers(arr);
    console.log(result.join(" "));



}
