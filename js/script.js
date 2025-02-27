$(function(){
    $("#night").click(function(){
        $(".imageDay").addClass("imageNight")
    })
    $("#dayBTN").click(function(){
        $(".imageDay").removeClass("imageNight")
    })
    $("#dayNight").click(function(){
        $(".imageDay").toggleClass("imageNight")
    })
    $("#fadeInOut").click(function(){
        $(".imageDay").fadeToggle(1000)
    })
    $("#slideUPDown").click(function(){
        $(".imageDay").slideToggle(1000)
    })
})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});