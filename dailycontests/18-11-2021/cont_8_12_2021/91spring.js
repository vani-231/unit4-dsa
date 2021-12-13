function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0]
    var line = 1;
    for(var i=0;i<test;i++){
    var [row,col] = input[line++].trim().split(" ").map(Number);
    console.log(row,col);
    var mat = []
    for(var j=0;j<row;j++){
        mat.push(input[line++].trim().split(" ").map(Number))
    }
    console.log(count(row,col,mat));
    }   
  }
  function count(row,col,mat){
      var res = mat[0]
      
      for(var i=0;i<row;i++){
          var temp = []
          for(var j=0;j<col;j++){
              if(j==0){
                  
                  temp.push(mat[i][j] + Math.max(res[j],res[1]))
                 
              }else if(j==col-1){
                  temp.push(mat[i][j] + Math.max(res[j],res[j-1]))
              }
              else if(j==col-1){
                temp.push(mat[i][j] + Math.max(res[j],res[j-1],res[j+1]))
            }
            res = temp
          }
          
      }
      return Math.max(res)
  }



  if (process.env.USERNAME === "DELL") {
    runProgram(`2
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1`);
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