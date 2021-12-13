function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
        var n = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number) 
        
       max(arr)
    }
}
function max(arr)
    {
        var sum, smallest, arr_size = arr.length;
        sum = 0;
        smallest = arr[0];
        for (i = 0; i < arr_size; i++)
        {
         
            
            if (arr[i] < smallest)
                smallest = arr[i];
            sum += arr[i];
        }
 
        var minOperation = sum - arr_size * smallest;
 
        console.log(minOperation);
 
    }
 
  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    3
    2 3 1
    5
    1 6 7 1 5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }