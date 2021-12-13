function runProgram(input) {
    var str = input.trim().split("")
    var obj = {}
    for(var i=0;i<str.length;i++) {
        obj[str[i]] = i;
    }
    var arr = []
    for(var key in obj) {
        arr.push(key)
    }
    if(arr.length==str.length) {
        console.log("Unique");
    }else{
        console.log("No");
    }
   
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`masai`);
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