// Declaring variables
let boxes = document.querySelectorAll("td")
let plays1 = 0;
let plays2 = 0;
let player1 = []
let player2 = []

// Adding click in each field
for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        // Verifying if the field is filled
        let filled;
        if (this.innerText == "") {
            filled = false;
        } else {
            filled = true;
        }
        if (!filled) {

            // filling the field after verifying which turn is
            if (plays1 == plays2) {
                this.innerText = "X";
                plays1++;
            } else {
                this.innerText = "O";
                plays2++;
            }
        }
        checkWin(player1)
    })
}


// function for check winner
function checkWin(){}
