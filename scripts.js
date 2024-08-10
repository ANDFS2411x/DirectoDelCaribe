// script.js

// Array para almacenar los productos en el carrito
let cart = [];

// Función para añadir productos al carrito
function addToCart(productName, productPrice) {
    // Agrega el producto al array del carrito
    cart.push({ name: productName, price: productPrice });

    // Muestra una notificación visual
    showNotification(`${productName} ha sido añadido al carrito`);

    // Opcional: actualiza el contenido del carrito en la página
    updateCartDisplay();
}

// Función para mostrar notificaciones
function showNotification(message) {
    // Crear un elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;

    // Añadir la notificación al body
    document.body.appendChild(notification);

    // Remover la notificación después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Opcional: función para actualizar el contenido del carrito en la página
function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    if (cart.length === 0) {
        cartElement.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        cart.forEach((item) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
            cartElement.appendChild(itemElement);
        });
    }
}
