let checkout= document.getElementById (`contenidoCheckout`)

const arrayCheckout = []
console.log(checkout)



let arrayRecuperado = JSON.parse(localStorage.getItem(`carrito`))
console.log(arrayRecuperado)
arrayRecuperado.reverse()
arrayRecuperado.forEach(element => {
    let nombre = element.nombre
    let precio = element.precio
    let item = document.createElement(`div`)
    item.setAttribute ("class", "contenedor-producto")
    checkout.appendChild(item)
    item.innerHTML = `<div class="producto-carro">${nombre}</div>
    <div class="precio-carro">${precio}</div>
    `
});

//QUE SIGUE? PRIMERAMENTE CSS, HASTA ACA TENGO LOS PRODUCTOS QUE SE LEEN DE UN JSON, EL CARRITO QUE SE ARMA EN EL LOCAL STORAGE Y EL CHECKOUT QUE LEE DESDE EL LOCALSTORA Y MUESTRA LA INFO
// NECESITO UNA VISUAL PARA ESA INFO, LA POSIBILIDAD DE ELIMINAR PRODUCTOS DESDE EL CHECKOUT, Y LA SUMA DINAMICA DEL VALOR DE TODOS LOS PRODUCTOS QUE SEA VISIBLE EN EL CHECKOUT
