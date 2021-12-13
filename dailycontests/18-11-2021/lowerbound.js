function runProgram(input) {
    input = input.trim().split("\n");
    var [n,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
     console.log(lowerbound(arr,n,k));
   
  }
  function lowerbound(arr,n,k){
    var low = 0;
    var high = n-1
    var ans = -1;
    while(low <= high){
        var mid = low + Math.floor((high - low) / 2);
        if (arr[mid] == k){
            ans = mid;
            high = mid - 1;
        }else if(arr[mid] > k){
            high = mid - 1;
        }else{
            low = mid + 1
        }

        
    }
    return ans
  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5 2
    1 1 2 2 5`);
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