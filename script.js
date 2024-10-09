
document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        setTimeout(() => {
            product.style.opacity = 1;
            product.style.transform = 'translateY(0)';
        }, index * 200);
    });

    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.style.opacity = 1;
            testimonial.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
document.getElementById("inquiryForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name === "" || email === "" || phone === "" || message === "") {
        document.getElementById("status").innerHTML = "All fields are required!";
        document.getElementById("status").style.color = "red";
        return;
    }

    // Send the form data to WhatsApp
    sendWhatsAppMessage(name, email, phone, message);

    // Simulate email submission success
    document.getElementById("status").innerHTML = "Inquiry submitted successfully!";
    document.getElementById("status").style.color = "green";

    // Clear form fields after submission
    document.getElementById("inquiryForm").reset();
});

function sendWhatsAppMessage(name, email, phone, message) {
    const whatsappURL = `https://wa.me/+919898490277?text=Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(whatsappURL, '_blank'); // Open WhatsApp with pre-filled message
}


let cart = [];
let totalPrice = 0;

function addToCart(productName, selectId) {
    const selectElement = document.getElementById(selectId);
    const selectedOption = selectElement.options[selectElement.selectedIndex].value;
    const price = parseInt(selectElement.getAttribute("data-price"));

    // Add item to cart
    cart.push({ name: productName, quantity: selectedOption, price: price });
    totalPrice += price;

    updateCart();
    alert(`Added ${selectedOption} of ${productName} to cart.`);
}

function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    cartItemsElement.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} (${item.quantity}) - ₹${item.price}`;
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-button";
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
    });

    document.getElementById("total-price").textContent = `Total: ₹${totalPrice}`;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function sendOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const orderDetails = cart.map(item => `${item.name}  (${item.quantity})  - ₹${item.price}`).join('');
    const message = `Order Details:${orderDetails} 
    Total: ₹${totalPrice}`;
    const phoneNumber = "+919898490277"; // Replace with your WhatsApp number
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    alert("Thank you for your order!");
    cart = [];
    totalPrice = 0;
    updateCart();
                                                                                  }
