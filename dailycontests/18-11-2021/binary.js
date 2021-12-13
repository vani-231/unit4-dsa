function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var [n,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
      console.log (binary(n,arr,k))
   
  }
  function binary(n,arr,k) {
      var low = 0;
      var high = n-1;
      while (low <= high) {
          var mid = Math.floor((low + high) / 2)
          if(arr[mid]==k){
              return 1;
          }
          else if(arr[mid]>k){
              high = mid-1
          }else{
              low = mid+1;
          }
         
      }
      return -1;
  }

  if (process.env.USERNAME === "DELL") {
    runProgram(`6 5
    11 34 5 4 21 0`);
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