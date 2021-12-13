function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr1 = input[1].trim().split(" ").map(Number)
    var arr2 = input[2].trim().split(" ").map(Number)
     console.log("Not Possible");
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    1 3 5
    2 6 8`);
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