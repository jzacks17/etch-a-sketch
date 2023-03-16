//------------------------------------------ Variable Declaration Section ----------------------------------------------

// create a variable of type const called container equal to the container div (document.querySelector)
const container = document.querySelector('.container');

// create a variable of type let called size. This variable will store the dimension of the etch a sketch grid
let size = 32;

// create a variable of type let called row. Do not assign an initial value. This variable will be used to create the row divs. 
let row;

// create a variable of type let called pixel. Do not assign an initial value. This variable will be used to create the pixel divs.
let pixel;

// create a variable of type let called pixels which is equal to all the pixel divs. Do not assign an initial value, assigned on grid creation.
let pixels;

// create a variable of type const called slider. Assign an initial value of the slider element 
const slider = document.querySelector('.slider');

//create a variable of type const called clear. Assign a value of the clear button
const button = document.getElementById("clear");

//create a variable of type const called rainbow. Assign a value of the rainbow mode switch
const rainbow = document.getElementById("rainbowMode");

//create a variable of type let called rainbowMode. Assign an initial value of 'off'. Used to check if rainbow mode is on or off
let rainbowMode = 'off';


// ----------------------------------------------- Create Grid section------------------------------------------------------

//Create the default grid by calling createGrid and passing it the initial value for size
createGrid(size);


//On input for slider:
slider.oninput = function () {
    
    //set size equal to the slider value
    size = slider.value;

    //set the dimensions inner text to be the size
    document.querySelector('.dimension').innerText = `${size} × ${size}`;

    //call createGrid function to re-size the grid
    createGrid(size);
}

//add event listener to clear button
button.addEventListener('click', function(){    
    //change background colour to white for all pixels
    pixels.forEach(pixel => pixel.style.backgroundColor = 'white');
})


//add event listener to rainbow switch. On click switch variable to on/off
rainbow.addEventListener('click', function(e){
    if(rainbowMode == 'off'){
        rainbowMode = 'on';
        return;
    }
    else{
        rainbowMode ='off';
        return;
    }
})

//-------------------------------------------------Function Section ------------------------------------------------

//function that changes the colour of a pixel when it is hovered over
function changeColour() {

    //check to see if rainbow mode is selected
    if(rainbowMode == 'on'){

        //if rainbow mode is selected call a random function three times to generate rgb colour
        this.style.backgroundColor = `rgb(${random(100, 255)}, ${random(100, 255)}, ${random(100, 255)})`

    }
    
    //If not selected, set the colour to the colour picker 
    else{
        this.style.backgroundColor = document.getElementById("colourpicker").value;
    }
    
}

function createGrid(n) {

    //remove all children of container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //For loop to create each row of the grid (loop from 1 to size)
    for (let i = 1; i <= n; i++) {

        //set the value of row to equal a new div element 
        row = document.createElement('div');
        //add the class 'row' to the row div element
        row.classList.add('row');
        //append the row div element to the container div
        container.appendChild(row);

        //for loop to create each pixel in the row (loop from 1 to size)
        for (let j = 1; j <= n; j++) {

            //set the value of pixel to equal a new div element
            pixel = document.createElement('div');
            //add the class 'pixel' to the row div element
            pixel.classList.add('pixel');
            //append the pixel div element to the current row div
            row.appendChild(pixel);
        }
    }

    //set value of pixels to all the pixels
    pixels = document.querySelectorAll('.pixel');
    
    // add eventlistener for each pixel of pixels. On hover, run the changeColour function
    pixels.forEach(pixel => pixel.addEventListener('mouseover', changeColour));
}


//Function that generates a random number between the low and high parameters
function random(low = 0, high) {
    return low + Math.round(Math.random() * (high - low));
}