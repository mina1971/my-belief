// لتغير خصائص القائمة عند النزول إلى الأسفل noTransparrent إضافة الخاصية 
$(window).scroll(function(){
    if($(this).scrollTop()>=500){
       $("#navBar").addClass("noTransparrent");
     }else{
       $("#navBar").removeClass("noTransparrent");
     }
    });
$(document).ready(function(){
   $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 1200, function(){});
    
    });
    $('.timer').countTo();
});
// التحقق من إدخال البيانات الصحيحة في نموذج الإرسال
$(document).ready(function() {
  $(function () {
      $("#commentForm").validate();
  });
});
