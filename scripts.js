console.log("OK")

const productos = [
    {
        nombre: "Mancuernas",
        descripcion: "Pesas de aleacion 5Kg",
        imagen:"Images/mancuernas.jpg",
        precio: 3000
    },
    {
        nombre:"Colchoneta",
        descripcion: "Estirate con la mejor comodidad",
        imagen:"images/colchoneta.jpg",
        precio: 2500
    },
    {
        nombre:"Mancuerna regulable",
        descripcion: "El peso lo elegis vos",
        imagen:"Images/pesas.jpg",
        precio: 15500
    }
]

//console.log(productos)
let productosHTML = "";
for(let indice = 0; indice < productos.length; indice++){
    productosHTML += `
    <div class="card">
        <img src= ${productos[indice].imagen} alt="Imagen del producto">
        <h3>${productos[indice].nombre}</h3>
        <p>${productos[indice].descripcion}</p>
        <h3>Precio: $ ${productos[indice].precio}</h3>
        <input class="btnAgrgarCarrito" type="button" value="Agregar al carrito">
    </div>
`;
}

const contenedorProductos = document.getElementById("contenedorProductos");
contenedorProductos.innerHTML = productosHTML;

// Mensaje Carrito

const mensajePagarCarrito = document.getElementById("mensaje")

//Agergar Listener a los botones de los productos
// Guardar en variables los elementos a modificar

const botonesAgregar = document.querySelectorAll(".btnAgrgarCarrito");

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p");

let totalAPagar = 0;

for (let indice = 0; indice < botonesAgregar.length; indice++){
    
    function agregarproducto(){
        const elementoLi = document.createElement("li");
        elementoLi.innerText = `producto: ${productos[indice].nombre} $ ${productos[indice].precio}`;
        listaCarrito.appendChild(elementoLi);
        totalAPagar += productos[indice].precio;
        totalCarrito.innerText = "Total: $ " + totalAPagar;
        mensajePagarCarrito.innerText = ""
    }

    botonesAgregar[indice].addEventListener("click", agregarproducto);
}

// Agregar listener al Boton Borrar

const botonBorrar = document.querySelector("#btnBorrar");

function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = ""
}

botonBorrar.addEventListener("click", borrarCarrito);

// Agregar listener al boton Ir a Pagar

const botonPagar = document.querySelector("#btnIrAPagar");

function irAPagar(){
    if(listaCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No ah seleccionado productos"
    }
    else {
    window.location.href = "https://www.mercadopago.com.ar/"
    }
}

botonPagar.addEventListener("click", irAPagar)