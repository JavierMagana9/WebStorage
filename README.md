# WebStorage

Lo primero que he tenido en cuenta es que elementos del documento HTML iban a ser estaticos y cuales dinamicos.

```html
<section id="productos">
        <h2>Productos</h2>
        <ul>

        </ul>
    </section>

    <section id="listaCompra">
        <h2>Mi lista de la compra</h2>
        <ul>
            
        </ul>
    </section>

    <div>
        <button id="borrarTodo">Borrar la lista</button>
    </div>
```


Una vez deidido, elegí que elementos del DOM tenía que capturar para usar posteriormente:

```js
const productosLista = document.querySelector('#productos ul')

const laLista = document.querySelector('#listaCompra ul')

const borrarTodo = document.querySelector('#borrarTodo')
```

Despues decidi que habia que crear para posteriormente pintar, en este caso un array con los productos y otro vacio para luego añadir los productos. Nuestro carrito de la compra.

```js
const arrayProductos = ["Lechuga", "Arroz", "Chocalate", "Queso", "Carne", "Aceite", "Agua", "Tomate"]
const arrayListaCompra = [];
```

una vez decidido esto, pense que acciones necesitaba:

1. pintar la lista de productos: 


´´´js

const pintaProductos = () => {

    arrayProductos.forEach((item) => {
        const li = document.createElement('LI')
        li.innerHTML = `<strong>${item}</strong> <button id="${item}">Añadir</button>`

        fragment.append(li)
    });

    productosLista.append(fragment)

}

```