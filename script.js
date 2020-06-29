let boxes = document.querySelectorAll("td")
let plays1 = 0;
let plays2 = 0;

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
        let filled;
        if (this.innerText == "") {
            filled = false;
            console.log("tem nada aqui mano")
        } else {
            filled = true;
        }
        if (!filled) {


            if (plays1 == plays2) {
                this.innerText = "X";
                plays1++;
            } else {
                this.innerText = "O";
                plays2++;
            }
        }

    })
}