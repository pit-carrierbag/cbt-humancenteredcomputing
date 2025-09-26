import Alpine from 'alpinejs'
window.Alpine = Alpine;

Alpine.store('langSwitcher', {
    lang: 'de',
    texts: null,
    loading: true,

    async loadTexts() {
        try {
            const response = await fetch('/lang/texts.json');
            if (!response.ok) throw new Error('Error loading texts');
            this.texts = await response.json();
            this.loading = false;
        } catch (error) {
            console.error("Error loading texts:", error);
            this.texts = {};
        }
    },

    switchLang(lang) {
        if (lang === this.lang) return;
        console.log("switchLang to " + lang);
        this.lang = lang;
    }
});

// Slider logic
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slider = document.getElementById("slider");
    if (!slider) return;

    const slideCount = slider.children.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    window.nextSlide = function () {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }

    window.prevSlide = function () {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }

    // --- Swipe logic (touch + mouse) ---
    let startX = 0;
    let isDragging = false;

    function onTouchStart(e) {
        isDragging = true;
        startX = e.touches ? e.touches[0].clientX : e.clientX;
    }

    function onTouchEnd(e) {
        if (!isDragging) return;
        const endX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide(); // swiped left
            } else {
                prevSlide(); // swiped right
            }
        }

        isDragging = false;
    }

    slider.addEventListener("touchstart", onTouchStart);
    slider.addEventListener("touchend", onTouchEnd);

    slider.addEventListener("mousedown", onTouchStart);
    slider.addEventListener("mouseup", onTouchEnd);
});


// Initialise Alpine after everything
await Alpine.store('langSwitcher').loadTexts();
Alpine.start();
