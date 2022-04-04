const el = document.createElement('div');
let htmlToAdd = '<div class="playground">'
let column = Array(10)
let field = Array(10)


for (let i = 0; i < 10; i++) {
    htmlToAdd += '<div class="row">';
    for (let x = 0; x < 10; x++) {
        const id = i * 10 + x;
        htmlToAdd += `<div class="cell" data-row="${i}" data-cell="${x}"></div>`;
    }
    htmlToAdd += '</div>';
}
htmlToAdd += '</div>';
el.innerHTML = htmlToAdd;
document.querySelector('.minesweeper').appendChild(el.firstChild);

for (let i = 0; i < field.length; i++) {
    field[i] = new Array(10);
}
for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < column.length; j++) {
        field[i][j] = false;
    }
}

for(let i= 0; i< 10; i++) {
    getRandomField()
}

function getRandomField(){
    let x = Math.floor(field.length * Math.random())
    let y = Math.floor(field.length * Math.random())
    if(field[x][y] !== undefined){
        field[x][y] = undefined
        const el = document.querySelector(`[data-row="${x}"][data-cell="${y}"]`)
        const parent = document.createElement('div');
        parent.innerHTML = '<img class="bomb" src="bomb.png">';
        el.appendChild(parent.firstChild);
    }
    else{
        getRandomField()
    }
}




console.log(field);
console.log('field', field);
for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < column.length; j++) {
        if(field[i][j] === undefined){
            // console.log(i +"and " + j + " is a bomb!")
        }
    }
}

document.querySelectorAll(".cell")
    .forEach((e) => e.addEventListener("click", () => {
       if(!field[e.getAttribute('data-row') -1] [e.getAttribute('data-cell') -1]){

           field[e.getAttribute('data-row') -1] [e.getAttribute('data-cell') -1] = true


           console.log(
               e.getAttribute('data-row') + "%%" + e.getAttribute('data-cell'
               ))
       }
       else{
           console.log("Feld bereits Aufgedeckt")
       }


    }));

