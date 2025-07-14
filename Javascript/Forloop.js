function Forloop(count) {
  //let line = '';
  for (let i = 0; i < count + 1; i++) {
    let line = '*';
    console.log(line);
  }
}
//Forloop(5);

function Forloop3(count) {
  let line = '';
  for (let i = 0; i < count + 1; i++) {
    line = line + '*';
  }
  console.log(line);
}
// Forloop3(5);

function forloop4(count) {
  let line = '';
  for (let i = 0; i < count + 1; i++) {
    line = line + '*';
    console.log(line);
  }
}

//forloop4(5);
/*
This function will output:

*/
function Foreach() {
  const array2 = ["car1", "van1", "bus1", "bike1", "train1"];
  for (const item of array2) {
    console.log(item);
  }
}
Foreach();

//Forloop(5);

/**
 * write a function to print 1 - 5 as follows, using for loop
 1
 2
 3
 4
 5
 for (let i = 1; i <= count; i++) {
  
  }
  console.log(x);
 */
function ForloopNumbers(count) {
  for (let i = 1; i <= count; i++) {
    console.log(i);
  }
}

/**
 * write a function to print 1 - 5 as follows, using for loop
 4
 5
 6
 7
 8
 for (let i = 1; i <= count; i++) {
  
  }
  console.log(x);
 */
  function ForloopNumbers2(count) {
    for (let i = 1; i <= count; i++) {
      console.log(i+3);
    }
  }

  /**
 * write a function to print 1 - 5 as follows, using for loop
 4
 5
 6
 7
 8
 for (let i = 1; i <= count; i++) {
  
  }
  console.log(x);
 */
  function ForloopNumbers2(count) {
    for (let i = 1; i <= count; i++) {
      console.log(i);
    }
  }

  

//ForloopNumbers2(8);
