$(".fechar-mobile-caixa").on("click", function(){
    $(".menu-caixa-mobile").removeClass("animate__bounceInDown");
    $(".menu-caixa-mobile").addClass("animate__bounceOutUp");
    $(".fechar-mobile-caixa").on("animationend", function(){
        $(".menu-caixa-mobile").addClass('d-none');
    });
});

$("#menu-mobile-button").on("click", function(){
    $(".menu-caixa-mobile").addClass("animate__bounceInDown");
    $(".menu-caixa-mobile").removeClass("animate__bounceOutUp");
    $(".menu-caixa-mobile").removeClass('d-none');
});

$(".mobile-caixa").on("click", function(){
    $(".menu-caixa-mobile").removeClass("animate__bounceInDown");
    $(".menu-caixa-mobile").addClass("animate__bounceOutUp");
    $(".fechar-mobile-caixa").on("animationend", function(){
        $(".menu-caixa-mobile").addClass('d-none');
    });
});