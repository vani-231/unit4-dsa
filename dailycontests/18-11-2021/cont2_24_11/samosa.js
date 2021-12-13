function runProgram(input) {
    input = input.trim().split("\n");
    var [n,sum] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    arr.sort()
    var flag = 0;
    
    var count = 0;
    var l = 0;
    for(var i=0;i<n;i++){
        count+=arr[i]
        if(count<=sum){
            l++;
            flag = 1;
        }
    }
    if(flag==1){
        console.log(l);
    }else{
        console.log(0);
    }
    
   
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`4 10
    5 4 2 4`);
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