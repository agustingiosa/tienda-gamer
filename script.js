//calculadora

function suma(NumA, NumB) {
    return NumA + NumB;
}

function resta(NumA, NumB) {
    return NumA - NumB;
}

function division(NumA, NumB) {
    return NumA / NumB;
}

function multiplicación(NumA, NumB) {
    return NumA * NumB;
}

function iva21(NumA) {
    return NumA * 1.21;
}

function sinIva(NumA) {
    return NumA / 1.21;
}

function resultado(operador, NumA, NumB) {
    switch (operador) {
        case '+':
            console.log('El resultado es una suma');
            return suma(NumA, NumB);
        case '-':
            console.log('El resultado es una resta');
            return resta(NumA, NumB);
        case '/':
            console.log('El resultado es una division');
            return division(NumA, NumB);
        case '*':
            console.log('El resultado es una division');
            return multiplicación(NumA, NumB);
        case 'iva21':
            console.log('El resultado iva incluido es:');
            return iva21(NumA);
        case 'sinIva':
            console.log('El resultado iva excluido es:');
            return sinIva(NumA);
        default:
            console.log('Operador no válido');
            break;
    }
}

//productos
let pizza = 2000 //pizza $2000
let empanada = 400 //empanada $400


//menu
function mostrarMenu() {
    console.log("=== MENÚ ===");
    console.log("1. Calculadora");
    console.log("2. Carrito de compras");
    console.log("4. Salir");
    console.log("==============");
}

function seleccionarOpcion(opcion) {
    switch (opcion) {
        case "1":
            console.log("Has seleccionado la Opción 1");
            resultado(operador, NumA, NumB)
            // Lógica para la opción 1
            break;
        case "2":
            console.log("Has seleccionado la Opción 2");
            // Lógica para la opción 2
            break;
        case "4":
            console.log("¡Hasta luego!");
            return;
        default:
            console.log("Opción no válida");
            break;
    }

    mostrarMenu();
    pedirOpcion();
}

function pedirOpcion() {
    let opcion = prompt("Selecciona una opción:");
    seleccionarOpcion(opcion);
}

function pedirNumeros() {
    let operacion = prompt("operacion (+,-,/,iva21,sinIva)");
    let num1 = prompt("numero 1")
    let num2 = prompt("numero 2")

    let result = resultado(operacion, num1, num2);
    console.log(result);
}

// Inicio del programa
mostrarMenu();
pedirOpcion();
pedirNumeros()
