//1.Cuales son los elementos con los que voy a interactuar

const productosLista = document.querySelector('#productos ul')

const laLista = document.querySelector('#listaCompra ul')

const borrarTodo = document.querySelector('#borrarTodo')

//fragment
const fragment = document.createDocumentFragment()

//2.Que es lo que pintaremos luego
const arrayProductos = ["Lechuga", "Arroz", "Chocalate", "Queso", "Carne", "Aceite", "Agua", "Tomate"]

//aqui ya hay que meter el local.storage...
const arrayListaCompra = [];
//4.cuando se realizaran las acciones? al hacer 'click' en varias partes con una delegacion de eventos 

document.addEventListener("click", (ev) => {

    const producto = ev.target.id
    
    const todo = ev.target
    console.log(todo)
    if (arrayProductos.includes(producto)) {
        meterProducto(producto)
        pintaListaCompra()
    }
    if (producto.startsWith('eliminar')) {
        btnEliminar(producto.replace('eliminar', ''))
    }

    if (todo === borrarTodo) {
        borraAbajo()
    }
    
},false)


//3.Que acciones necesito?? Pintar el arrayProductos, con botones a sus lados/ Pintar la lista de la compra/borrar en el boton borrar lista

const pintaProductos = () => {
   // localStorage.setItem("productos", arrayLocalStorage)

    //const arrayLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

    arrayProductos.forEach((item) => {
        const li = document.createElement('LI')
        li.innerHTML = `<strong>${item}</strong> <button id="${item}">Añadir</button>`

        fragment.append(li)
    });

    productosLista.append(fragment)
}

const meterProducto = (producto) => {

    arrayListaCompra.push(producto)
    //console.log(arrayListaCompra)
    localStorage.setItem("arrayListaCompra", JSON.stringify(arrayListaCompra));
}


const pintaListaCompra = () => {
    laLista.innerHTML = ''
    const listaImportada = JSON.parse(localStorage.getItem('arrayListaCompra')) || [];


    listaImportada.forEach((item) => {
        const li = document.createElement('LI')
        li.innerHTML = `<strong>${item}</strong> <button id="eliminar${item}">Eliminar</button>`
        fragment.append(li)
    })
    laLista.append(fragment)
    // console.log(listaImportada)
}

const btnEliminar = (producto) => {
    let listaImportada = JSON.parse(localStorage.getItem('arrayListaCompra')) || [];

    listaImportada = listaImportada.filter(item => item !== producto);

    localStorage.setItem("arrayListaCompra", JSON.stringify(listaImportada));
    pintaListaCompra();
}

const borraAbajo = () => {
    //const listaImportada = JSON.parse(localStorage.removeItem('arrayListaCompra')) || [];
    laLista.innerHTML = ''
    localStorage.removeItem('arrayListaCompra')
    
    
    pintaListaCompra()
}

pintaProductos()
