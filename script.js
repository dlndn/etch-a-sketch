function createGrid() {
    let container = document.querySelector('#container');
    let pixels = parseInt(prompt("Please enter a number of the pixel length of the square sketchpad. (Min: 1, Max: 100)"));

    if (isNaN(pixels) || pixels === null 
        || 1 > pixels || pixels > 100) {
        alert("Invalid input entered. Please enter a number between 1 and 100.");
        return;
    }

    for (let i=0; i<pixels; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
    
        for (let j=0; j<pixels; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener('mouseover', () =>  column.style.backgroundColor =  'black');
    
            row.appendChild(column);
        }
    
        container.appendChild(row);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createRainbowGrid() {
    let container = document.querySelector('#container');
    let pixels = parseInt(prompt("Please enter a number of the pixel length of the square sketchpad. (Min: 1, Max: 100)"));

    if (isNaN(pixels) || pixels === null 
        || 1 > pixels || pixels > 100) {
        alert("Invalid input entered. Please enter a number between 1 and 100.");
        return;
    }

    for (let i=0; i<pixels; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
    
        for (let j=0; j<pixels; j++) {
            let column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener('mouseover', () =>  {
                var randomColor = getRandomColor();
                column.style.backgroundColor =  randomColor;
        });
    
            row.appendChild(column);
        }
    
        container.appendChild(row);
    }
}