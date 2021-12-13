function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var arr1 = input[2].trim().split(" ").map(Number)
    var ans = []
    for(var i=0;i<n;i++){
        var sum = Math.abs(arr[i]-arr1[i])
        ans.push(sum)
    }
    var c = 0;
    for(var i=0;i<n;i++){
        c += ans[i]
    }
    console.log(c);
         
   
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`3
    4 -4 2
    4 0 5`);
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

  