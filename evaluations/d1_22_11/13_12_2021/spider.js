function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number);
    var sum = 0;
    var arr1 = []
    arr1.push(arr[0])
    for(var i = 0; i < arr.length; i++) {
          
              if(i%2==1){
                   arr1.push(arr[i])
              }
    }
    
    for(var i = 0; i < arr1.length; i++) {
         sum += Math.abs(arr1[i]-arr[i+1])
    }
    console.log(sum);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`4
    10 30 40 20`);
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