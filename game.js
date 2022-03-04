//Creating a 16 by 16 grid using js inside id : grid

/*
var data = [
    [" A","B ","C ","D ","E "],
    [" A","B ","C ","D ","E "],
    [" A","B ","C ","D ","E "],
    [" A","B ","C ","D ","E "],
  
];


let container =document.getElementById("grid");
for (let i of data) { for (let j of i) {
    let cell = document.createElement("div");
    cell.innerHTML = j;
    cell.className = "cell";
    container.appendChild(cell);
  }}
  
*/

//Connecting button to textboxes
let numRow;
let numColumn;

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  //fn1();
  numRow = parseInt(document.getElementById("row").value);
  numColumn = parseInt(document.getElementById("column").value);
  makeGrid();
  disable();
});

//let numRow= parseInt(document.getElementById("row").value);
//let numColumn = parseInt(document.getElementById("column").value);

//LETS BREAK THIS DOWN, WHEN PAGE LOADS IN NUMROW AND NUMCOLUMN DONT HAVE NUMBERS
//ONLY AFTER WE CLICK THE BUTTON DO WE RECIEVE BUTTON INFO
//MAYBE WE SHOULD USE THE CLICK EVENT LISTENER TO INPUT THE NUMS
//LEARN HOW TO GET VALUES USING THE EVENT LISTENER

/*
Confirms Textboxes and Button are connected
function fn1(){
    alert(numRow+numColumn);
}
*/

//Creating function makeGrid


let container = document.getElementById("grid");

//container.style.setProperty('--grid-rows', numRow,);
//container.style.setProperty('--grid-cols', numColumn);

function makeGrid() {

  //container.style.setProperty('--grid-rows', numRow);
  //container.style.setProperty('--grid-cols', numColumn);

  if ((numRow * numColumn) <= 10000) {
    container.style.setProperty('--grid-rows', numRow);
    container.style.setProperty('--grid-cols', numColumn);
    for (c = 0; c < (numRow * numColumn); c++) {
      let cell = document.createElement("div");
      //cell.innerText = (c + 1);
      cell.addEventListener("mouseover",changeColor); //THIS MAKES THE PEN WORK
      container.appendChild(cell).className = "grid-item";
     
    };
  }

  else {
    container.style.setProperty('--grid-rows', 100);
    container.style.setProperty('--grid-cols', 100);
    for (c = 0; c < 10000; c++) {
      let cell = document.createElement("div");
      //cell.innerText = (c + 1);
      cell.addEventListener("mouseover",changeColor);
      container.appendChild(cell).className = "grid-item";
      
    };
  }


  /*
  let gr = new Array(numColumn);

  for(let i= 0; i<gr.length; i++){
      gr[i] = new Array(numRow);
  }



  for (let i of gr) { for (let j of i) {
      let cell = document.createElement("div");
      cell.innerHTML = j;
      cell.className = "cell";
      container.appendChild(cell);
    }}

  */

}


//Creating a clear button so user doesn't to reload page over and over again
const dlt = document.querySelector('#btn2');

const inputs = document.querySelectorAll('input');

const gridCont = document.getElementById('gridcontainer');
const gridItems = document.getElementsByClassName('grid-item');

dlt.addEventListener('click', () => {
  inputs.forEach((input) => {
    input.value = '';
    btn1.removeAttribute('disabled');
  });

});

dlt.addEventListener('click', () => {
  clearGrid();


});


//Disabling Submit Button
function disable() {
  btn1.setAttribute('disabled', 'disabled');
}


//FOR TMM: LEARN HOW TO CLEAR GRID WHEN PRESSING CLEAR BUTTON
//Maybe: Create another grid that is made when the clear button is clicked in order to simulate a new grid

function clearGrid() {
  window.location.reload(true);


}



//Creating the "pen" part of the program
//Might have to use onmouseenter

//let square= document.getElementsByClassName("grid-item");
//Need to foreach the divs to be able to apply the funtion


let square = document.querySelectorAll('.grid-item');

/*
square.forEach((elem) => {
  elem.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'black';
    //colorDiv1();
  });
});


function colorDiv1(){
  div.style.backgroundColor= 'black';

}
*/


//Different Method using callback function e
/*
square.addEventListener('mouseover',function (e){
  e.target.style.backgroundColor ='black';
});

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}
*/

//THIS WORKS!!!!!!!!!!!!!!!!!!!
function changeColor(e) {
  e.target.style.backgroundColor = "black";
}
//Another Method
/*
function changeColor(e) {
  if(e.target.id === 'grid' && e.type === 'click'){
    console.log('yes');
  }

}
*/

//This works in turning the entire screen black
//THis works because gridC is a single div while grid-item is a collection so needs to loop through

/*
const gridC = document.querySelector("#grid");
gridC.addEventListener("mouseover", colorDiv);

function colorDiv() {
  
  gridC.style.backgroundColor="black";
  
}

*/