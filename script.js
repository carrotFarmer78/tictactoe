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

                    setTimeout(() => replayButtonOn(), 500)
                    replayButton.append(document.createTextNode("Replay"))
                    return;
                }
                if (check2()) {

                    resultElement.append(document.createTextNode(`Noone has won`))

                    setTimeout(() => on(), 1000)

                    setTimeout(() => replayButtonOn(), 500)
                    replayButton.append(document.createTextNode("Replay"))
                }



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
    document.getElementsByClassName("display").style.display = "block";
}

function replayButtonOff() {
    document.getElementsByClassName("display").style.display = "none";
}
