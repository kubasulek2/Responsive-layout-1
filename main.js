document.addEventListener("DOMContentLoaded", function () {
    //zmienne plus pokazanie pierwszego slajdu

    let slideIndex = 1;
    const slides = document.querySelectorAll(".slide");
    const circles = document.querySelectorAll('.circle');
    const prevButtons = document.querySelectorAll(".prev-button");
    const nextButtons = document.querySelectorAll(".next-button");

    let mobileViewport = window.matchMedia("screen and (max-width: 600px)");


    showSlides(slideIndex);

    //funkcje

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

    //event listenery


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
            alert("mobile")
        }

        else{

        }
    })



});




