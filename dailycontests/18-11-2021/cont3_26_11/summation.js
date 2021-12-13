function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    arr.sort(function(a, b){return a-b});  
    var sum = 0;
    for(var i=0;i<n;i++){
         sum += i*arr[i]
    }
    console.log(sum);
  }
  
  if (process.env.USERNAME === "DELL") {
    runProgram(`10
    0 9 22 20 19 20 11 5 0 2`);
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