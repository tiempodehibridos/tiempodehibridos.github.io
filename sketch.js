
let x;
let y;
let x1;
let y1;
let x2;
let y2;

var contador = 11;
var dato = 0.25;
var contando = 0.25;

let fr = 30; //starting FPS


function setup() {

    frameRate(fr);

    createCanvas(windowWidth, windowHeight);
    x3 = windowWidth / 1.5;
    y3 = windowHeight / 2;
    // verde
    x2 = windowWidth / 1.5;
    y2 = windowHeight / 2;
    // amarillo
    x1 = windowWidth / 1.5;
    y1 = windowHeight / 2;
    // azul
    x = windowWidth / 1.5;
    y = windowHeight / 2;
    /*
    // verde
    x2 = 580;
    y2 = 320;
    // amarillo
    x1 = 580;
    y1 = 320;
    // azul
    x = 580;
    y = 320;
    */
    //background(51);
}

function draw() {
    contando += 0.25;
    caminanteUno();
    caminanteDos();
    caminanteTres();
    caminanteCuatro();
    if (contando >= 10000) {
        window.location.reload();
    }
}

function caminanteUno() {
    contador = contador + dato;
    if (contador <= 10) {
        dato = 1;
        contador += 1;
    }
    if (contador >= 255) {
        dato = -1;
        contador -= 1;
    }
    noStroke();
    fill(contador, contador, contador);
    //strokeWeight(2);
    ellipse(x, y, 4, 4);
    const r1 = floor(random(10));
    switch (r1) {
        case 0:
            x = x + 6;
            break;
        case 1:
            x = x - 6;
            break;
        case 2:
            y = y + 6;
            break;
        case 3:
            y = y - 6;
            break;
    }
}

function caminanteDos() {
    contador = contador + dato;
    if (contador <= 10) {
        dato = 1;
        contador += 1;
    }
    if (contador >= 255) {
        dato = -1;
        contador -= 1;
    }
    noStroke();
    fill(contador, 255, 125);
    //fill(contador, contador, contador);
    //strokeWeight(2);
    ellipse(x1, y1, 4, 4);
    const r = floor(random(4));
    switch (r) {
        case 0:
            x1 = x1 + 6;
            break;
        case 1:
            x1 = x1 - 6;
            break;
        case 2:
            y1 = y1 + 6;
            break;
        case 3:
            y1 = y1 - 6;
            break;
    }
}

function caminanteTres() {
    contador = contador + dato;
    if (contador <= 0) {
        dato = 1;
        contador += 1;
    }
    if (contador >= 255) {
        dato = -1;
        contador -= 1;
    }
    noStroke();
    fill(contador, contador, contador);
    //strokeWeight(2);
    ellipse(x2, y2, 4, 4);
    const r = floor(random(4));
    switch (r) {
        case 0:
            x2 = x2 + 6;
            break;
        case 1:
            x2 = x2 - 6;
            break;
        case 2:
            y2 = y2 + 6;
            break;
        case 3:
            y2 = y2 - 6;
            break;
    }
}

function caminanteCuatro() {
    contador = contador + dato;
    if (contador <= 0) {
        dato = 1;
        contador += 1;
    }
    if (contador >= 255) {
        dato = -1;
        contador -= 1;
    }
    noStroke();
    fill(contador, contador, contador);
    //strokeWeight(2);
    ellipse(x3, y3, 4, 4);
    const r = floor(random(4));
    switch (r) {
        case 0:
            x3 = x3 + 6;
            break;
        case 1:
            x3 = x3 - 6;
            break;
        case 2:
            y3 = y3 + 6;
            break;
        case 3:
            y3 = y3 - 6;
            break;
    }
}