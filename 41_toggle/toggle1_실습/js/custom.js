$(document).ready(function(){


    $(".toggle p").click(function(){

        $(".toggle").toggleClass("on2"); //클래스가 없으면 주고, 있으면 빼고

        $(".toggle p").toggleClass("on");

    });

});
