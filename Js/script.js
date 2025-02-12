// Seleccionamos los botones
const btnSi = document.querySelector('.btn-si');
const btnNo = document.querySelector('.btn-no');

// Acción para el botón "Sí"
btnSi.addEventListener('click', () => {
    window.location.href = 'Templates/SanValentin.html'; // Redirige a una página futura
});

// Acción para el botón "No"
btnNo.addEventListener('click', () => {
    window.location.href = 'https://www.youtube.com/shorts/t8DsKIqpNeY'; // Redirige a un video
});