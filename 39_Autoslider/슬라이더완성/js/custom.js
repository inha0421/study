$(document).ready(function(){
    
    //좌우버튼, 동그라미 버튼 연동 //
    
        var wid = $(".slider").width();
        var i = $(".btn li.on").index();
        var len = $(".panel li").length;
    
    $(".prev").click(function(){
        
        
        if(i == 0) {
            
            i = len-1;
            
        
        } else {
            
            i = i - 1;

        }
        
        showSlide(wid,i);
    });
    
    $(".next").click(function(){
        
        if(i == 3) {
            
            i = 0;
            
        
        } else {
            
            i = i + 1;
            
        }
        showSlide(wid,i);
    });
    
    $(".btn li").click(function(){
       
        i = $(this).index();
        
        $(".btn li").removeClass("on");
        $(this).addClass("on");
        
        $(".panel").animate({"margin-left":-wid * i},500);
        
        
    });
   
    var auto = setInterval(function(){
        
            if(i == 0) {

                i = len-1;
                showSlide(wid,i);

            } else {

                i = i - 1;
                showSlide(wid,i);
            }
            
    },3000);
    
    
    $(".slider").mouseenter(function(){
       
        clearInterval(auto);
        
    });
    
    $(".slider").mouseleave(function(){
       
        auto = setInterval(function(){
        
            if(i == 0) {

                i = len-1;
                showSlide(wid,i);

            } else {

                i = i - 1;
                showSlide(wid,i);
            }
            
        },3000);
        
    });
    
    
    function showSlide(wid,i){
		$(".btn li").removeClass("on");
		$(".btn li").eq(i).addClass("on");			
		$(".panel").animate({"margin-left":-wid * i});
	}
    
    
});