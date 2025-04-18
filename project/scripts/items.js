// products.js - Script para cargar productos desde archivo JSON externo

// Función asíncrona para cargar los productos
async function loadProducts() {
    try {
        // Realizamos la petición al archivo JSON
        const response = await fetch('items.json');
        
        // Verificamos si la petición fue exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        // Convertimos la respuesta a formato JSON
        const data = await response.json();
        
        // Obtenemos el contenedor donde mostraremos los productos
        const productsContainer = document.querySelector('.cards-container');
        
        // Comprobamos que exista el contenedor y que haya productos
        if (productsContainer && data.productos && data.productos.length > 0) {
            // Limpiamos el contenedor antes de agregar nuevos productos
            productsContainer.innerHTML = '';
            
            // Creamos y agregamos cada tarjeta de producto
            data.productos.forEach(product => {
                // Creamos los elementos para la tarjeta
                const card = createProductCard(product);
                
                // Añadimos la tarjeta al contenedor
                productsContainer.appendChild(card);
            });
        } else {
            console.error('Contenedor no encontrado o no hay productos disponibles');
        }
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        const productsContainer = document.querySelector('.cards-container');
        if (productsContainer) {
            productsContainer.innerHTML = `
                <div class="error-message">
                    <p>Lo sentimos, ha ocurrido un error al cargar los productos.</p>
                    <p>Por favor, intente nuevamente más tarde.</p>
                </div>
            `;
        }
    }
}

// Función para crear la tarjeta de un producto
function createProductCard(product) {
    // Creamos el elemento principal de la tarjeta
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-id', product.id);
    
    // Creamos el contenido HTML de la tarjeta
    card.innerHTML = `
        <div class="product-image">
            <img src="./img/productos/${product.imagen || 'default-product.jpg'}" alt="${product.nombre}">
            <span class="product-type ${product.tipo.toLowerCase().replace(' ', '-')}">${product.tipo}</span>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.nombre}</h3>
            <p class="product-description">${product.descripcion.substring(0, 100)}${product.descripcion.length > 100 ? '...' : ''}</p>
            <div class="product-details">
                <p class="product-grapes"><strong>Cepas:</strong> ${product.cepas.join(', ')}</p>
                <p class="product-content"><strong>Contenido:</strong> ${product.contenido}</p>
                ${product.graduacion ? `<p class="product-graduation"><strong>Graduación:</strong> ${product.graduacion}</p>` : ''}
            </div>
            <div class="product-footer">
                <span class="product-price">S/ ${product.precio.toFixed(2)}</span>
                <button class="btn-add-cart" data-id="${product.id}">Añadir al carrito</button>
            </div>
        </div>
    `;
    
    // Agregamos evento al botón de añadir al carrito
    const addToCartButton = card.querySelector('.btn-add-cart');
    addToCartButton.addEventListener('click', function() {
        addToCart(product.id);
    });
    
    return card;
}

// Función para añadir producto al carrito (implementar según necesidades)
function addToCart(productId) {
    console.log(`Producto con ID ${productId} añadido al carrito`);
    // Aquí iría la lógica para añadir el producto al carrito
}

// Ejecutamos la función de carga cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadProducts);