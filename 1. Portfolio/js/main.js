(function ($) {
    "use strict";

    // ── Theme Toggle ──────────────────────────────────────────
    const body       = document.body;
    const toggleBtn  = document.getElementById('themeToggle');
    const STORAGE_KEY = 'portfolio-theme';

    // Restore saved preference (default: light)
    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'light';
    body.setAttribute('data-theme', savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            const current = body.getAttribute('data-theme');
            const next    = current === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', next);
            localStorage.setItem(STORAGE_KEY, next);
        });
    }
    // ─────────────────────────────────────────────────────────

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }




    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial section commented out in HTML — carousel init kept but commented
    /*
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    */
    
})(jQuery);


// ── Contact Form — Google Form integration ──────────────────
// STEP 1: Replace YOUR_FORM_ID with your Google Form ID
// STEP 2: Replace each entry.XXXXXX with your actual entry IDs
// (get them from the pre-filled link in your Google Form)

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    var GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScK0w9HFKRt-UzzFmvPP_t6QigfIvuaRX-LJmrcKPjRu3e0Q/formResponse';

    var formData = new FormData();
    formData.append('entry.2005620554', document.getElementById('name').value);   
    formData.append('entry.1045781291', document.getElementById('email').value);  
    formData.append('entry.1065046570', document.getElementById('subject').value); 
    formData.append('entry.1166974658', document.getElementById('message').value); 

    fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
    }).then(function () {
        document.getElementById('contactForm').reset();
        var success = document.getElementById('form-success');
        success.style.display = 'block';
        setTimeout(function () { success.style.display = 'none'; }, 4000);
    }).catch(function () {
        alert('Something went wrong. Please try again.');
    });
});

