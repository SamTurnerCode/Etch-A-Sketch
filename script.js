// Initial Selectors
gridContainer = document.querySelector('#gridContainer');
promptButton = document.querySelector('button')

// Initial Event Listener
promptButton.addEventListener('click', promptGridCreator)

// Functions 
function gridSquareCreator(row) {
    let gridSquare = document.createElement('div');
    gridSquare.setAttribute('class','gridSquare');
    row.appendChild(gridSquare);
}

function gridRowCreator(x){
    for (let i = 0; i < x; i++){
        let gridRow = document.createElement('div');
        gridRow.setAttribute('class','gridRow');
        gridContainer.appendChild(gridRow)
    }
}

function gridCreator(x) {
    gridRowCreator(x)
    gridRows = document.querySelectorAll('.gridRow')
    gridRows.forEach((row) => {
        for (let i = 0; i < x; i++){
            gridSquareCreator(row)
        }
    })
    attachGridListener()
}

function gridEmpty() {
    gridRows = document.querySelectorAll('.gridRow')
    gridRows.forEach((row) => {
        gridContainer.removeChild(row)
    })
}

function promptGridCreator(){
    let gridBase = prompt("Enter the base to build the grid")
    
    if (gridBase > 100){
        alert("Please enter a value under 100")
        return
    }
    gridEmpty()
    gridCreator(gridBase)
    
    
}

function attachGridListener() {
    gridSquares = document.querySelectorAll('.gridSquare')
    gridSquares.forEach((square) => {
        square.addEventListener('mousemove', () =>{
            square.classList.add('gridSquareToggle')
        })
    })
}

// Initial Run

gridCreator(16)




