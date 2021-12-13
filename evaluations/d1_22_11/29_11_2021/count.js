function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    var count_0 = 0
    var count_1 = 0;
    var count_2 = 0;
    for(var i=0;i<n;i++){
       if(arr[i]=== 0){
           count_0++;
       }else if(arr[i]=== 1){
           count_1++;
       }
       else if(arr[i]=== 2){
           count_2++;
       }
    }  
    console.log(count_0, count_1, count_2);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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