$(document).ready(function(){
    let offset80 = {offset:"80%"}
    let offset50 = {offset:"50%"}
    let offset90 = {offset:"90%"}
    $(".creating_experiences").waypoint(function(){
        $(".creating_experiences").addClass("animate__animated animate__fadeInDown");
    },offset80);
    $(".digital_landscape").waypoint(function(){
        $(".digital_landscape").addClass("animate__animated animate__fadeInUp");
    },offset80);
    $(".card1").waypoint(function(){
        $(".card1").addClass("animate__animated animate__fadeInLeft");
    },offset80);
    $(".card3").waypoint(function(){
        $(".card3").addClass("animate__animated animate__fadeInRight");
    },offset80);
    $(".card2").waypoint(function(){
        $(".card2").addClass("animate__animated animate__fadeInUp");
    },offset90);
});
