

const products = [
    { "id": "1", "nombre": "VueJS", "precio": "25", "img": "assets/1.webp", "enlace": "producto.html", "categoria": "Framework" }, 
    { "id": "3", "nombre": "ReactJS", "precio": "25", "img": "assets/3.webp", "enlace": "producto.html", "categoria": "Framework" }, 
    { "id": "2", "nombre": "AngularJS", "precio": "25", "img": "assets/2.webp", "enlace": "producto.html", "categoria": "Framework" }, 
    { "id": "5", "nombre": "NodeJS", "precio": "25", "img": "assets/5.webp", "enlace": "producto.html", "categoria": "Lenguaje" }, 
    { "id": "4", "nombre": "Redux", "precio": "25", "img": "assets/4.webp", "enlace": "producto.html", "categoria": "Librería" }, 
    { "id": "7", "nombre": "HTML5", "precio": "25", "img": "assets/7.webp", "enlace": "producto.html", "categoria": "Lenguaje" }, 
    { "id": "6", "nombre": "SASS", "precio": "25", "img": "assets/6.webp", "enlace": "producto.html", "categoria": "Herramienta" }, 
    { "id": "9", "nombre": "BULMA", "precio": "25", "img": "assets/9.webp", "enlace": "producto.html", "categoria": "Framework" }, 
    { "id": "8", "nombre": "GitHub", "precio": "25", "img": "assets/8.webp", "enlace": "producto.html", "categoria": "Herramienta" }, 
    { "id": "11", "nombre": "Drupal", "precio": "25", "img": "assets/11.webp", "enlace": "producto.html", "categoria": "Herramienta" }, 
    { "id": "10", "nombre": "TypeScript", "precio": "25", "img": "assets/10.webp", "enlace": "producto.html", "categoria": "Lenguaje" }, 
    { "id": "13", "nombre": "GraphQL", "precio": "25", "img": "assets/13.webp", "enlace": "producto.html", "categoria": "Librería" }, 
    { "id": "12", "nombre": "JavaScript", "precio": "25", "img": "assets/12.webp", "enlace": "producto.html", "categoria": "Lenguaje" }, 
    { "id": "14", "nombre": "Wordpress", "precio": "25", "img": "assets/14.webp", "enlace": "producto.html", "categoria": "Herramienta" }
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 200)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))  // Changed products.id to prod.id
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Filtra los productos por la categoría que se pasa como argumento
            resolve(products.filter(prod => prod.categoria === category));
        }, 200);
    });
};