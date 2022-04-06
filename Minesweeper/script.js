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

for (let i = 0; i < 10; i++) {
    getBomb()
}

function getBomb() {
    let x = Math.floor(field.length * Math.random())
    let y = Math.floor(field.length * Math.random())
    if (field[x][y] !== undefined) {
        field[x][y] = undefined
        const el = document.querySelector(`[data-row="${x}"][data-cell="${y}"]`)
        const parent = document.createElement('div');
        parent.innerHTML = '<img class="bomb" src="bomb.png">';
        el.appendChild(parent.firstChild);
    } else {
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
        if (!field[e.getAttribute('data-row') - 1] [e.getAttribute('data-cell') - 1]) {

            showField(e.getAttribute('data-row'), e.getAttribute('data-cell'))


            field[e.getAttribute('data-row') - 1] [e.getAttribute('data-cell') - 1] = true


            console.log(
                e.getAttribute('data-row') + "%%" + e.getAttribute('data-cell'
                ))
        } else {
            console.log("Feld bereits Aufgedeckt")
        }


    }));


function getBombCount(x, y) {
    console.log(x, y)
    x = Number(x)
    y = Number(y)
    let bombCounter = 0


    if (field[x] [y] !== true) {
//LEFT

        if (y !== 0) {
            //Top Left
            if (typeof (field[x - 1] [y - 1]) === 'undefined') {
                bombCounter += 1
            }

            console.log("left g")
            //Middle Left
            if (typeof (field[x] [y - 1]) === 'undefined') {
                bombCounter += 1
            }

            console.log("midLeft g")
            //Bottom Left
            if (typeof (field[x + 1] [y - 1]) === 'undefined') {
                bombCounter += 1
            }
            console.log("botLeft g")
        }
//RIGHT
        if (y !== field.length) {
            //Top Right
            if (typeof (field[x - 1] [y + 1]) === 'undefined') {
                bombCounter += 1
            }

            console.log("topRight g")
            //Middle Right
            if (typeof (field[x] [y + 1]) === 'undefined') {
                bombCounter += 1
            }
            console.log("midRIght g")

            //Bottom Right
            if (typeof (field[x + 1] [y + 1]) === 'undefined') {
                bombCounter += 1
            }

            console.log("botRight g")
        }
//TOP MIDDLE
        if (x !== 0) {
            //Top Middle
            if (typeof (field[x - 1] [y]) === 'undefined') {
                bombCounter += 1
            }

            console.log("top mid g")
        }

//BOTTOM MIDDLE
        if (x !== field.length) {

            //Bottom Middle
            if (typeof (field[x + 1] [y]) === 'undefined') {
                bombCounter += 1
            }
            console.log("bot Mid g")
        }
        document.querySelector(`[data-row="${x}"][data-cell="${y}"]`).append(document.createTextNode(bombCounter))

    }
    if (bombCounter === 0) {

        nulls.append([x, y])

        field[x + 1] [y] = true
        field[x - 1] [y] = true
        field[x + 1] [y + 1] = true
        field[x - 1] [y - 1] = true
        field[x] [y - 1] = true
        field[x - 1] [y + 1] = true
        field[x + 1] [y - 1] = true
        field[x] [y + 1] = true

        if (y !== 0) {
            //Top Left
            getBombCount(x - 1, y - 1)
            //Middle Left
            getBombCount(x, y - 1)
            //Bottom Left
            getBombCount(x + 1, y - 1)
        }

        if (x !== 0) {
            //Top Middle
            getBombCount(x - 1, y)
        }

        if (x !== field.length) {
            //Bottom Middle
            getBombCount(x + 1, y)
        }

        if (y !== field.length) {
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

function showField(x, y) {
    if (getNeighboursBombCount(x, y) === 0) {
        // getNeighboursBombCount(x - 1, y - 1)
        // getNeighboursBombCount(x, y - 1)
        // getNeighboursBombCount(x + 1, y - 1)
        // getNeighboursBombCount(x - 1, y)
        // getNeighboursBombCount(x + 1, y)
        // getNeighboursBombCount(x - 1, y + 1)

        // getNeighboursBombCount(x, y + 1)
        // getNeighboursBombCount(x + 1, y + 1)
    }

}


function getNeighboursBombCount(x, y) {
    x = Number(x)
    y = Number(y)
    let bombCounter = 0
    debugger


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


        if (x !== field.length-1) {
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
    if (y !== field.length-1) {


        if (x !== 0) {
            if (field[x - 1][y + 1] !== true) {
                //Top Right}}
                if (typeof (field[x - 1] [y + 1]) === 'undefined' && field[x - 1][y + 1] !== true) {
                    bombCounter += 1
                }
                console.log("topRight g")
            }
        }


        if (y !== field.length-1) {
            if (field[x][y + 1] !== true) {

                //Middle Right
                if (typeof (field[x] [y + 1]) === 'undefined' && field[x][y + 1] !== true) {
                    bombCounter += 1
                }
                console.log("midRIght g")
            }
        }


        if (x !== field.length-1) {
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
    if (x < field.length-1) {

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
        if (y !== field.length-1 && x !== 0) {
            if (field[x - 1] [y + 1] !== true) {
                getNeighboursBombCount(x - 1, y + 1)//Top Right
            }
        }
        if (y !== 0) {
            if (field[x] [y - 1]) {
                getNeighboursBombCount(x, y - 1)//Middle Left
            }
        }
        if (y !== field.length-1) {
            if (field[x] [y + 1] !== true) {
                getNeighboursBombCount(x, y + 1)//Middle Right
            }
        }
        if (y !== 0 && x !== field.length) {
            if (field[x + 1] [y - 1] !== true) {
                getNeighboursBombCount(x + 1, y - 1)//Bottom Left}
            }
        }
        if (x !== field.length-1) {
            if (field[x + 1] [y] !== true) {
                getNeighboursBombCount(x + 1, y)//Bottom Mid
            }
        }
        if (y !== field.length -1) {
            if (field[x + 1] [y + 1] !== true) {
                getNeighboursBombCount(x + 1, y + 1)//Bottom Right
            }
        }

    }
    return bombCounter

}



