const black = "●";
const white = "◯";
let table = [];
let tableid = [];
let oppositeColor;
let turn = 1;
let whichTurn = document.getElementById("p");
for (let i = 0; i < 8; i++) {
    tableid[i] = [, , , , , , ,];
    table[i] = [, , , , , , ,];
    for (let j = 0; j < 8; j++) {
        table[i][j] = document.getElementById(`${i}${j}`).textContent;
        tableid[i][j] = document.getElementById(`${i}${j}`);
    }
}

window.onload = initialize();

game();




function initialize() {

    table[3][3].innerHTML = black;
    table[3][4].innerHTML = white;
    table[4][4].innerHTML = black;
    table[4][3].innerHTML = white;

}


function player(color) {


    let check = 0;
    if (color === black) {
        oppositeColor = white;
    } else {
        oppositeColor = black;
    }
    whichTurn.innerHTML = `${color}の番です。`;
    console.log(color);
    console.log(table[-1]);
    console.log(oppositeColor)
    for (let i = 0; i < 8; i++) {
        console.log("a")
        for (let j = 0; j < 8; j++) {
            console.log(table[3][3] === oppositeColor)
            if (table[i + 1][j] === oppositeColor) {
                console.log("a")
                for (let k = 2; k < 8 - i; k++) {
                    console.log(table[4][3] === color)
                    if (table[i + k][j] === color) {
                        console.log("a")
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;
                            console.log("a")
                            for (let l = 1; l < k; l++) {
                                tableid[i + k - l][j].innerHTML = color;
                                console.log("konnnitiha")
                            }
                            turn = turn * (-1);
                            game();
                        }
                        check++;
                        break;
                    }
                }
            }
            console.log(check);

            if (table[i - 1][j] === oppositeColor) {
                for (let k = 2; k < 8 - i; k++) {
                    if (table[i - k][j] === color) {
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;

                            for (let l = 1; l < k; l++) {
                                tableid[i - k + l][j].innerHTML = color;

                            }
                            turn = -turn;
                            game();
                        }
                        check++;
                        break;

                    }
                }
            }
            if (table[i][j + 1] === oppositeColor) {
                for (let k = 2; k < 8 - i; k++) {
                    if (table[i][j + k] === color) {
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;

                            for (let l = 1; l < k; l++) {
                                tableid[i][j + k - l].innerHTML = color;
                            }
                            turn = turn * (-1);
                            game();
                        }
                        check++;

                        break;
                    }
                }
            }
            if (table[i][j - 1] === oppositeColor) {
                for (let k = 2; k < 8 - i; k++) {
                    if (table[i][j - k] === color) {
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;

                            for (let l = 1; l < k; l++) {
                                tableid[i][j - k + l].innerHTML = color;
                            }
                            turn = turn * (-1);
                            game();
                        }
                        check++;

                        break;
                    }
                }
            }
            if (table[i + 1][j + 1] === oppositeColor) {
                for (let k = 2; k < 8 - i; k++) {
                    if (table[i + k][j + k] === color) {
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;

                            for (let l = 1; l < k; l++) {
                                tableid[i + k - l][j + k - l].innerHTML = color;
                            }
                            turn = turn * (-1);
                            game();
                        }
                        check++;

                        break;
                    }
                }
            }
            if (table[i + 1][j - 1] === oppositeColor) {
                for (let k = 2; k < 8 - i; k++) {
                    if (table[i + k][j - k] === color) {
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;

                            for (let l = 1; l < k; l++) {
                                tableid[i + k - l][j - k + l].innerHTML = color;
                            }
                            turn = turn * (-1);
                            game();
                        }
                        check++;

                        break;
                    }
                }
            }
            if (table[i - 1][j + 1] === oppositeColor) {
                for (let k = 2; k < 8 - i; k++) {
                    if (table[i - k][j + k] === color) {
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;

                            for (let l = 1; l < k; l++) {
                                tableid[i - k + l][j + k - l].innerHTML = color;
                            }
                            turn = turn * (-1);
                            game();
                        }
                        check++;

                        break;
                    }
                }
            }
            if (table[i - 1][j - 1] === oppositeColor) {
                for (let k = 2; k < 8 - i; k++) {
                    if (table[i - k][j - k] === color) {
                        tableid[i][j].onclick = function () {
                            tableid[i][j].innerHTML = color;

                            for (let l = 1; l < k; l++) {
                                tableid[i - k + l][j - k + l].innerHTML = color;
                            }
                            turn = turn * (-1);
                            game();
                        }
                        check++;

                        break;
                    }
                }
            }
            if (check === 0) {
                tableid[i][j].onclick = function () { alert("だめです"); }
            }
        }
    }
}

function game() {

    if (turn === 1) {
        player(black);
    } else {
        player(white);
    }
}