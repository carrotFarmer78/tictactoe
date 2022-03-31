let player = true
let playerChar = () => player ? "X" : "O"


document.querySelectorAll(".box")
    .forEach((e) => e.addEventListener("click", () => {

            if (!e.hasChildNodes()) {
                let textNode = document.createTextNode(playerChar());

                e.appendChild(textNode)

                if (check()) {

                    resultElement.append(document.createTextNode(`Player ${playerChar()} has won!!!`))

                    setTimeout(() => on(), 1000)

                    replayAdd()
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

    getReplayButton().addEventListener("click", ()=>{
        document.querySelectorAll(".box")
            .forEach(e =>{
                e.removeChild(e.firstChild)
            })




    })





}
