$(document).ready(function(){


    $(document).scroll(function(){

        var sc = $(this).scrollTop();

        if(sc > 215){
            $("header").addClass("fix");
           }

        else if(sc == 0){
            $("header").removeClass("fix");
        }


    });



});
