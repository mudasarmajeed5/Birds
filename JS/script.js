$(document).ready(function(){
    let offset70 = {offset:"70%"}
    let offset50 = {offset:"50%"}
    $(".creating_experiences").waypoint(function(){
        $(".creating_experiences").addClass("animate__animated animate__fadeInDown");
    },offset70);
    $(".digital_landscape").waypoint(function(){
        $(".digital_landscape").addClass("animate__animated animate__fadeInUp");
    },offset70);
    $(".card1").waypoint(function(){
        $(".card1").addClass("animate__animated animate__fadeInLeft");
    },offset70);
    $(".card3").waypoint(function(){
        $(".card3").addClass("animate__animated animate__fadeInRight");
    },offset70);
    $(".card2").waypoint(function(){
        $(".card2").addClass("animate__animated animate__fadeInUp");
    },offset50);
});