window.onload = function(){
    //获取屏幕高度
    var windowwidth = $(window).width();

    //将获取的屏幕的高度赋值给特效这个div
    $("#xiala_ear").width(windowwidth);

    //获取texiao 这个div的位置
    var offset = $(".xiala").offset();
    var l = offset.left;
    $("#xiala_ear").css("left", -l);

    //第一步：hover（移入的事件，移出事件）
    $(".xiala").hover(function() {
            document.getElementById("xiala_ear").style.display = "";
            $(this).find("#xiala_ear").animate({
                height: 360
            }, 300, function() {
                $(this).addClass("h")
            });
        }, function() {
            document.getElementById("xiala_ear").style.display = "none";
            $(this).find("#xiala_ear").animate({
                height: 0
            }, 300, function() {
                $(this).removeClass("h")
            });
        }
    );

   
}