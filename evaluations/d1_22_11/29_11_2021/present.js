function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);   
    var k = +input[2];
     console.log( present(n,arr,k));
    
  }
  function present(n,arr,k){
    var big = arr[0]
    for(var i=0;i<n;i++){
        if(arr[i]===k){
            return i;
        }else if(arr[i]>k){
            return i;
        }
    }

  }

  if (process.env.USERNAME === "DELL") {
    runProgram(`4
    1 3 5 6
    4 `);
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