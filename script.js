gridContainer = document.querySelector('#gridContainer');

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
}

gridCreator(16)

gridSquares = document.querySelectorAll('.gridSquare')
gridSquares.forEach((square) => {
    square.addEventListener('mousemove', () =>{
        square.classList.add('gridSquareToggle')
    })
})