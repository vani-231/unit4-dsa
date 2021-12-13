function runProgram(input) {
    var n = +input
   console.log(countWays(n));
  }
  function countWays(n)
{
    var count = [];
    count.length = 10;
    count.fill(0);
 
    
    count[0] = count[1] = count[2] = 1;
    count[3] = 2;
 
    
    for(var i = 4; i <= n; i++)
        count[i] = count[i - 1] + count[i - 3] +
                count[i - 4];
 
    return count[n];
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