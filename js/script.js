document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById('slideshow');
    let currentSlide = 0;
    const totalSlides = 8;

    // Crear los slides
    for (let i = 1; i <= totalSlides; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url("assets/imagenes/header/foto${i}.webp")`;
        slideshow.appendChild(slide);
    }

    // Obtener todos los slides
    const slides = document.querySelectorAll('.slide');

    // Mostrar el primer slide
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    // Función para cambiar de slide
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Cambiar de slide cada 2500ms
    setInterval(nextSlide, 2500);
});


// ------------------- Testimonios --------------------




var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperCards = new Swiper(".mySwiperCards", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    cardsEffect: {
        slideShadows: false,
    },
});

var swiperTestimonios = new Swiper(".swiper-testimonios", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


// ------------- contacto whatsapp --------------------

// ============== WHATSAPP CONTACTO ==============

// Número de WhatsApp (fácil de cambiar)
const NUMERO_WHATSAPP = '543814883366';

function abrirWhatsApp() {
    // Obtener los valores de los inputs
    const nombre = document.getElementById('nombreInput').value.trim();
    const mensaje = document.getElementById('mensajeTextarea').value.trim();
    const mensajeError = document.getElementById('mensajeErrorContacto');

    // Validar que los campos no estén vacíos
    if (nombre === '' || mensaje === '') {
        mensajeError.textContent = '⚠️ Por favor completa todos los campos';
        mensajeError.style.display = 'block';

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensajeError.style.display = 'none';
        }, 3000);

        return;
    }

    // Crear el mensaje con el formato solicitado
    const mensajeWhatsApp = `Hola, mi nombre es ${nombre} y mi consulta es:\n${mensaje}`;

    // Codificar el mensaje para URL
    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

    // Crear la URL de WhatsApp
    const urlWhatsApp = `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeCodificado}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(urlWhatsApp, '_blank');

    // Limpiar los campos después de enviar
    document.getElementById('nombreInput').value = '';
    document.getElementById('mensajeTextarea').value = '';
}




// -------------------- OFERTA ---------------------------
const contacto_oferta = '543814883366';

document.getElementById('botonContactoOferta').addEventListener('click', function () {
    const mensaje = encodeURIComponent('¡Hola! Me interesa consultar sobre sus servicios de eventos.');
    const url = `https://wa.me/${contacto_oferta}?text=${mensaje}`;
    window.open(url, '_blank');
});