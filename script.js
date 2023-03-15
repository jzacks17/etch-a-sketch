// create a variable of type const called container equal to the container div (document.querySelector)
const container = document.querySelector('.container');

// create a variable of type const called size. This variable will store the dimension of the etch a sketch grid
const size = 16;

// create a variable of type let called row. Do not assign an initial value. This variable will be used to create the row divs. 
let row;

// create a variable of type let called pixel. Do not assign an initial value. This variable will be used to create the pixel divs.
let pixel;

// for loop starting at i = 1, while i is less than or equal to size, incrementing i by one
for (let i = 1; i <= size; i++) {

    //set the value of row to equal a new div element 
    row = document.createElement('div');
    //add the class 'row' to the row div element
    row.classList.add('row');
    //append the row div element to the container div
    container.appendChild(row);

    //for loop starting at j = 1, while j is less than or equal to size, incrementing j by one
    for (let j = 1; j <= size; j++) {

        //set the value of pixel to equal a new div element
        pixel = document.createElement('div');
        //add the class 'pixel' to the row div element
        pixel.classList.add('pixel');
        //append the pixel div element to the current row div
        row.appendChild(pixel);
    }
}



//     for loop starting at j = 1, while j is less than or equal to size, incrementing j by one

//         set the value of pixel to equal a new div element

//         add the class 'pixel' to the row div element

//         append the pixel div element to the current row div
