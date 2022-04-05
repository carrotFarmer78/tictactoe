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
    getBomb()
}

function getBomb(){
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
        getBomb()
    }
}

console.log('field' + field)


    // for (let i = 0; i < field.length; i++) {
    //     for (let j = 0; j < column.length; j++) {
    //         if(field[i][j] === undefined){
    //             // console.log(i +"and " + j + " is a bomb!")
    //         }
    //     }
    // }


document.querySelectorAll(".cell")
    .forEach((e) => e.addEventListener("click", () => {
       if(!field[e.getAttribute('data-row') -1] [e.getAttribute('data-cell') -1]){

           getBombCount(e.getAttribute('data-row'),e.getAttribute('data-cell'))



           field[e.getAttribute('data-row') -1] [e.getAttribute('data-cell') -1] = true


           console.log(
               e.getAttribute('data-row') + "%%" + e.getAttribute('data-cell'
               ))
       }
       else{
           console.log("Feld bereits Aufgedeckt")
       }


    }));



function getBombCount(x, y) {
    console.log(x, y)
    x = Number(x)
    y = Number(y)
    let bombCounter = 0

//LEFT
    if (y !== 0) {
        //Top Left
        if (typeof (field[x - 1] [y - 1]) === 'undefined') {
            bombCounter +=1
        }
        console.log("left g")
        //Middle Left
        if (typeof (field[x] [y - 1]) === 'undefined') {
            bombCounter +=1
        }
        console.log("midLeft g")
        //Bottom Left
        if (typeof (field[x + 1] [y - 1]) === 'undefined') {
            bombCounter +=1
        }
        console.log("botLeft g")
    }
//RIGHT
    if(y !== field.length -1) {
        //Top Right
        if (typeof (field[x - 1] [y + 1]) === 'undefined') {
            bombCounter +=1
        }
        console.log("topRight g")
        //Middle Right
        if (typeof (field[x] [y + 1]) === 'undefined') {
            bombCounter +=1
        }
        console.log("midRIght g")

        //Bottom Right
        if (typeof (field[x + 1] [y + 1]) === 'undefined') {
            bombCounter +=1
        }
        console.log("botRight g")
    }
//TOP MIDDLE
    if(x !== 0) {
        //Top Middle
        if (typeof (field[x - 1] [y]) === 'undefined') {
            bombCounter +=1
        }
        console.log("top mid g")
    }

//BOTTOM MIDDLE
    if(x !== field.length-1) {

        //Bottom Middle
        if (typeof (field[x + 1] [y]) === 'undefined') {
            bombCounter +=1
        }
        console.log("bot Mid g")
    }
    document.querySelector(`[data-row="${x}"][data-cell="${y}"]`).append(document.createTextNode(bombCounter))

    if(bombCounter === 0) {

        if (y !== 0) {
            //Top Left
            getBombCount(x - 1, y - 1)
            //Middle Left
            getBombCount(x, y - 1)
            //Bottom Left
            getBombCount(x + 1, y - 1)
        }

        if(x !== 0) {
            //Top Middle
            getBombCount(x - 1, y)
        }

        if(x !== field.length-1) {
            //Bottom Middle
            getBombCount(x + 1, y)
        }

        if(y !== field.length -1) {
            //Top Right
            getBombCount(x - 1, y + 1)
            //Middle Right
            getBombCount(x, y + 1)
            //Bottom Right
            getBombCount(x + 1, y + 1)
        }
    }
return bombCounter
}




