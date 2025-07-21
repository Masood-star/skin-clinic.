document.addEventListener('DOMContentLoaded', function() {

    const showFormBtn = document.getElementById('show-form-btn');
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const formContainer = document.getElementById('interactive-form-container');

    if (showFormBtn && contactForm && successMessage) {
        // Show the form when the initial button is clicked
        showFormBtn.addEventListener('click', function() {
            showFormBtn.style.display = 'none';
            contactForm.classList.remove('hidden');
        });

        // Handle the form submission in the background (AJAX)
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            
            fetch("https://formsubmit.co/skinscienceclinicgokak@gmail.com", {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.style.display = 'none';
                    successMessage.classList.remove('hidden');
                } else {
                    alert('Oops! There was a problem submitting your form. Please try again.');
                }
            })
            .catch(error => {
                alert('Oops! There was a network issue. Please check your connection.');
            });
        });
    }

    // This handles the redirect back from FormSubmit IF you use the traditional method
    if (window.location.hash === "#form-success") {
        if(formContainer) {
            formContainer.innerHTML = '<h3>Thank You!</h3><p>Your request has been submitted. We will call you shortly.</p>';
            formContainer.style.textAlign = 'center';
            formContainer.style.color = '#fff';
        }
    }
});