$(function () {
	//всплывающее модальное окно
    $('#btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    //всплывающее модальное окно
    $('#modal').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

     // Fixed navigation

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150){  
            $('nav').addClass("sticky");
        }
        else{
            $('nav').removeClass("sticky");
        }
    });
});