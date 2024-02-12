$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            items: 1,
            loop: true,
            margin: 2,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
            },
            autoplaySpeed: 2000,
        }
    );
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })
});

document.getElementById("clickButton").addEventListener("click", function() {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleTimeString() + " on " + currentDate.toLocaleDateString();
    alert("When I click the pop-up at " + dateString);
});

document.getElementById("clickButton2").addEventListener("click", function() {
    let currentDate = new Date();
    let dateString = currentDate.toLocaleTimeString() + " on " + currentDate.toLocaleDateString();
    alert("When I click the pop-up at " + dateString);
});