function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var sum = +input[2]   
    if (isSubarrSum(arr, n, sum) == true)
        console.log("yes");
  else
      console.log("no");
  }
  function isSubarrSum(arr, n, sum)
  {
      
      if (sum == 0)
          return true;
      if (n == 0)
          return false;

      if (arr[n - 1] > sum)
          return isSubarrSum(arr, n - 1, sum);

      
      return isSubarrSum(arr, n - 1, sum)
        || isSubarrSum(arr, n - 1, sum - arr[n - 1]);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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



