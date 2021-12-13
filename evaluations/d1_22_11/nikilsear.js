function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0]
    var q = +input[2];
    var line = 3;

    for(var i=0;i<q;i++){
        var arr = input[1].trim().split(" ").map(Number);
        var [q1,q2] = input[line++].trim().split(" ").map(Number);
        nikil(q1,q2,arr)
    }
    
  }
  function nikil(q1,q2,arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]>q2){
            console.log(arr[i]);
        }else if(arr[i]>q2){
              console.log(arr[i]);
        }
        else{
            console.log(0);
        }
    }
  }
   

  if (process.env.USERNAME === "DELL") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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