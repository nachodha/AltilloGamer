
//JS TIENDA PS4
console.log(`hello world`)
let ofertasPS4 = []
let contenidoStorePS4 = document.getElementById(`contenidoStorePS4`)




     fetch(`ps4Store.json`).then ((resp)=> resp.json())
     .then((data) => {
         data.forEach(el =>{
            let nombre = el.nombre.toUpperCase()
            let precio = el.precio
            let tipo = el.tipo
            let imagen = el.imagen
            let stock = el.stock
            let contenedor = document.createElement(`div`)
            contenidoStorePS4.appendChild(contenedor)
            contenedor.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${imagen}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${nombre}</h5>
              <p class="card-subtitle">${tipo}</p>
              <p class="precio">$${precio}</p>
              <div class="button-box"> 
              <button class="boton" onclick = "clickBoton()">Agregar al carrito</button>
            </div>
            </div>
        </div>` 
        })
     });

function clickBoton() {
    console.log(`clickeaste`)
}





