
const navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-230px";
}



//    Tabs script here   //


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("img");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();



//  Initialize Swiper  //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     976: {
    //         slidesPerView: 3,
    //         },
    //             768: {
    //                 slidesPerView: 2,
    //             },
    // },
});

function updateSlidesPerView() {
    if (window.innerWidth < 550) {
        swiper.params.slidesPerView = 1;
    } else if (window.innerWidth < 768) {
        swiper.params.slidesPerView = 2;
    } else {
        swiper.params.slidesPerView = 3;
    }
    swiper.update(); // Update swiper to apply changes
}

// Initial call
updateSlidesPerView();

// Listen to window resize events
window.addEventListener('resize', updateSlidesPerView);

