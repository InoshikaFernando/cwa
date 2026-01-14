/**
👉 Create an array of your 5 favorite animals.
👉 Use a for loop to print them.
👉 Use a for loop to print them reverse order.
👉 Use a forEach loop to print them.
👉 Which do you like better?
 */

const animals = ['Dog', 'Cat', 'Elephant', 'Giraffe', 'Lion'];

function forloop() {
    for (let i = 0; i < animals.length; i++) {
	console.log(animals[i]);
    } 
}


function forloopReverse() {
    for (let i = animals.length - 1; i >= 0; i--) {
	console.log(animals[i]);
    }
}

function foreach() {
    for (const <> of <>s) {
        console.log(<>)
    }
}

forloop();
forloopReverse();