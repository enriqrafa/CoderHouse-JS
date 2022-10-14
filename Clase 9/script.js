//DOM Eventos
const carrito = []
const Manny = {
    id:1,
    imagen: "./imagenes/Manny.png",
    nombre:"Manuel Calavera",
    descripcion: "Muerto",
    precio: 1000
}

let articuloTarjeta = document.getElementById("tarjetas")

articuloTarjeta.innerHTML= `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${Manny.imagen}" alt="${Manny.nombre}">
        <div class="card-body">
            <h5 class="${Manny.nombre}">Card title</h5>
            <p class="card-text">${Manny.descripcion}</p>
            <p class="card-text">Precio $ ${Manny.precio}</p>
            <button id="miBoton" class="btn btn-primary">Comprar</button>
        </div>
    </div>
`;

let miBoton = document.getElementById("miBoton")

//OPCION 1
//miBoton.addEventListener("click",agregarAlCarro)

function agregarAlCarro(){
    alert("Manny fue agregado con éxito a su carrito")
    carrito.push(Manny)
    console.table(carrito)
}

//OPCION 2
miBoton.onclick = () => {
    agregarAlCarro();
}

//OPCION 2.1
//miBoton.onclick = agregarAlCarro

//OPCION 3
//Ver diapo

miBoton.onmouseover = ()=> {
    console.log("Tienes ganas de una aventura brutal?")
    miBoton.className = "btn btn-danger"
}

miBoton.onmouseout = () =>{
    miBoton.className = "btn btn-primary"
}

//EVENTOS DE TECLADO
let campoNombre = document.getElementById("nombre")
let campoEdad = document.getElementById("edad")

campoEdad.onkeydown = () => {
    console.log("Se detecto la presion de una tecla")
}

campoEdad.onkeyup = () => {
    console.log("Se detecto que se soltó una tecla")
}

campoEdad.onchange = () =>{
    console.log("Cambió el contenido - Contenido Actualizado: "+ campoEdad.value)
    if(campoEdad.value<=0)
    alert("Edad inválida")
}

campoNombre.oninput = () =>{
    if(isNaN(campoNombre.value)){
        campoNombre.style.color="black"
    }else{
        campoNombre.style.color="red"
    }
}

//Evento SUBMIT

let formulario = document.getElementById("formulario")
formulario.addEventListener("submit",validar)

function validar(ev){
    if((campoNombre.value=="")||(campoEdad.value==""))
    ev.preventDefault();
    alert("Ingrese nombre o edad válidos")
}

//EVENTO DETECTANDO UNA TECLA ESPECIFICA
function capturarEnter(e){
    if(e.which == 13 || e.keycode == 13)
    alert("Presionaste el ENTER")
}









