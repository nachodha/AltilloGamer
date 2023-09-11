
//JS TIENDA PS4
console.log(`hello world`)
let ofertasPS4 = []
let contenidoStorePS4 = document.getElementById(`contenidoStorePS4`)
let carritoCompra = []
console.log(carritoCompra.length)
console.log(contenidoStorePS4)

class productoPs4 {
  constructor(id, nombre, precio, tipo, imagen) {
      this.id = id
      this.nombre = nombre,
      this.precio = precio,
      this.tipo = tipo,
      this.imagen = imagen
  }
}


fetch(`ps4Store.json`).then((resp) => resp.json())
  .then((data) => {
    data.forEach(el => {
      let id = el.id
      let nombre = el.nombre.toUpperCase()
      let precio = el.precio
      let tipo = el.tipo
      let imagen = el.imagen
      let stock = el.stock
      
      let contenedor = document.createElement(`div`)
      contenidoStorePS4.appendChild(contenedor)
      contenedor.innerHTML = `<div class="card" style="width: 18rem;">
            <img src="${imagen}" id=imagen${el.id} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" id=nombre${el.id}>${nombre}</h5>
              <p class="card-subtitle"  id =tipo${el.id}>${tipo}</p>
              <p class="precio" id =precio${el.id}>$${precio}</p>
              <div class="button-box"> 
              <button class="boton"  id =${el.id} onclick = "clickBoton(this.id)">Agregar al carrito</button>
            </div>
            </div>
        </div>`
    })
  });

function clickBoton(clicked_id) {
  console.log(`clickeaste`)
  console.log(clicked_id)
  console.log(document.getElementById(`nombre`+clicked_id).innerText)
  let newItem = new productoPs4 (clicked_id, document.getElementById(`nombre`+clicked_id).innerText, document.getElementById(`precio`+clicked_id).innerText,  document.getElementById(`tipo`+clicked_id).innerText, document.getElementById(`imagen`+clicked_id).innerText )
  carritoCompra.push(newItem)
  console.log(carritoCompra)
  console.log(carritoCompra.length)
//CADA VEZ QUE SE CLICKEA EL BOTON PARA AGREGAR UN PRODUCTO AL CARRITO SE INTERACTUA CON EL LOCALSTORAGE, QUE LUEGO DARA CONTENIDO AL CHECKOUT
  if (localStorage.getItem (`carrito`) === null) {
    localStorage.setItem(`carrito`, JSON.stringify(carritoCompra))
  }  else {
    localStorage.clear()
    localStorage.setItem(`carrito`, JSON.stringify(carritoCompra))
  }
}

     // Logre que, al clickear en cada producto rescatado del json y pintado en la tienda, se cree un nuevo objeto y se lo sume a un array, que es el array que va a funcionar de carrito de compras.
     // Que sigue? Utilizar ese array para hacer el carrito de compras y el checkout.

//ESTE ARCHIVO DE JS TERMINA CON LA GESTION DEL ARRAY DE LOS PRODUCTOS DEL CARRITO MEDIANTE LOCALSTORAGE. EL CHECKOUT SE MANEJA DESDE UN ARCHIVO JS SEPARADO








