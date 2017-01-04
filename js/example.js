   <script type="text/javascript">
            $(document).ready(function () {
                $('#page_wrapper').append('<div id="top">Back to Top</div>');
                $(window).scroll(function () {
                    if ($(window).scrollTop() != 0) {
                        $('#top').fadeIn();
                    } else {
                        $('#top').fadeOut();
                    }
                });
                $('#top').click(function () {
                    $('html, body').animate({ scrollTop: 0 }, 500);
                });
            });
     </script>
//---------------------------------//
<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['tqForm'];
if (!theForm) {
    theForm = document.tqForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>
 <script type='text/javascript'> $('body').attr('id', 'home'); </script>
<div>
//---------------------------------//

//------------------------------------//
<script type="text/javascript">
function loadfb() {
var lp = $("#footer_left").height();
$(".footer-background").addClass("show").css("top", lp + 15);
}
$(window).load(function () {
loadfb();
//            if ($(window).width()>768)
//                document.getElementById("txtHotline").innerHTML = 'lbl_hotline_number - undefined';
});
$(window).resize(function () {
loadfb();
if(window.matchMedia("only screen and (max-width: 480px) and (orientation : portrait)").matches) {
var pW = $(window).width();
$('.top-links .txtsearch').css('width', pW + 'px');
}
else{
$('.top-links .txtsearch').css('width', '');
}
});
function myWebsitelinksChange() {
var x = $("#selWebsitelinks").val();
if(x.length > 0) {
var win = window.open(x, '_blank');
if(win){
//Browser has allowed it to be opened
win.focus();
}
else {
//Broswer has blocked it
alert('Please allow popups for this site');
}
}
}

$(document).ready(function () {

Captcha();
$('.imgCatcha').click(function () {
Captcha();
});
$('.cmdCustomerReviews').click(function () {
return Valid_CustomerReviews(
'.txtcustomerreviewsName', 'Vui lòng nhập họ & tên', 'Họ & Tên',
'.txtcustomerreviewsEmail', 'Vui lòng nhập email hoặc email của Quý khách không đúng định dạng', 'Email',
'.txtcustomerreviewsMessage', 'Vui lòng nhập nội dung', 'Nội dung tin nhắn',
'.txtcustomerreviewsCaptcha', 'Vui lòng nhập mã xác nhận', 'Mã xác nhận'
);
});
$('.bxslideradv').bxSlider({
auto: true,
mode: 'fade',
captions: false,
pager: false,
controls: false
});

$('.wrap-search .txtsearch').live("keypress", function (e) {
if (e.keyCode == 13) {
var kw = $(this).val();
if (kw.length == 0 || kw == 'txt_search - undefined') {
bootbox.alert('error_search_keyword - undefined');
}
else {
window.location.href = "/tim-kiem.html?q=" + kw;
}
return false; // prevent the button click from happening
}
});

});
</script>