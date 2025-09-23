
  let a = readline();
  let b = "";
  for (let i = a.length - 1; i >= 0; i--){
    b = b + a[i]
  }
  
  let answer = 1
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== b[j]) {
      answer = 0
    }
  }
  console.log(answer);
