document.addEventListener("DOMContentLoaded", function () {
    //zmienne plus pokazanie pierwszego slajdu

    const circles = document.querySelectorAll('.circle');
    const prevButtons = document.querySelectorAll(".prev-button");
    const nextButtons = document.querySelectorAll(".next-button");
    const expandMenuBtn1 = document.querySelector("nav>ul>li:last-child>a");
    const menuToExpand1 = expandMenuBtn1.parentElement.querySelector("ul");
    const expandMenuBtn2 = document.querySelector("ul.hidden>li:last-child>a");
    const menuToExpand2 = expandMenuBtn2.parentElement.querySelector("ul");
    const slides = document.querySelectorAll(".slide");
    let slideIndex = 1;
    let mobileViewport = window.matchMedia("screen and (max-width: 1024px)");


    showSlides(slideIndex);


    // ustawienie carety w menu w zaleznosci od szerokosci ekranu

    if(mobileViewport.matches){

        document.getElementById("caret").classList.remove("fa-caret-right");
        document.getElementById("caret").classList.add("fa-caret-down")
    }

    else{

        document.getElementById("caret").classList.remove("fa-caret-down");
        document.getElementById("caret").classList.add("fa-caret-right")
    }

    //funkcje slajdy

    function changeSlide(n) {showSlides(slideIndex +=n)}

    function chooseSlide(n){showSlides(slideIndex = n)}

    function showSlides(n){

        if (n > slides.length) {slideIndex = 1}
        else if (n < 1){slideIndex = 5}

        for(var i = 0; i < slides.length ; i++){
            slides[i].style.display = "none";
        }

        for(var i = 0; i < circles.length ; i++){
            circles[i].classList.remove("active");
        }

        slides[slideIndex-1].style.display ='block';
        circles[slideIndex-1].classList.add("active");
    }

    //event listenery slajdy


    for(let i = 0; i < prevButtons.length; i++){

        prevButtons[i].addEventListener("click", function(event){

            event.preventDefault();
            changeSlide(-1)
        })

    }

    for(let i = 0; i < nextButtons.length; i++){

        nextButtons[i].addEventListener("click", function(event){

            event.preventDefault();
            changeSlide(1)
        })

    }

    for(var i = 0; i < circles.length; i++){

        circles[i].onclick = function (a) {
            return function () {

                let slide = a + 1;

                chooseSlide(slide);
            }
        }(i);
    }

    //menu dla mobile

    mobileViewport.addListener(function (mq) {

        if(mq.matches){

            document.getElementById("caret").className = "fa fa-caret-down"
        }

        else{

            document.getElementById("caret").className = "fa fa-caret-right"
        }
    });

    //expandable menu animation

    function getHeight(elem) {
        let height = elem.scrollHeight + "px";
        return height;
    }

    function show(elem) {

        let height = getHeight(elem);
        elem.style.height =  height;
        console.log(height)
    }

    function hide(elem){

        if (menuToExpand1.style.overflow === "visible") {

            window.setTimeout(function () {
                menuToExpand1.style.overflow = "hidden";
            }, 250)
        }

        if (menuToExpand2.style.height !== "0") {

            menuToExpand2.style.height = "0";
            window.setTimeout(function () {
                elem.style.height = "0"
            },250)
        }else{
            elem.style.height = '0';
        }
    }

    function toggle(elem){
        let height = parseInt(elem.style.height);
        elem.parentElement.style.pointerEvents = "none";
        window.setTimeout(function () {
            elem.parentElement.style.pointerEvents = "auto"
        },260);

        if(height !== 0){
            hide(elem)
        }else{
           show(elem)
        }
    }

    expandMenuBtn1.addEventListener("click", function (event) {
        toggle(menuToExpand1)
    });
    expandMenuBtn2.addEventListener("click", function (event) {
        menuToExpand1.style.overflow = "visible";
        toggle(menuToExpand2);
    })
});




