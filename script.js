// create a variable of type const called container equal to the container div (document.querySelector)
const container = document.querySelector('.container');

// create a variable of type const called size. This variable will store the dimension of the etch a sketch grid
const size = 64;

// create a variable of type let called row. Do not assign an initial value. This variable will be used to create the row divs. 
let row;

// create a variable of type let called pixel. Do not assign an initial value. This variable will be used to create the pixel divs.
let pixel;

//For loop to create each row of the grid (loop from 1 to size)
for (let i = 1; i <= size; i++) {

    //set the value of row to equal a new div element 
    row = document.createElement('div');
    //add the class 'row' to the row div element
    row.classList.add('row');
    //append the row div element to the container div
    container.appendChild(row);

    //for loop to create each pixel in the row (loop from 1 to size)
    for (let j = 1; j <= size; j++) {

        //set the value of pixel to equal a new div element
        pixel = document.createElement('div');
        //add the class 'pixel' to the row div element
        pixel.classList.add('pixel');
        //append the pixel div element to the current row div
        row.appendChild(pixel);
    }
}

// create a variable of type const called pixels which is equal to all the pixel divs (querySelectorAll)
const pixels = document.querySelectorAll('.pixel');

// add eventlistener for each pixel of pixels. On click, run the function changeColour. 
pixels.forEach(pix => pix.addEventListener('mouseenter', function(){
    this.style.backgroundColor = 'black';
}))

// // add eventlistener for each pixel of pixels. On click, run the function changeColour. 
// pixels.forEach(pix => pix.addEventListener('mouseleave', function(){
//     this.style.backgroundColor = 'white';
// }))

