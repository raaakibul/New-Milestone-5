function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


const grayButton = document.getElementById('make-gray-button');
grayButton.onclick = makeGray;

function makeGray(){
    document.body.style.backgroundColor = 'gray';
}

const blackButton = document.getElementById('make-black-button');
blackButton.onclick = function(){
    document.body.style.backgroundColor ='black';
}

// event listeners for button clicks 

const goldenrodButton = document.getElementById('make-goldenrod-button');
goldenrodButton.addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
});

// function makeGoldenrod(){
//     document.body.style.backgroundColor = 'goldenrod';
// }

function handleJustClickButton(){
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = "lorem10";
}

document.getElementById('direct-button').addEventListener('click', function(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'lorem';
})


document.getElementById('update-button').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const p = document.getElementById('clicking-method');
    p.innerText = nameField.value; 
    nameField.value = '';

    // console.log(nameField.value);
     
})