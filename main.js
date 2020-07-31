const black = "⚫";
const white = "⚪";
let table = [];
let tableid = [];
let turn = 1;
let oppositeColor;
let whichTurn = document.getElementById("p");
let passMode;

window.onload = initialize();
game();


function initialize() {
    for (let i = 0; i < 8; i++) {
        tableid[i] = [, , , , , , ,];
        table[i] = [, , , , , , ,];
        for (let j = 0; j < 8; j++) {
            table[i][j] = document.getElementById(`${i}${j}`).textContent;

            tableid[i][j] = document.getElementById(`${i}${j}`);
        }
    }
    tableid[3][3].innerHTML = black;
    tableid[3][4].innerHTML = white;
    tableid[4][4].innerHTML = black;
    tableid[4][3].innerHTML = white;
}


function player(color) {

    whichTurn.innerHTML = `${color}の番です。`;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let check = 0;
            if (table[i][j] === "") {
                tableid[i][j].onclick = function () {
                    if (passMode) { return; }
                    if (i <= 5 && table[i + 1][j] === oppositeColor) {
                        for (let k = 2; k < 8 - i; k++) {
                            if (table[i + k][j] === "") {
                                break;
                            } else {
                                if (table[i + k][j] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i + k - l][j].innerHTML = color;
                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (i >= 2 && table[i - 1][j] === oppositeColor) {
                        for (let k = 2; k < i + 1; k++) {
                            if (table[i - k][j] === "") {
                                break;
                            } else {
                                if (table[i - k][j] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i - k + l][j].innerHTML = color;

                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (j <= 5 && table[i][j + 1] === oppositeColor) {
                        for (let k = 2; k < 8 - j; k++) {
                            if (table[i][j + k] === "") {
                                break;
                            } else {
                                if (table[i][j + k] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i][j + k - l].innerHTML = color;
                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (j >= 2 && table[i][j - 1] === oppositeColor) {
                        for (let k = 2; k < j + 1; k++) {
                            if (table[i][j - k] === "") {
                                break;
                            } else {
                                if (table[i][j - k] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i][j - k + l].innerHTML = color;
                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (i <= 5 && j <= 5 && table[i + 1][j + 1] === oppositeColor) {
                        for (let k = 2; k < Math.min(8 - i, 8 - j); k++) {
                            if (table[i + k][j + k] === "") {
                                break;
                            } else {
                                if (table[i + k][j + k] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i + k - l][j + k - l].innerHTML = color;
                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (i <= 5 && j >= 2 && table[i + 1][j - 1] === oppositeColor) {
                        for (let k = 2; k < Math.min(8 - i, j + 1); k++) {
                            if (table[i + k][j - k] === "") {
                                break;
                            } else {
                                if (table[i + k][j - k] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i + k - l][j - k + l].innerHTML = color;
                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (i >= 2 && j <= 5 && table[i - 1][j + 1] === oppositeColor) {
                        for (let k = 2; k < Math.min(i + 1, 8 - j); k++) {
                            if (table[i - k][j + k] === "") {
                                break;
                            } else {
                                if (table[i - k][j + k] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i - k + l][j + k - l].innerHTML = color;
                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (i >= 2 && j >= 2 && table[i - 1][j - 1] === oppositeColor) {
                        for (let k = 2; k < Math.min(i, j) + 1; k++) {
                            if (table[i - k][j - k] === "") {
                                break;
                            } else {
                                if (table[i - k][j - k] === color) {
                                    tableid[i][j].innerHTML = color;
                                    for (let l = 1; l < k; l++) {
                                        tableid[i - k + l][j - k + l].innerHTML = color;
                                    }
                                    check++;
                                    break;
                                }
                            }
                        }
                    }
                    if (check === 0) {
                        alert("だめです。");
                    } else {
                        turn = -turn;
                        game();
                    }
                }
            } else {
                tableid[i][j].onclick = () => {
                    if (passMode) { return; }
                    alert("だめです。");
                }
            }
        }
    }
}

function game() {
    yomikomi();
    if (judge(white) === true || judge(black) === true) {

        if (turn === 1) {
            if (judge(black) === true) {
                player(black);
            } else {
                pass();
            }
        } else {
            if (judge(white) === true) {
                player(white);
            } else {
                pass();
            }
        }
    } else {
        gameEnd();
    }
}

function judge(color) {
    let okerubasyo = 0;
    if (color === black) {
        oppositeColor = white;
    } else {
        oppositeColor = black;
    }
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {

            if (table[i][j] === "") {
                if (i <= 5 && table[i + 1][j] === oppositeColor) {
                    for (let k = 2; k < 8 - i; k++) {
                        if (table[i + k][j] === color) {
                            okerubasyo++;
                        }
                    }
                }

                if (i >= 2 && table[i - 1][j] === oppositeColor) {
                    for (let k = 2; k < i + 1; k++) {
                        if (table[i - k][j] === color) {
                            okerubasyo++;
                        }
                    }
                }

                if (j <= 5 && table[i][j + 1] === oppositeColor) {
                    for (let k = 2; k < 8 - j; k++) {
                        if (table[i][j + k] === color) {
                            okerubasyo++;
                        }
                    }
                }

                if (j >= 2 && table[i][j - 1] === oppositeColor) {
                    for (let k = 2; k < j + 1; k++) {
                        if (table[i][j - k] === color) {
                            okerubasyo++;
                        }
                    }
                }

                if (i <= 5 && j <= 5 && table[i + 1][j + 1] === oppositeColor) {
                    for (let k = 2; k < Math.min(8 - i, 8 - j); k++) {
                        if (table[i + k][j + k] === color) {
                            okerubasyo++;
                        }
                    }
                }

                if (i <= 5 && j >= 2 && table[i + 1][j - 1] === oppositeColor) {
                    for (let k = 2; k < Math.min(8 - i, j + 1); k++) {
                        if (table[i + k][j - k] === color) {
                            okerubasyo++;
                        }
                    }
                }

                if (i >= 2 && j <= 5 && table[i - 1][j + 1] === oppositeColor) {
                    for (let k = 2; k < Math.min(i + 1, 8 - j); k++) {
                        if (table[i - k][j + k] === color) {
                            okerubasyo++;
                        }
                    }
                }

                if (i >= 2 && j >= 2 && table[i - 1][j - 1] === oppositeColor) {
                    for (let k = 2; k < Math.min(i, j) + 1; k++) {
                        if (table[i - k][j - k] === color) {
                            okerubasyo++;
                        }
                    }
                }
            }
        }
    }

    if (okerubasyo != 0) {
        return true;
    } else {
        return false;
    }
}


function pass() {
    passMode = true;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 0; j++) {
        }
    }
    turn = -turn;
    whichTurn.innerHTML = " <span>パス</span>";
    setTimeout(() => {
        passMode = false;
        game();
    }, 4000);
}

function gameEnd() {
    let blackCount = 0;
    let whiteCount = 0;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (table[i][j] === black) {
                blackCount++;
            } else if (table[i][j] === white) {
                whiteCount++;
            }
        }
    }
    if (blackCount > whiteCount) {
        whichTurn.innerHTML = "黒の勝ち";
    } else if (whiteCount > blackCount) {
        whichTurn.innerHTML = "白の勝ち";
    } else {
        whichTurn.innerHTML = "引き分け";
    }
}

function yomikomi() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            table[i][j] = document.getElementById(`${i}${j}`).textContent;
            tableid[i][j] = document.getElementById(`${i}${j}`);
        }
    }
}