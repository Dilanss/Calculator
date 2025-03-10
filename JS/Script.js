const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var Operacion = undefined;

// Captura para los eventos

// Números
botonNumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarNumero(boton.innerText);
    });
});

// Botón de operar
botonOpera.forEach(function(boton) {
    boton.addEventListener('click', function() {
        selectOperacion(boton.innerText);
    });
});

// Botón de igual
botonIgual.addEventListener('click', function() {
    calcular();
    actualizarDisplay();
});

// Botón de eliminar
botonDelete.addEventListener('click', function() {
    clear();
    actualizarDisplay();
});

function selectOperacion(ope) {
    if(opeActual === '') return;
    if(opeAnterior !== '') {
        calcular();
    }

    Operacion = ope.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);

    if(isNaN(anterior) || isNaN(actual)) return;
    switch(Operacion) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    opeActual = calculo;
    Operacion = undefined;
    opeAnterior = '';
}

// Función para agregar números
function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizarDisplay();
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    Operacion = undefined;
}

function actualizarDisplay() {
    result.value = opeActual;
};

clear();
