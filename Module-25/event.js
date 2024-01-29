// 2nd way
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// 3rd way
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// 4th way 
const greenButton = document.getElementById('green-button');
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green';
}

// 5th way 
const goldenButton = document.getElementById('goldenRod-button');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod(){
    document.body.style.backgroundColor = 'goldenRod';
}

// 6th way 
const blackButton = document.getElementById('black-button');
blackButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black';
})