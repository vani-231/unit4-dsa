function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    var test = +input[0];
    var line =1 
    for(var i=0;i<test;i++){
    var [n,m] = input[line++].trim().split(" ").map(Number)
    var arr1 = input[line++].trim().split(" ").map(Number)
    var arr2 = input[line++].trim().split(" ").map(Number)
    //console.log(n,m);
    if(n<=m){
       console.log("YES");
    }else{
        console.log("NO");
    }

    }
   
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    4 5
    2 5 6 8
    3 8 5 1 7`);
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