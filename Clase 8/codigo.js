//DOM
console.dir(document.body)

//getElementById
let seccion = document.getElementById("principal")

console.log(seccion.innerHTML)

//seccion.style.background="blue"

let titulo = document.getElementById("titulo")

console.log(titulo.innerText)


titulo.innerText="Hoy cambia todo!"
titulo.style.font="bold 40px monospace"

//getElementsByTagName
let parrafos = document.getElementsByTagName("p")

console.log(parrafos[0].innerText)
console.log(parrafos[1].innerText)

//cambiar innerHTML
let articulo = document.getElementById("articulo")
console.log(articulo.innerHTML)
articulo.innerHTML +="<h3>Nodo nuevo</h3>"
console.log(articulo.innerHTML)

//inputs
let campoEmpresa =document.getElementById("empresa")
let campoCantidad =document.getElementById("cantidad")
campoEmpresa.value = "Mercado Libre"
campoCantidad.value = 19

//array de objetos literales
const productos = [ { id: 1, nombre: "Arroz", precio: 125},
{id: 2, nombre: "Fideo", precio: 70},
{id: 3, nombre: "Pan", precio: 50,},
{id: 4, nombre: "Flan", precio: 100},
{id: 5, nombre: "Helado", precio: 200},]


//Diapo plantillas literales

let producto = { id: 1,  nombre: "Arroz", precio: 125 };
let concatenado = "ID : " + producto.id +" - Producto: " + producto.nombre + "$ "+producto.precio;
let plantilla   = `ID: ${producto.id} - Producto ${producto.nombre} $ ${producto.precio}`;
//El valor es idéntico pero la construcción de la plantilla es màs sencilla
console.log(concatenado);
console.log(plantilla)



//tabla
let articuloTabla =document.getElementById("inferior")
//creamos la tabla y el tbody

let tabla = document.createElement("table")
tabla.className="table table-striped"
let tablaBody = document.createElement("tbody")

//recorro el array de productos
for(const producto of productos){
    tablaBody.innerHTML += `
    <tr>
        <td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
    </tr>
    `;
    }


tabla.append(tablaBody)
articuloTabla.append(tabla)


//cards
let articuloCartas =document.getElementById("cartas")

for(const producto of productos){
    let carta = document.createElement("div")
    carta.className='card col-md-3'
    carta.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    `;
    articuloCartas.append(carta)
};