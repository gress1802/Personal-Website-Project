window.onload = function(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
         event.preventDefault();
                emailjs.sendForm('service_ckpyv5m', 'template_dwrbhlh', this)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
    });
}