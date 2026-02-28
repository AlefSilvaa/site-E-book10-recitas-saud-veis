// Abrir modal
const modal = document.getElementById('paymentModal');
const btn = document.getElementById('buyBtn');
const span = document.getElementsByClassName('close')[0];
const form = document.getElementById('paymentForm');
const successMessage = document.getElementById('successMessage');

btn.onclick = function() {
    modal.style.display = 'block';
}

// Fechar modal
span.onclick = function() {
    modal.style.display = 'none';
    successMessage.textContent = '';
    form.reset();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        successMessage.textContent = '';
        form.reset();
    }
}

// Simulação de pagamento
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    successMessage.textContent = `Obrigado ${name}! Seu e-book será enviado para ${email}.`;
    form.reset();
});