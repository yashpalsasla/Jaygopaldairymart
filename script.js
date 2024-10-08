
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
