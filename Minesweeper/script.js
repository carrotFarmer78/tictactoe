const el = document.createElement('div');
let htmlToAdd = '<div class="playground">'
let column = Array(10)
let field = Array(10)
let zuBearbeiten = Array()
let nulls = Array()

for (let i = 0; i < 10; i++) {
    htmlToAdd += '<div class="row">';
    for (let x = 0; x < 10; x++) {
        const id = i * 10 + x;
        htmlToAdd += `<div class="cell hidden" data-row="${i}" data-cell="${x}"></div>`;
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
for (let i = 0; i < 10; i++) {
    getBomb()
}

function getBomb() {
    let x = Math.floor(field.length * Math.random())
    let y = Math.floor(field.length * Math.random())
    if (field[x][y] !== undefined) {
        field[x][y] = undefined
        // const el = document.querySelector(`[data-row="${x}"][data-cell="${y}"]`)
        // const parent = document.createElement('div');
        // parent.innerHTML = '<img class="bomb" src="bomb.png">';
        // el.appendChild(parent.firstChild);
    } else {
        getBomb()
    }
}
getSetBomb(0,0)

function getSetBomb(x,y){
    field[x][y] = undefined


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

    if(field[e.getAttribute('data-row')] [e.getAttribute('data-cell')] === undefined) {

        console.log("Bombe getroffen")

        showAllBombs()

    }
    else {if (!field[e.getAttribute('data-row')] [e.getAttribute('data-cell')]) {

            showField(e.getAttribute('data-row'), e.getAttribute('data-cell'))


            field[e.getAttribute('data-row')] [e.getAttribute('data-cell')] = true


            console.log(
                e.getAttribute('data-row') + "%%" + e.getAttribute('data-cell'
                ))
        } else {
            console.log("Feld bereits Aufgedeckt")
        }


    }}));


function showAllBombs(){
    for(let x = 0; x > 10; x++){

        for(let y = 0; y >10; y++){

            if(field[x][y] === undefined){

                const el = document.querySelector(`[data-row="${x}"][data-cell="${y}"]`)
                const parent = document.createElement('div');
                parent.innerHTML = '<img class="bomb" src="bomb.png">';
                el.appendChild(parent.firstChild);


            }


        }


    }


}




function showField(x, y) {
    getNeighboursBombCount(x,y)
}


function getNeighboursBombCount(x, y) {
    x = Number(x)
    y = Number(y)
    let bombCounter = 0



    if (y !== 0) {

        if (x !== 0) {
            if (field[x - 1][y - 1] !== true) {
                //Top Left
                if (typeof (field[x - 1] [y - 1]) === 'undefined' && field[x - 1][y - 1] !== true) {
                    bombCounter += 1
                }
                console.log("left g")
            }
        }


        if (y !== 0) {
            if (field[x][y - 1] !== true) {
                //Middle Left
                if (typeof (field[x] [y - 1]) === 'undefined' && field[x][y - 1] !== true) {
                    bombCounter += 1
                }
                console.log("midLeft g")
            }
        }


        if (x !== field.length - 1) {
            if (field[x + 1][y - 1] !== true) {
                //Bottom Left
                if (typeof (field[x + 1] [y - 1]) === 'undefined' && field[x + 1][y - 1] !== true) {
                    bombCounter += 1
                }
                console.log("botLeft g")
            }
        }
    }
//RIGHT
    if (y !== field.length - 1) {


        if (x !== 0) {
            if (field[x - 1][y + 1] !== true) {
                //Top Right}}
                if (typeof (field[x - 1] [y + 1]) === 'undefined' && field[x - 1][y + 1] !== true) {
                    bombCounter += 1
                }
                console.log("topRight g")
            }
        }


        if (y !== field.length - 1) {
            if (field[x][y + 1] !== true) {

                //Middle Right
                if (typeof (field[x] [y + 1]) === 'undefined' && field[x][y + 1] !== true) {
                    bombCounter += 1
                }
                console.log("midRIght g")
            }
        }


        if (x !== field.length - 1) {
            if (field[x + 1][y + 1] !== true) {

                //Bottom Right
                if (typeof (field[x + 1] [y + 1]) === 'undefined' && field[x + 1][y + 1] !== true) {
                    bombCounter += 1
                }
                console.log("botRight g")
            }
        }
    }

//TOP MIDDLE
    if (x !== 0) {

        if (field[x - 1][y] !== true) {
            //Top Middl}}
            //
            // e
            if (typeof (field[x - 1] [y]) === 'undefined' && field[x - 1][y] !== true) {
                bombCounter += 1
            }
        }
        console.log("top mid g")
    }


//BOTTOM MIDDLE
    if (x < field.length - 1) {

        if (field[x + 1][y] !== true) {
            //Bottom Middle
            if (typeof (field[x + 1] [y]) === 'undefined' && field[x + 1][y] !== true) {
                bombCounter += 1
            }
            console.log("bot Mid g")
        }
    }


    if (field[x] [y] === false) {
        document.querySelector(`[data-row="${x}"][data-cell="${y}"]`).append(document.createTextNode(bombCounter))
        document.querySelector(`[data-row="${x}"][data-cell="${y}"]`).classList.remove('hidden')
    }

    field[x][y] = true
    if (bombCounter === 0) {
        if (y !== 0 && x !== 0) {
            if (field[x - 1] [y - 1] !== true) {
                getNeighboursBombCount(x - 1, y - 1) //Top Left
            }
        }

        if (x !== 0 && x !== 0) {
            if (field[x - 1][y] !== true) {
                getNeighboursBombCount(x - 1, y) //Top Mid
            }
        }
        if (y !== field.length - 1 && x !== 0) {
            if (field[x - 1] [y + 1] !== true) {
                getNeighboursBombCount(x - 1, y + 1)//Top Right
            }
        }
        if (y !== 0) {
            if (field[x] [y - 1] !== true) {
                getNeighboursBombCount(x, y - 1)//Middle Left
            }
        }
        if (y !== field.length - 1) {
            if (field[x] [y + 1] !== true) {
                getNeighboursBombCount(x, y + 1)//Middle Right
            }
        }
        if (y !== 0 && x !== field.length - 1) {
            if (field[x + 1] [y - 1] !== true) {
                getNeighboursBombCount(x + 1, y - 1)//Bottom Left}
            }
        }
        if (x !== field.length - 1) {
            if (field[x + 1] [y] !== true) {
                getNeighboursBombCount(x + 1, y)//Bottom Mid
            }
        }
        if (y !== field.length - 1 && x !== field.length - 1) {
            if (field[x + 1] [y + 1] !== true) {
                getNeighboursBombCount(x + 1, y + 1)//Bottom Right
            }
        }

    }
    return bombCounter

}



