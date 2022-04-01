let player = true
let playerChar = () => player ? "X" : "O"
let playerX = 0
let playerO = 0
let playerChar2 = () => player ? "O" : "X"

whosMoving()
document.querySelectorAll(".box")
    .forEach((e) => e.addEventListener("click", () => {
        whosMoving()
            if (!e.hasChildNodes()) {
                let textNode = document.createTextNode(playerChar());

                e.appendChild(textNode)

                if (check()) {

                    resultElement.append(document.createTextNode(`Player ${playerChar()} has won!!!`))

                    setTimeout(() => on(), 1000)

                    replayAdd()
                    counter()
                    displayWins()

                    return;
                }
                if (check2()) {

                    resultElement.append(document.createTextNode(`Noone has won`))

                    setTimeout(() => on(), 1000)


                    replayAdd()


                }

                console.log("test")



                player = !player

            } else {

            }
        }
    ));

resultElement = document.querySelector('.result')
replayButton = document.querySelector(".replay")

function check() {
    const array = []
    document.querySelectorAll(".box")
        .forEach(e => {
            array.push(e.childNodes?.[0]?.textContent === playerChar())
        })


    return array[0] && array[1] && array[2] || array[3] && array[4] && array[5] || array[6] && array[7] && array[8] ||
        array[0] && array[3] && array[6] || array[1] && array[4] && array[7] || array[2] && array[5] && array[8] ||
        array[0] && array[4] && array[8] || array[2] && array[4] && array[6]


}

function check2() {
    const boxes = [...document.querySelectorAll(".box")]
    return boxes.every(e => e.childNodes?.[0]?.textContent);

}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function replayButtonOn() {
    getReplayButton().style.display = "block";
}

function getReplayButton() {
    return document.querySelector(".replayButton");
}



function replayButtonOff() {
    document.getElementsByClassName("display").style.display = "none";
}

function replayAdd(){
    setTimeout(() => {
        replayButtonOn();
        getReplayButton().append(document.createTextNode("Replay"))
    },1000 )

    getReplayButton().addEventListener("click", ()=>
    {
        document.querySelectorAll(".box")
            .forEach(e => {
                while (e.hasChildNodes())
                {
                    e.removeChild(e.firstChild)
                    off()
                }
                while(getReplayButton().hasChildNodes())
                {
                    getReplayButton().removeChild(getReplayButton().firstChild)
                }
                while(resultElement.hasChildNodes())
                {
                    resultElement.removeChild(resultElement.firstChild)
                }
            }
            )
    })
}

function counter(){
    if(player){
        playerX += 1
        console.log("X: "+playerX)
    }
    else{
        playerO += 1
        console.log("O: "+ playerO)
    }
    player = true
}

function displayWins() {

    document.querySelectorAll(".score")
        .forEach(e => {
            while (e.hasChildNodes()) {
                e.removeChild(e.firstChild)
            }
        })

    if(playerX > 1){
        document.querySelector(".scoreX").append(document.createTextNode("Player X has: " + playerX + " Wins!"))
    }
    else{
        document.querySelector(".scoreX").append(document.createTextNode("Player X has: " + playerX + " Win!"))
    }
    if(playerO > 1){
        document.querySelector(".scoreO").append(document.createTextNode("Player O has: " + playerO + " Wins!"))
    }
    else{
        document.querySelector(".scoreO").append(document.createTextNode("Player O has: " + playerO + " Win!"))

    }



}
function whosMoving(){
    if(document.querySelector(".move").hasChildNodes()){
        while(document.querySelector(".move").hasChildNodes()){
            document.querySelector(".move").removeChild(document.querySelector(".move").firstChild)
        }
    }
    document.querySelector(".move").append(document.createTextNode("Player "+playerChar2()+" is currently moving"))

}
