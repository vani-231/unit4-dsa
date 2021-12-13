function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    var [n,k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)
      console.log (Recursive_binary(arr,k,0,0))
   
  }
   function Recursive_binary(arr,k,low,high) {
       if(low>high){
           return -1
       }else{
           var mid = (low+high) / 2
           if(mid==k){
               return 1
           }else if(k<arr[mid]){
               return Recursive_binary(arr,k,low,mid-1)
           }
            else{
               return Recursive_binary(arr,k,mid+1,high)
           }
        }
       
         

   }


  if (process.env.USERNAME === "DELL") {
    runProgram(`5 0
    2 -2 0 3 4`);
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