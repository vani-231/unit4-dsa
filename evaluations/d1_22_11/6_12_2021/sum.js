function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number) 
    
    result(arr,n);
    
  }
  function result(arr,n){
    var res = false;
    for(var i = 0; i < n; i++){
        if(arr[i] == 1){
          res = true 
        }
    }
    if(res==true){
      console.log(arr.indexOf(1));
    }
    else{
      console.log(-1);
    }
    
    
     

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5
    0 0 0 1 1`);
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