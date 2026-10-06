(function() {
    emailjs.init({
        publicKey: "9JeY4dRhoSlxAaFte"
    });
})();

const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm(
        "service_6i3esp",
        "template_y3qbhbm",
        form
    )
    .then(function() {
        message.textContent = "Messaggio inviato correttamente.";
        form.reset();
    })
    .catch(function(error) {
        message.textContent = "Si è verificato un errore. Riprova.";
        console.error(error);
    });
});