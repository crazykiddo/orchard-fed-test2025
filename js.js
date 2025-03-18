document.addEventListener('DOMContentLoaded', function() {
    console.log('Tasteology website loaded successfully');

    // Get the modal
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");
    let captionText = document.getElementById("caption");
    let closeBtn = document.querySelector(".close");

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
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      }, false);
    
    // Get the <span> element that closes the modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});