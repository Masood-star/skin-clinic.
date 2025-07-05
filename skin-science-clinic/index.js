document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the Services Slider using the Swiper.js library
    const servicesSwiper = new Swiper('.services-swiper', {
        
        // This makes the slider start over again after the last slide
        loop: true,
        
        // This will automatically change the slide
        autoplay: {
            delay: 10000, // 10000 milliseconds = 10 seconds
            disableOnInteraction: false, // Slider will not stop if the user interacts with it
        },

        // This creates the small navigation dots at the bottom
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // Allows users to click the dots to change slides
        },
    });

    console.log("Services slider has been initialized.");

});