
// var _hmt = _hmt || [];
// (function() {
//   var hm = document.createElement("script");
//   hm.src = "https://hm.baidu.com/hm.js?323a9baeefe552b5e4b145a5b233bf8b";
//   var s = document.getElementsByTagName("script")[0]; 
//   s.parentNode.insertBefore(hm, s);
// })();



$(function(){

    // if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    //     window.location.href = "http://www.haishengweb.com/mobile";
    // }

//     $.ajax({ url:"../common/header.html", context: document.body, success: function(sView){
//       $("#header").append($(sView));
//         /*导航栏*/

//             var menu = $('.rm-nav').rMenu({

//             minWidth: '960px',

//             });



//             /*导航栏固定*/

//             if($(window).width()>768){

//                 navScroll(300);

//             }else{

//                 navScroll(225);

//             }



//             function navScroll(num){



//                 window.onscroll = function(){



//                 if($(window).scrollTop()>num){

//                     $(".navWrap").addClass("gudingColor");

//                 }else{

//                     $(".navWrap").removeClass("gudingColor");

//                 }

//                 }

//             }



//             /*导航栏事件*/

//         $('.rm-top-menu li').on({click:function(){

//         var This =$(this);
//         var hei=$('.common-topbar-dropdown').css('height');
//         if(hei=='0px'&& $(this).index()==1){
//         $(".common-topbar-dropdown").css({"height":'auto'});
//         $('.common-topbar-body').slideDown();
//         }
//             },

//         })
     
//         $(".navWrap").on({

//         mouseout:function(e){

//             if(checkHover(e,this)){

//                 $("#J_topbar_2016").slideUp();

//                 }

//             },

//         })     
        
        
//         var current=getQueryString('current');

//         if(current==1){
//             $('.nav_item').each(function(){
//                 if($(this).index()==2){
//                     $(this).find('a').addClass('activity');
//                 }
//             })
//         }

//         if(current==2){
//             $('.nav_item').each(function(){
//                 if($(this).index()==3){
//                     $(this).find('a').addClass('activity');
//                 }
//             })
//         }

//         if(current==3){
//             $('.nav_item').each(function(){
//                 if($(this).index()==4){
//                     $(this).find('a').addClass('activity');
//                 }
//             })
//         }

//         if(current==4){
//             $('.nav_item').each(function(){
//                 if($(this).index()==5){
//                     $(this).find('a').addClass('activity');
//                 }
//             })
//         }

//         if(current==5){
//             $('.nav_item').each(function(){
//                 if($(this).index()==6){
//                     $(this).find('a').addClass('activity');
//                 }
//             })
//         }

//         if(current==6){
//             $('.nav_item').each(function(){
//                 if($(this).index()==7){
//                     $(this).find('a').addClass('activity');
//                 }
//             })
//         }

//         if(current==7){
//             $('.nav_item').each(function(){
//                 if($(this).index()==8){
//                     $(this).find('a').addClass('activity');
//                 }
//             })
//         }

//          // 唤起商桥
//         $(".yanshi ,.dd_service").click(function(event) {

//             if ($('#nb_invite_ok').length > 0) {
            
//                 $('#nb_invite_ok').click();
            
//             }
            
//         });

//    }});


  

/**

* 下面是一些基础函数，解决mouseover与mouserout事件不停切换的问题（问题不是由冒泡产生的）

*/

function checkHover(e, target) {

 if (getEvent(e).type == "mouseover") {

     return !contains(target, getEvent(e).relatedTarget

             || getEvent(e).fromElement)

             && !((getEvent(e).relatedTarget || getEvent(e).fromElement) === target);

 } else {

     return !contains(target, getEvent(e).relatedTarget

             || getEvent(e).toElement)

             && !((getEvent(e).relatedTarget || getEvent(e).toElement) === target);

 }

}


function contains(parentNode, childNode) {

 if (parentNode.contains) {

     return parentNode != childNode && parentNode.contains(childNode);

 } else {

     return !!(parentNode.compareDocumentPosition(childNode) & 16);

 }

}

//取得当前window对象的事件

function getEvent(e) {

 return e || window.event;

}



// 商桥

// $.ajax({ url:"../common/bridge.html", context: document.body, success: function(sView){
//         $("#ddBridge").append($(sView));


//         // 唤起联系客服
//         $(".dd_service").click(function(event) {

//             if ($('#nb_invite_ok').length > 0) {
            
//                 $('#nb_invite_ok').click();
            
//             }
            
//         });

         
//         //商桥的显示隐藏
//         $('.consult').click(function(){
//             $('.dd_bridge').show();
//             $('.img_bridge').hide();
//         })

//         //回到顶部事件

//         $('.bridge_back').on('click','a',function(){
//         $('body,html').animate({
//             scrollTop: 0
//             }, 200);
//             return false;
//         })

//         // 商桥的点击关闭事件

//         $('.dd_close').on('click',function(){
//             $('.dd_bridge').hide();
//             $('.img_bridge').css('display','block');
//         })
    
    
//         $('.img_bridge').on('click',function(){
//             $(this).hide();
//             $('.dd_bridge').css('display','block');
//         })
    


//     }});  


    // 底部

    // $.ajax({ url:"../common/footer.html", context: document.body, success: function(sView){
    //     $("#ddFooter").append($(sView));

    // }});  
})

function getQueryString(key,query) {
    query = query
         ? (/\?/.test(query) ? ('?'+query.split('?')[1]) : query)
         : location.search;
     return (query.match(new RegExp("(?:^\\?|&)" + key + "=(.*?)(?=&|$)")) || ['', null])[1];
 }






