document.addEventListener("DOMContentLoaded", () => {
    
    const envelope = document.getElementById("envelope");
    const btnOpen = document.getElementById("open");
    const btnClose = document.getElementById("close");
    const title = document.querySelector(".envelope-title");
    const heartContainer = document.querySelector(".heart-container");

    // Abrir sobre
    btnOpen.addEventListener("click", () => {
        envelope.classList.add("open");
        envelope.classList.remove("close");
        title.classList.add("fade-out"); 
    });

    // Cerrar sobre
    btnClose.addEventListener("click", () => {
        envelope.classList.remove("open");
        title.classList.remove("fade-out"); 
        
        setTimeout(() => {
            envelope.classList.add("close");
        }, 300);
    });

    // Lluvia de corazones del fondo
    function createBackgroundHeart() {
        const heart = document.createElement("div");
        heart.classList.add("bg-heart");

        // CORRECCIÓN: Rango entre 2% y 93% para que los corazones del extremo derecho nunca se corten
        const randomX = (Math.random() * 91) + 2;
        heart.style.left = `${randomX}%`;

        // Tamaños variados para efecto de profundidad
        const randomSize = Math.random() * 15 + 12;
        heart.style.width = `${randomSize}px`;
        heart.style.height = `${randomSize}px`;

        // Duración suave de subida (entre 4.5 y 8.5 segundos)
        const randomDuration = Math.random() * 4 + 4.5;
        heart.style.animation = `floatUp ${randomDuration}s ease-in forwards`;

        heartContainer.appendChild(heart);

        // Limpieza de memoria
        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }

    // Lanza un corazón cada 450ms para que sea continuo pero sutil
    setInterval(createBackgroundHeart, 450);
});