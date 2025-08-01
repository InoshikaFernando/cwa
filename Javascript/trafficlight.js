let currentlight = 'red';// This can change to 'green' or 'yellow'
function trafficLightFunction(roadScale) {
    // This change when there is a vehicle on the grid. It will take the value of the vehicle weight
    const minimunWeightOfVehicle = 1000; // in kg
    if(roadScale >= minimunWeightOfVehicle) {// Check if there is a vehicle
        currentlight = 'green';
        console.log(currentlight);
        console.log('')
    }
    else {
        if(currentlight == 'green') { //Check if currentlight is 'green'
            currentlight = 'yellow';
            console.log(currentlight);
            console.log('')
        }
        currentlight = 'red';
        console.log(currentlight);
        console.log('')
    }
}

function simulateTheScale() {
    for (let i = 0; i < 20; i++) {
        const scale = Math.floor(Math.random() * 2000); // Simulate a random vehicle weight between 0 and 2000 kg
        trafficLightFunction(scale);
    }
}

simulateTheScale()