//menu pegajoso
$(document).ready(function(){
    var altura = $(".menu").offset().top;

    $(Window).on("scroll", function(){
        if ($(Window).scrollTop() > altura){
            $(".menu").addClass("menu-fixed");
        }else{
            $(".menu").removeClass("menu-fixed");
        }
    });
});

//hide or show menu when are responsive
$(Window).resize(function(){
    if ($(Window).width() <= 800){
        $("nav").hide();
    }else{
        $("nav").show();
    }
});

//transition of menu
$("#bt_menu").click(function(){
    $("nav").slideToggle();
});

//menu pegajoso responsive
$(document).ready(function(){
    var altura = $("#b_menu").offset().top;

    $(Window).on("scroll", function(){
        if ($(Window).scrollTop() > altura){
            $("#b_menu").addClass("menu-fixed");
        }else{
            $("#b_menu").removeClass("menu-fixed");
        }
    });
});
