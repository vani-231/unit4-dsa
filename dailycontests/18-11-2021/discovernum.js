function runProgram(input) {
    input = input.trim().split("\n")
    var [n,q] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
    arr.sort()
    var line = 2;
    for(var i = 0; i < q; i++) {
        var k = +input[line++]
        //console.log(k);
        console.log(binary(n,k,arr));

    } 
   
  }

  function binary(n,k,arr) {
    var low = 0;
    var high = n-1;
    while(low <= high){
        var mid = Math.floor((low+high)/2)
        if(arr[mid] == k){
            return "YES"
        }else if(arr[mid] > k){
            high = mid - 1
        }else if(arr[mid] < k){
            low = mid + 1
        }
        
        
    }
    return "NO"
      

  }
  if (process.env.USERNAME === "DELL") {
    runProgram(`5 10
    50 40 30 20 10
    10
    20
    30
    40
    50
    60
    70
    80
    90
    100`);
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