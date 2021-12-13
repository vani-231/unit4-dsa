function runProgram(input) {
    var str = input.trim().split(" ")
    console.log(str);
    var high = str[0].length
    for(var i=0;i<str.length;i++) {
         
        if(high<str[i].length){
            high = str[i]
        }
    }
    console.log(high);
    
   
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`abcd adcb hlk hlkmn huklm`);
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