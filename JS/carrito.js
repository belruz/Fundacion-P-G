function prueba() {
    console.log("funcion de prueba")
};

function addToCar(){
// nose usa pero no la quiero borrar
};

function guardarProductos(productos) {
    localStorage.setItem("productos", JSON.stringify(productos))
}

function obtenerProductos(){
    return JSON.parse(localStorage.getItem("productos")) || []
}

function agregarProductos(producto){
    console.log('inivio fr ls funcion', producto);
    const productos = obtenerProductos()
    console.log('productos', productos);
    productos.push(producto)
    guardarProductos(productos)
}

