// Declaring variables
let fields = document.querySelectorAll("td")
let plays1 = 0;
let plays2 = 0;
let casa1 = document.getElementById('1')
let casa2 = document.getElementById('2')
let casa3 = document.getElementById('3')
let casa4 = document.getElementById('4')
let casa5 = document.getElementById('5')
let casa6 = document.getElementById('6')
let casa7 = document.getElementById('7')
let casa8 = document.getElementById('8')
let casa9 = document.getElementById('9')




// Adding click in each field
for (i = 0; i < fields.length; i++) {
    fields[i].addEventListener("click", function() {
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
        checkWin()
    })
}

// function for check possible winner
function checkWin() {
    if (
        casa1.innerText == 'X' && casa2.innerText == 'X' && casa3.innerText == 'X' ||
        casa4.innerText == 'X' && casa5.innerText == 'X' && casa6.innerText == 'X' ||
        casa7.innerText == 'X' && casa8.innerText == 'X' && casa9.innerText == 'X' ||
        casa1.innerText == 'X' && casa4.innerText == 'X' && casa7.innerText == 'X' ||
        casa2.innerText == 'X' && casa5.innerText == 'X' && casa8.innerText == 'X' ||
        casa3.innerText == 'X' && casa6.innerText == 'X' && casa9.innerText == 'X' ||
        casa1.innerText == 'X' && casa5.innerText == 'X' && casa9.innerText == 'X' ||
        casa3.innerText == 'X' && casa5.innerText == 'X' && casa7.innerText == 'X'
    ) {
        setTimeout(function() {
            gameOver();
        }, 250)
    } else if (
        casa1.innerText == 'O' && casa2.innerText == 'O' && casa3.innerText == 'O' ||
        casa4.innerText == 'O' && casa5.innerText == 'O' && casa6.innerText == 'O' ||
        casa7.innerText == 'O' && casa8.innerText == 'O' && casa9.innerText == 'O' ||
        casa1.innerText == 'O' && casa4.innerText == 'O' && casa7.innerText == 'O' ||
        casa2.innerText == 'O' && casa5.innerText == 'O' && casa8.innerText == 'O' ||
        casa3.innerText == 'O' && casa6.innerText == 'O' && casa9.innerText == 'O' ||
        casa1.innerText == 'O' && casa5.innerText == 'O' && casa9.innerText == 'O' ||
        casa3.innerText == 'O' && casa5.innerText == 'O' && casa7.innerText == 'O') {
        setTimeout(function() {
            gameOver();
        }, 250)
    }
}

// Game Over Function

function gameOver() {
    const endgame = document.getElementById("endgame");
    endgame.classList.remove("hidden");
}