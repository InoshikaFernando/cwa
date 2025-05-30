function Forloop(count) {
    let line = '';
    for (let i = 0; i < count + 1; i++) {
      //line += '*';
      console.log(i);
    }
  }
  
  function Foreach() {
    const vehical = ["car", "van", "bus", "bike", "train"];
    const array2 = ["car1", "van1", "bus1", "bike1", "train1"];
   /* for (const item of array2) {
      console.log(item);
      console.log("dog");
    }
    */
  }
  
  Forloop(5);