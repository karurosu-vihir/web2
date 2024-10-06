import info from "./db.js"

const data = info()
const productos = data.producto

document.addEventListener("DOMContentLoaded", () => {
    console.log(window.location.pathname);
    orgnizarproductos(window.location.pathname)
})

const orgnizarproductos = (pathname) => {
    let venta = ""
    switch (pathname) {
        case "/pages/Cafes.html":
            venta = productos.filter(producto => producto.tipo === "cafe")
            console.log(venta)
            init(venta)
            break;
        case "/pages/helado.html":
            venta = productos.filter(producto => producto.tipo === "bebida helada")
            console.log(venta);
            init(venta)
            break;
        case "/pages/postre.html":
            venta = productos.filter(producto => producto.tipo === "postre")
            console.log(venta)
            init(venta)
            break;
        case "/":
        case "/index.html":
            venta = productospopulares();
            console.log(venta)
            init(venta)
            console.log(productospopulares());
            break;
        default:
            break;
    }
}

const productospopulares = () => {
    let poulares = [...productos].sort((a, b) => b.comprados - a.comprados).slice(0, 5);
    return poulares;
}

const init = (products) => {
    let main_div = document.querySelector(`.menus`);
    products.map((product) => {
        let div = creacioncajas(product);
        main_div.appendChild(div)
    })
}

// Creacion de cajas
const creacioncajas = (producto) => {
    const div = document.createElement('div');
    div.className = 'col';
    div.innerHTML = `
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${producto.imagen}"/>
                <div class="card-body">
                    <p class="card-text fw-bold">${producto.nombre}</p>
                    <p class="card-text">${producto.descripcion}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <p class="text-secondary">L. ${producto.precio}.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    return div
}