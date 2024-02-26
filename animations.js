$(document).ready(function () {
    let offset70 = { offset: "70%" }
    let offset50 = { offset: "50%" }
    let offset90 = { offset: "90%" }
    $(".creating_experiences").waypoint(function () {
        $(".creating_experiences").addClass("animate__animated animate__fadeInDown");
    }, offset70);
    $(".digital_landscape").waypoint(function () {
        $(".digital_landscape").addClass("animate__animated animate__fadeInUp");
    }, offset70);
    $(".card1").waypoint(function () {
        $(".card1").addClass("animate__animated animate__fadeInLeft");
    }, offset70);
    $(".card3").waypoint(function () {
        $(".card3").addClass("animate__animated animate__fadeInRight");
    }, offset70);
    $(".card2").waypoint(function () {
        $(".card2").addClass("animate__animated animate__fadeInUp");
    }, offset90);
    $(".ourwork").waypoint(function () {
        $(".ourwork").addClass("animate__animated animate__fadeInUp");
    }, offset70);
    $(".case_studies").waypoint(function () {
        $(".case_studies").addClass("animate__animated animate__fadeInLeft");
    }, offset70);

    
    // Animation of Blog Page
    
    // First Changes Heads of of these
    $(".head1").waypoint(function () {
        $(".head1").addClass("animate__animated animate__slideInDown");
    }, offset90);
    $(".head2").waypoint(function () {
        $(".head2").addClass("animate__animated animate__slideInDown");
    }, offset90);
    $(".head3").waypoint(function () {
        $(".head3").addClass("animate__animated animate__slideInDown");
    }, offset90);
    $(".head4").waypoint(function () {
        $(".head4").addClass("animate__animated animate__slideInDown");
    }, offset90);
    $(".head5").waypoint(function () {
        $(".head5").addClass("animate__animated animate__slideInDown");
    }, offset90);

    
    // Don't need for now, I will run it later!


    // Changing blog animation
    // $("#blog1").waypoint(function () {
    //     $("#blog1").addClass("animate__animated animate__fadeInRight");
    // }, offset90);
    // $("#blog2").waypoint(function () {
    //     $("#blog2").addClass("animate__animated animate__fadeInRight");
    // }, offset90);
    // $("#blog3").waypoint(function () {
    //     $("#blog3").addClass("animate__animated animate__fadeInRight");
    // }, offset90);
    // $("#blog4").waypoint(function () {
    //     $("#blog4").addClass("animate__animated animate__fadeInRight");
    // }, offset90);
    // $("#blog5").waypoint(function () {
    //     $("#blog5").addClass("animate__animated animate__fadeInRight");
    // }, offset90);

});
