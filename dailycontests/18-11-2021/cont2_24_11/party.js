function runProgram(input) {
    input = input.trim().split("\n");
    var [n,c,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    arr.sort()
    var flag = 0;
    
    var count = 0;
    var l = 0;
    for(var i=0;i<n;i++){
        count+=arr[i]
        if(count<=k){
            l++;
            flag = 1;
        }
    }
    if(l==c && flag==1){
        console.log("Party");
    }else{
        console.log("Sad");
    }
    console.log(n,c,k,l);
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5 3 24
    6 4 21 20 13`);
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