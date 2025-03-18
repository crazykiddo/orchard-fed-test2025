document.addEventListener('DOMContentLoaded', function() {
    console.log('Tasteology website loaded successfully');
    
    // Anchor click
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();            
            console.log('Clicked element:', this);            
        });
    });
    // Image click
    document.querySelectorAll('img').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();            
            console.log('Clicked element:', this);            
        });

        anchor.addEventListener('click', function (e) {
            e.preventDefault();            
            console.log('Clicked element:', this);            
        });

    });

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);
    
});