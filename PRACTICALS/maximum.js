function runProgram(input) {
    input = input.trim().split("\n")
    var n = +input[0] 
    var arr = input[1].trim().split(" ").map(Number)
    console.log(lis(arr, n));
      
  }

  var  max_ref; 
    function  _lis(arr,n)
    {
        
        if (n == 1)
            return 1;
         
        
        var res, max_ending_here = 1;
       
        for (var i = 1; i < n; i++)
        {
            res = _lis(arr, i);
            if (arr[i-1] < arr[n-1] && res + 1 > max_ending_here)
                max_ending_here = res + 1;
        }
        
        if (max_ref < max_ending_here)
            max_ref = max_ending_here;
         
        
        return max_ending_here;
    }
     
    
    function  lis(arr,n)
    {
        
        max_ref = 1;
         
        
        _lis( arr, n);
         
       
        return max_ref;
    }
  if (process.env.USERNAME === "DELL") {
    runProgram(`9
    10 22 9 33 21 50 41 60 80`);
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