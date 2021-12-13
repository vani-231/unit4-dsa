function runProgram(input) {
    input = input.trim().split("\n");
    var str1 = input[0].trim().split("")
    var str2 = input[1].trim().split("")
    var L = 0;
    
    for(var i=0;i<str1.length;i++){
       for(var j=0;j<str2.length;j++){
           if (i == 0 || j == 0) {
                  L[i][j] = 0
           }
           else if( str1[i-1] == str2[j-1]){
                 L[i][j] = L[i-1][j-1]+1
           }
           else{
                 L[i][j] = max(L[i-1][j], L[i][j-1])
           }
            return L[m][n]
       }
       
        
    }
    console.log(count);
   
   
    
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`AEDFHR
    ABCDGH`);
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