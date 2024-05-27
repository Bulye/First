document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})

$(function(){

     
    var  header = $("#header"),
         introH = $("#intro").innerHeight(),
         scrolloffset = 0;


    $(window).on("scroll", function(){
        
        scrolloffset = $(this).scrollTop();

        console.log(scrolloffset);

    console.log(introH);
});


// scroll

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset 
    }, 500);
});

});