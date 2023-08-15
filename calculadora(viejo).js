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

//arreglo para guardas operaciones y luego poder verlas en forma de historial
let operacionesAnteriores = [];

//esta función se encargar de dar los resultados dependiendo de la operación dada
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

//esta función se encarga de pedir un numero de opción
function pedirOpcion() {
    let opcion = prompt("Selecciona una opción:");
    return opcion; 
}

//esta función se encarga de pedir los números a operar dependiendo de la operación
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
    operacionesAnteriores.push(`${num1} ${operacion} ${num2} = ${result}`);
    alert(result);


}

//esta función va a recorrer el arreglo y mostrar las operaciones anteriores
function mostrarOperacionesAnteriores() {
    if (operacionesAnteriores.length === 0) {
        alert("No hay operaciones anteriores.");
    } else {
        alert("Operaciones anteriores:");
        for (let operacion of operacionesAnteriores) {
            alert(operacion);
        }
    }
}

//esta funcion contendra los productos disponibles en un arreglo
function stockDisponible() {
    class Producto {
        constructor(nombre, precio, categoria) {
            this.disponible = true;
            this.precio = precio;
            this.nombre = nombre;
            this.categoria = categoria;
        }
    }

    const laptopHP = new Producto("Laptop HP", 800, "Laptops");
    const monitorSamsung = new Producto("Monitor Samsung", 300, "Monitores");
    const tecladoLogitech = new Producto("Teclado Logitech", 50, "Accesorios");

    const productosDisponibles = [laptopHP, monitorSamsung, tecladoLogitech];
    
    for (let producto of productosDisponibles) {
        alert("Nombre:" + producto.nombre +
            "Precio:"+ producto.precio +
            "Categoría:" + producto.categoria +
            "Disponible:" + producto.disponible)
    }
}

//menu
function mostrarMenu() {
    alert("=== MENÚ ===");
    alert("1. Calculadora");
    alert("2. Carrito de compras");
    alert("3. Mostrar operaciones anteriores");
    alert("4. Salir");
}

//esta función utiliza la variable opción cargada anteriormente para indicar la opción elegida
function seleccionarOpcion(opcion) {
    switch (opcion) {
        case "1":
            alert("Has seleccionado la Opción 1: Calculadora");
            pedirNumeros()
            // calculadora
            break;
        case "2":
            alert("Has seleccionado la Opción 2: Carrito");
            stockDisponible();;
            // carrito
            break;
        case "3":
            mostrarOperacionesAnteriores();
            break;
            //historial
        case "4":
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

while (opcion !== "4") {
    if (opcion === "1") {
        pedirNumeros();
    } else if (opcion === "2") {
        stockDisponible();
    } else if (opcion === "3") {
        mostrarOperacionesAnteriores();
    } else {
        alert("Opción no válida");
    }
    
    opcion = pedirOpcion();
}

alert("Hasta luego!");
