
let player = false


document.querySelectorAll(".box")
    .forEach((e, i) => e.addEventListener("click", () => {

        if(e.hasChildNodes() == false) {
            let textNode = document.createTextNode(player ? "X" : "O");

            player = !player

            e.appendChild(textNode)
        }
        else{
            alert("Dieses Feld ist bereits besetzt")
        }
        }
    ));

