function runProgram(input) {
    input = input.trim().split("\n");
    var [n,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
     console.log(upperbound(arr,n,k));
   
  }
  function upperbound(arr,n,k) {
    var i = -1;
    var low = 1;
    var high = n;
    
    while(low < high){
        mid = low + Math.floor(( high + low )/2)
        if( arr[mid] <= k) {   
            low = mid + 1
        }else{
            i = mid
            high = mid - 1
        }
    }
    return i
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`10 4
    0 2 4 4 5 5 7 7 9 10`);
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