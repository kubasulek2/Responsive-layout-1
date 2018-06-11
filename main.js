document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 1;
    var slides = document.querySelectorAll(".slide");
    var cirlces = document.querySelectorAll('.circle');

    showSlides(slideIndex);

    function showSlides(n) {

        for(var i = 0; i < slides.length ; i++){
            slides[i].style.display = "none";
            }
        slides[n-1].style.display ='block';

    }

    function changeSlide(n) {
        slideIndex+=n;
        if(slideIndex>slides.length){
            slideIndex = 1
        }else if(slideIndex<1){
            slideIndex = 5
        }
        showSlides(slideIndex);

    }
    document.querySelector(".prev-button").addEventListener("click", function(e){
        e.preventDefault();
        changeSlide(-1)
    });

    document.querySelector(".next-button").addEventListener("click",function (e){
        e.preventDefault();
        changeSlide(1)
    });

    // function chooseSlide(n){
    //
    // }


 });