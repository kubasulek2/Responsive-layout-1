document.addEventListener("DOMContentLoaded", function () {
    //zmienne plus pokazanie pierwszego slajdu

    var slideIndex = 1;
    var slides = document.querySelectorAll(".slide");
    var circles = document.querySelectorAll('.circle');
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
        console.log(slides[slideIndex-1]);
        console.log(slideIndex);
        slides[slideIndex-1].style.display ='block';
    }


    //event listenery
    document.querySelector(".prev-button").addEventListener("click", function(e){
        e.preventDefault();
        changeSlide(-1)
    });

    document.querySelector(".next-button").addEventListener("click",function (e){
        e.preventDefault();
        changeSlide(1)
    });

    for(var i = 0; i < circles.length; i++){
        circles[i].onclick = function (a) {
            return function () {
                var slide = a+1;
                chooseSlide(slide)
            }
        }(i);
    }
});


