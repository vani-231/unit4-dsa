function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(var i = 0; i < test; i++) {
        var [n,k] = input[line++].trim().split(" ").map(Number)
        var arr = input[line++].trim().split(" ").map(Number)
        same(n, k, arr)

    }

    
   
  }
  function same(n,k,arr){
      var count = 0;
      for(var i=0;i<n;i++){
          if(arr[i]==k-1){
              count++;

          }
      }
      console.log(count);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    5 3
    2 2 2 2 1`);
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