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

//-------------------------------------------------Function Section ------------------------------------------------

//function that changes the colour of a pixel when it is hovered over
function changeColour() {
    this.style.backgroundColor = 'black';
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


