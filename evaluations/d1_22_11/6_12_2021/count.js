function runProgram(input) {
    var n = +input
    var res = [];
    res.length = 10;
    res.fill(0);
    res[0] = res[1] = res[2] = 1;
    res[3] = 2;
    for(var i=4;i<=n;i++){
        res[i] = res[i-1]+res[i-3]+res[i-4]
    }
     console.log( res[n])  

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5`);
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