function runProgram(input) {
    input = input.trim().split("\n");
    var p = +input[0];
    var r = +input[p+1];
    
    var line = 1
    var line1 = p+2
    for(var i=0;i<p;i++){
        var powers = +input[line++]
        console.log(powers);
    }
    for(var i=0;i<r;i++){
        var rounds = +input[line1++]
        console.log(rounds);
    }
   
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
    2`);
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