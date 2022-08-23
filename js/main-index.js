
window.addEventListener("load", function () {
    /* ----------------------------------------- page loader ----------------------------------------- */
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(function () {
        document.querySelector(".page-loader").style.display = "none";
    }, 600);
    /* ----------------------------------------- animation to scroll ----------------------------------------- */
})



/* ----------------------------------------- toggle navbar ----------------------------------------- */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

/*  close nav when clicking on a navitem  */
document.addEventListener("click", function (e) {
    if (e.target.closest(".nav-item")) {
        toggleNav();
    }
});



/* ----------------------------------------- sticky header ----------------------------------------- */
window.addEventListener("scroll", function () {
    // console.log(this.pageYOffset);
    if (this.pageYOffset > 60) {
        this.document.querySelector(".header").classList.add("sticky");
    }
    else {
        this.document.querySelector(".header").classList.remove("sticky");
    }
})



/* ------------------------------------------ navigation menu ------------------------------------------ */
function random() {
    const
        sidebarMenu = document.querySelector(".nav"),
        navToggler = sidebarMenu.querySelector(".nav-toggler"),
        closeNavBtn = sidebarMenu.querySelector(".nav-toggler.active");


    function showNavMenu() {
        navToggler.classList.add("active");
    }

    function hideNavMenu() {
        closeNavBtn.classList.remove("active");
        fadeOutEffect();
    }

    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }

    // attach an event handler to document
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains('nav-item')) {
            // make sure event.target.hash has a value before overridding default behavior
            if (event.target.hash !== "") {
                // prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // activate new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivate existing active navigation menu 'nav-item'
                sidebarMenu.querySelector(".active").classList.remove("active");
                // if clicked 'nav-item is contain within the navigation menu'
                if (sidebarMenu.classList.contains("active")) {
                    // activate new navigation menu 'nav-item'
                    event.target.classList.add("active");
                    // hide navigation menu
                    hideNavMenu();
                }
                else {
                    let navItems = sidebarMenu.querySelectorAll(".nav-item");
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            // activate the navigation menu 'nav-item'
                            item.classList.add("active");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
        }
    })

} random();


function random2() {
    const
        headerMenu = document.querySelector(".navbar"),
        navToggler = headerMenu.querySelector(".nav-toggler"),
        closeNavBtn = headerMenu.querySelector(".nav-toggler.active");


    function showNavMenu() {
        navToggler.classList.add("active");
    }

    function hideNavMenu() {
        closeNavBtn.classList.remove("active");
        fadeOutEffect();
    }

    function fadeOutEffect() {
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() => {
            document.querySelector(".fade-out-effect").classList.remove("active");
        }, 300)
    }

    // attach an event handler to document
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains('nav-item')) {
            // make sure event.target.hash has a value before overridding default behavior
            if (event.target.hash !== "") {
                // prevent default anchor click behavior
                event.preventDefault();
                const hash = event.target.hash;
                // deactivate existing active 'section'
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                // activate new 'section'
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                // deactivate existing active navigation menu 'nav-item'
                headerMenu.querySelector(".active").classList.remove("active");
                // if clicked 'nav-item is contain within the navigation menu'
                if (headerMenu.classList.contains("active")) {
                    // activate new navigation menu 'nav-item'
                    event.target.classList.add("active");
                    // hide navigation menu
                    hideNavMenu();
                }
                else {
                    let navItems = headerMenu.querySelectorAll(".nav-item");
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            // activate the navigation menu 'nav-item'
                            item.classList.add("active");
                        }
                    })
                    fadeOutEffect();
                }
                // add hash (#) to url
                window.location.hash = hash;
            }
        }
    })
} random2();




// deactivate Canvas from sections exapt 'home-section'
(() => {
    const canvas = document.getElementsByTagName("canvas");
    const totalCanvas = canvas.length;

    for (let i = 0; i < totalCanvas; i++) {
        canvas[i].classList.add("show");


        document.addEventListener("click", (event) => {
            if (event.target.classList.contains('nav-item')) {
                if (event.target.hash !== "" && event.target.hash !== "#home") {
                    canvas[i].classList.remove("show");
                }
                else {
                    canvas[i].classList.add("show");
                }
            }
        })
    }


})();