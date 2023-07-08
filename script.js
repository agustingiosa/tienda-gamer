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
            alert('El resultado es una suma');
            return suma(NumA, NumB);
        case '-':
            alert('El resultado es una resta');
            return resta(NumA, NumB);
        case '/':
            alert('El resultado es una division');
            return division(NumA, NumB);
        case '*':
            alert('El resultado es una multiplicación');
            return multiplicación(NumA, NumB);
        case 'iva21':
            alert('El resultado iva incluido es:');
            return iva21(NumA);
        case 'sinIva':
            alert('El resultado iva excluido es:');
            return sinIva(NumA);
        default:
            alert('Operador no válido');
            break;
    }
}

function pedirOpcion() {
    let opcion = prompt("Selecciona una opción:");
    return opcion; 
}

function pedirNumeros() {
    let operacion = prompt("operacion (+,-,/,iva21,sinIva)");
    let num1,num2;

    if ((operacion == "+" ) || (operacion == "-" ) || (operacion == "/") || (operacion == "*")){
        num1 = parseFloat(prompt("numero 1"))
        num2 = parseFloat(prompt("numero 2"))
    }else{
        num1 = parseFloat(prompt("numero 1"))
    }

    let result = resultado(operacion, num1, num2);
    alert(result);
}

//menu
function mostrarMenu() {
    alert("=== MENÚ ===");
    alert("1. Calculadora");
    alert("2. Carrito de compras");
    alert("3. Salir");
}

function seleccionarOpcion(opcion) {
    switch (opcion) {
        case "1":
            alert("Has seleccionado la Opción 1");
            pedirNumeros()
            // Lógica para la opción 1
            break;
        case "2":
            alert("Has seleccionado la Opción 2");
            // Lógica para la opción 2
            break;
        case "3":
            alert("¡Hasta luego!");
            return;
        default:
            alert("Opción no válida");
            break;
    }

    mostrarMenu();
    pedirOpcion();
}

// Inicio del programa

mostrarMenu();
let opcion = pedirOpcion();

while (opcion !== "3") {
    pedirNumeros();
    opcion = pedirOpcion();
}

alert("Hasta luego!");
