$(document).ready(function(){
$(".icons").click(function(){
    $(this).children(".hide").slideToggle('slow');
    $(this).children(".show").toggle('slow');
});
});
$(document).ready(function(){
    $(".card").hover(function(){
        $(this).children(".portfolio").fadeToggle('slow')
    });
});