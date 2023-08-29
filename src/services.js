const products = [
    {id: '1', name: 'Picada Criolla', price: 15000, category: 'picadas', img:'https://i1.wp.com/www.quilmescompra.com.ar/wp-content/uploads/2018/12/picada-criolla-p2-personas-D_NQ_NP_569121-MLA20723515830_052016-F.jpg?fit=800%2C491&ssl=1', stock: 10, description: 'Picada criolla con diferentes quesos gourmet, embutidos, frutos secos y panes caseros'},
    {id: '2', name: 'Picada de Mar', price: 25000, category: 'picadas', img: 'https://i0.wp.com/saboryestilo.com.mx/wp-content/uploads/2019/09/Camarones-al-coco.jpg?fit=640%2C303&ssl=1', stock: 8, description: 'Picada de mar con rabas, langostinos, mejillones, tiradito y ceviche'},
    {id: '3', name:'Torta Marquise', price: 10000, category:'tortas', img:'https://truffle-assets.tastemadecontent.net/79143177-marquise-1920x1080-thumbnail.jpg', stock: 2, description: 'Torta marquise con dulce de leche y frutos rojos'},
    {id: '4', name:'Torta Bombon', price: 9000, category:'tortas', img:'https://www.recetasnestle.cl/sites/default/files/srh_recipes/74f193048a7574df49a2c0afb50cb033.jpg', stock: 2, description: 'Torta bombon con mousse de chocolate y base de chocolate'},
    {id: '5', name:'Cheesecake de Limon', price: 7000, category:'tortas', img:'https://vinomanos.com/wp-content/uploads/2021/01/Chees-min.jpg', stock: 2, description: 'Cheescake de Limon'},
    {id: '6', name:'Montaditos de Mar', price: 15000, category:'entradas', img:'https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/natura-2022-abril-recorteweb-655x475-montadito_de_mar.jpg?itok=EMGGmjNq', stock: 5, description: 'Montaditos de mar en tostadas, masa brise. Salmon - Langostinos - Calameretis'},
    {id: '7', name:'Empanadas', price: 9000, category:'entradas', img:'https://assets.elgourmet.com/wp-content/uploads/2023/03/cover_fpa6sn8vqc_empanadas.jpg', stock: 5, description: 'Empanadas de humita, de carne frita, salteñas y de pollo al verdeo'},
    {id: '8', name:'Brochettes', price: 10000, category:'entradas', img:'https://assets.bonappetit.com/photos/57ad3f29f1c801a1038bcadb/master/w_1280%2Cc_limit/moroccan-chicken-brochettes.jpg', stock: 5, description: 'Brochettes calientes de cerdo, ave y cuadril'}
]

// getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // buscamos el producto por id
        const product = products.find((p) => p.id === id);
  
        // si existe el producto
        if (product) {
          resolve(product);
        } else {
          reject("No existe el producto");
        }
      }, 1000);
    });
  };
  
  // getProducts() -> devuelve todos los productos
  // getProducts("phones") -> devuelve todos los productos de la categoría phones
  // getProducts("tablets") -> devuelve todos los productos de la categoría tablets
  // getProducts("notebooks") -> devuelve todos los productos de la categoría notebooks
  export const getProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Si category existe filtramos por categoría
        // Si category no existe devolvemos todos los productos
  
        const productsFiltered = category
          ? products.filter((product) => product.category === category)
          : products;
  
        resolve(productsFiltered);
      }, 1000);
    });
  };