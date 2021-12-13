function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(var i = 0; i < test; i++) {
        var str = input[line++].trim().split("");
        count(str)

    }

   
  }
   function count(str){
       var count = 0;
       for(var i = 0; i < str.length; i++){
           if(str[i]!=str[i-1]){
                count++;
           }
       }
       console.log(count);
   }

  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    aaaaa
    abbbaaz`);
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