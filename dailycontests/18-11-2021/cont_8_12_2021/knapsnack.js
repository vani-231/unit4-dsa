function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0]
    var line = 1;
    var res = []
    for(var i=0;i<input.length-1;i++) {
        var [w,v]= input[line++].trim().split(" ").map(Number)
        //console.log(w,v);
        res.push(v)
        
    }
    
    var max1 = Math.max(...res)
    for( var i = 0; i < res.length; i++){ 
    
        if ( res[i] === max1) { 
    
            res.splice(i, 1); 
        }
    
    }  
    var max2 = Math.max(...res)
    console.log(max2+max1);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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