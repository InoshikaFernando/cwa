/*
Create a function PrintNumbers with the parameter MaxValue, 
so that if you call the function with 5 as MaxValue, it should display the following:
1, 2, 3, 4, 5
*/
function PrintNumbers(MaxValue) {
    let line = '';
    for (let i = 1; i <= MaxValue; i++) {
        line = line + i + (i < MaxValue ? ', ' : '');
    }
    console.log(line);// 1, 2, 3, 4, 5
}

PrintNumbers(5);


/*
create a function call squareFunction, with a parameter count.
So that if you call the function with 2 as count, it should display 4 as follows:
**
**
*/
function squareFunction(count) {
    for (let i = 0; i < count; i++) {
          
    }

}

squareFunction(2);

