// Mensaje dinámico en la parte superior de la página
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    const message = "Pour Cinderella💖";
    let i = 0;

    const typeEffect = () => {
        if (i < message.length) {
            title.textContent += message[i];
            i++;
            setTimeout(typeEffect, 150);
        }
    };
    title.textContent = ""; // Limpiar título inicial
    typeEffect();

    // Animación de entrada para imágenes y videos
    const elements = document.querySelectorAll('.gallery img, .videos video');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "scale(1)";
        }, index * 200); // Retraso progresivo
    });

    // Evento al hacer clic en una imagen
    const images = document.querySelectorAll('.gallery img');
    images.forEach((img) => {
        img.addEventListener('click', () => {
            alert(`je t'aime ma wallone. 💕`);
        });
    });
});
