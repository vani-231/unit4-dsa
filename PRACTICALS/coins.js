function runProgram(input) {
    var input = input.trim().split("\n")
    var line = 0;
    for(var i=0;i<input.length;i++){
        var coin = +input[line++]
        console.log(findExchange(coin));
        
    }

  }
 var done = []
  function findExchange(n) {
    if(done[n]) {
        return done[n];
    }
    let two = Math.floor(n/2);
    let three=Math.floor(n/3);
    let four=Math.floor(n/4);
    exchangeSum = two+three+four;
    if(exchangeSum>n) {
        done[n]=findExchange(two)+findExchange(three)+findExchange(four);
    }else {
        done[n]=n;
    }
    return done[n];
}
  if (process.env.USERNAME === "DELL") {
    runProgram(`12
    2`);
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