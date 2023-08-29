class Producto {
    static lastId = 0;

    constructor(nombre, precio, descripcion, img) {
        this.id = Producto.lastId + 1;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
        this.descripcion = descripcion;
        this.img = img;

        Producto.lastId = this.id;
    }
}
class Carrito {
    constructor() {
        this.listaCarrito = []
    }

    cargarStorage() {
        let listaCarritoJSON = localStorage.getItem("listaCarrito");
        this.listaCarrito = JSON.parse(listaCarritoJSON) || [];

        console.log("Datos del almacenamiento local cargados:", this.listaCarrito);
    }

    guardarEnStorage() {
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem("listaCarrito", listaCarritoJSON)
    }

    agregar(productoAgregar) {
        let existeElProducto = this.listaCarrito.some(producto => producto.id == productoAgregar.id)

        if (existeElProducto) {
            const producto = this.listaCarrito.find(producto => producto.id == productoAgregar.id)
            producto.cantidad = producto.cantidad + 1
        } else {
            this.listaCarrito.push(productoAgregar)
        }
    }

    eliminar(productoEliminar) {
        let producto = this.listaCarrito.find(producto => producto.id == productoEliminar.id)
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice, 1)
    }

    eliminarTodosLosProductos() {
        this.listaCarrito = []; 
    }

    calcularTotal() {
        let total = 0;
        for (const producto of this.listaCarrito) {
            total += producto.precio * producto.cantidad;
        }
        return total;
    }

    mostrarProductos() {
        let contenedor_carrito = document.getElementById('contenedor_carrito')
        contenedor_carrito.innerHTML = ""
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += `
            <div class="objetoCarrito mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">Precio: $${producto.precio}</p>
                            <p class="card-text">Cantidad: ${producto.cantidad}</p>
                            <button class="btn btn-danger botonEliminarDeCarrito" id="eliminar-${producto.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            </div>`
        })

        contenedor_carrito.innerHTML += `<p class="total">Total: $${this.calcularTotal()}</p>`;

        this.listaCarrito.forEach(producto => {
            let btn_eliminar = document.getElementById(`eliminar-${producto.id}`);
            btn_eliminar.addEventListener("click", () => {
                // Muestra la ventana emergente de SweetAlert2
                Swal.fire({
                    icon: 'warning',
                    title: '¿Eliminar producto?',
                    text: `¿Estás seguro que deseas eliminar ${producto.nombre} del carrito?`,
                    showCancelButton: true,
                    confirmButtonText: 'Eliminar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.eliminar(producto);
                        this.guardarEnStorage();
                        this.mostrarProductos();
                    }
                });
            });
        });
    }
}



class claseProducto {
    constructor() {
        this.listaProductos = [];
    }

    cargarProductosDesdeStorage() {
        let listaProductosJSON = localStorage.getItem("listaProductos");
        this.listaProductos = JSON.parse(listaProductosJSON) || [];
    }

    guardarProductosEnStorage() {
        let listaProductosJSON = JSON.stringify(this.listaProductos);
        localStorage.setItem("listaProductos", listaProductosJSON);
    }

    agregar(producto) {
        this.listaProductos.push(producto);

    }

    // Método para agregar un producto desde el formulario
    agregarProductoDesdeFormulario() {
        const nombre = document.getElementById('nombre').value;
        const precio = parseFloat(document.getElementById('precio').value);
        const descripcion = document.getElementById('descripcion').value;
        const img = document.getElementById('imagen').value;

        const nuevoProducto = new Producto(nombre, precio, descripcion, img);
        this.agregar(nuevoProducto);

        this.mostrarProductos();
    }

    mostrarProductos() {
        let contenedorProductos = document.getElementById("contenedorProductos");
        contenedorProductos.innerHTML = "";

        this.listaProductos.forEach(producto => {
            contenedorProductos.innerHTML += `<div class="card" style="width: 18rem;">
                <img src="${producto.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">$${producto.precio}</p>
                    <p class="card-text">id:${producto.id}</p>
                    <a href="#" class="btn btn-primary botonCarrito" id="ap-${producto.id}">Añadir al carrito</a>
                </div>
            </div>`;
        });

        this.listaProductos.forEach(producto => {
            const btn = document.getElementById(`ap-${producto.id}`);
            btn.addEventListener("click", () => {
                carrito.agregar(producto);
                carrito.guardarEnStorage();
                carrito.mostrarProductos();
            });
        });
    }
}

const carrito = new Carrito()
carrito.cargarStorage()
carrito.mostrarProductos()

const controladorDeProductos = new claseProducto()


function agregarNuevoProducto(nombre, precio, descripcion, img) {
    const nuevoProducto = new Producto(nombre, precio, descripcion, img);
    return nuevoProducto;
}


const formNuevoProducto = document.getElementById('formNuevoProducto');

// Función para agregar productos desde la web
function agregarProductoDesdeFormulario(event) {

    const nombre = document.getElementById('nombre').value;
    const precio = parseFloat(document.getElementById('precio').value);
    const descripcion = document.getElementById('descripcion').value;
    const img = document.getElementById('img').value;

    const nuevoProducto = agregarNuevoProducto(nombre, precio, descripcion, img);
    controladorDeProductos.agregar(nuevoProducto);

    controladorDeProductos.mostrarProductos();

    formNuevoProducto.reset();
}

// Agregar el evento de envío del formulario
formNuevoProducto.addEventListener('submit', agregarProductoDesdeFormulario);

//creo nuevos productos por fuera del formulario
const producto1 = new Producto("Ryzen 5", 150000, "Descripción del producto 1", "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBn-of-QyjVLKdv_Pibh0AZfZwKQeNKmMCq3mWrA8b7uf_HwYO-6vCSsFzYHp88pOkO5QaQl6wzWZfj-ryzJJKpyKv3R9KyMqvGPVrMnTRma-NYj8x-g2YqQ&usqp=CAc");
const producto2 = new Producto("Intel i5", 200000, "Descripción del producto 2", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRBNVXnOJhM_ikMhDe1BvhsBMn-xRJluT2Fc9HlF4H-Ig37LqkgajdlJvWF1pqDZN1oqOSXE0myrNPFyydzUc7-HJTgP1PtI8Rj0-xUu76f&usqp=CAc");
const producto3 = new Producto("Intel i7", 300000, "Descripción del producto 3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-tqoWqUJC975trvUfoUZxnG-nFgn-tFPMKlzOvO3MnwV2EAhmSe7&usqp=CAE&s");


controladorDeProductos.agregar(producto1);
controladorDeProductos.agregar(producto2);
controladorDeProductos.agregar(producto3);


controladorDeProductos.mostrarProductos();

// Obtén una lista de todos los enlaces con la clase "btn-primary"
const alertas = document.querySelectorAll('.botonCarrito');

// Agrega un escuchador de eventos a cada enlace
alertas.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Muestra la ventana emergente con el mensaje de error
        Swal.fire({
            icon: 'success',
            title: 'Hecho!',
            text: 'Agregaste el producto al carrito',
        });
    });
});


// Obtén una lista de todos los enlaces con la clase "botonFinalizarCompra"
const finalizar = document.querySelectorAll('.botonFinalizarCompra');

// Agrega un escuchador de eventos a cada enlace
finalizar.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Muestra la ventana emergente de SweetAlert2
        Swal.fire({
            icon: 'warning',
            title: '¿Finalizar compra?',
            text: '¿Estás seguro que deseas finalizar la compra y vaciar el carrito?',
            showCancelButton: true,
            confirmButtonText: 'Finalizar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Lógica para eliminar todos los productos del carrito
                carrito.eliminarTodosLosProductos(); // Ajusta esto según tu implementación
                carrito.guardarEnStorage(); // Asegúrate de guardar el carrito actualizado en el almacenamiento
                carrito.mostrarProductos(); // Asegúrate de actualizar la vista del carrito
                
                // Muestra la ventana emergente de éxito
                Swal.fire({
                    icon: 'success',
                    title: 'Compra realizada',
                    text: 'El carrito ha sido vaciado',
                });
            }
        });
    });
});

async function levantarProductos () {
    let respuesta = await fetch ("simulador.json")
    let listaProductos = respuesta.json()
    mostrarLosProductos (listaProductos)
}

levantarProductos()
