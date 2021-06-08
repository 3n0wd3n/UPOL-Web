/* MOBILE MENU */
var mobileMenu = document.querySelector('.header-menu-mobile-version');
mobileMenu.addEventListener("click", function(e) {
    document.querySelector('.navigation').classList.toggle('open');
});



/* FAQ.html*/
var faqCounter = document.getElementsByClassName("faq__collapsible");

for (var i = 0; i < faqCounter.length; i++) {
    faqCounter[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var faqSib = this.nextElementSibling;

        if (faqSib.style.maxHeight) {
            faqSib.style.maxHeight = null;
        } else {
            faqSib.style.maxHeight = faqSib.scrollHeight + "px";
        }
    });
}

var slideIndex = 0;
showSlide(slideIndex);

function moveToNextSlide() {
    showSlide(slideIndex + 1);
}

function moveToPrevSlide() {
    showSlide(slideIndex - 1);
}

function moveToSlide(n) {
    showSlide(n);
}

// změna slidu
function showSlide(n) {
    var i = 0;
    var slides = document.getElementsByClassName("slideshow__slide");
    console.log(slides, slides.length, n)

    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
    }

    slides[slideIndex].style.opacity = 1;
}

var galleryMenu = document.getElementById('photo-album__menu');
if (galleryMenu) {
    galleryMenu.addEventListener("click", function (e) {
        document.querySelectorAll("#photo-album__menu > li.open").forEach(
            item => item.classList.remove("open")
        );
        e.target.classList.add('open');
        document.querySelectorAll(".photo-album__article").forEach(
            item => item.classList.remove("clicked")
        );
        var clicked = e.target.textContent.split(' ')[0];
        if (clicked == 'Show') {
            document.querySelectorAll(".photo-album__article").forEach(
                item => item.classList.add("clicked")
            );
        } else {
            document.querySelector('.photo-album__article.' + clicked).classList.add('clicked')
        }
    });
}
