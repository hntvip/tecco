$(document).ready(function() {
    var slide = $(".bxslider  li");
    var sliderimg, lsfullpage;
    var sections = $("#fullpage .section");

    function loadscrollfullpage() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if ($(window).width() > 992) {
            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

                lsfullpage = $('#fullpage').fullpage({
                    anchors: ['slidehome', 'overview', 'location', 'modelhouse', 'loiich', 'utilities', 'khuyenmai', 'news', 'footer'],
                    menu: '#fullpage_nav ul',
                    verticalCentered: false,
                    scrollOverflow: false,
                    scrollOverflowOptions: {
                        scrollbars: true,
                        mouseWheel: true,
                        hideScrollbars: false,
                        fadeScrollbars: false,
                        disableMouse: false
                    },
                    afterLoad: function(anchorLink, index) {
                        if (index == 1) {
                            $(".hotline-sticky").removeClass("sticky");
                            $(".top-head").removeClass("sticky");
                            $("#gotop").addClass("hidden");
                        } else {
                            $(".hotline-sticky").addClass("sticky");
                            $(".top-head").addClass("sticky");
                            $("#gotop").removeClass("hidden");
                        }
                    },
                    onLeave: function(index, nextIndex, direction) {
                        var leavingSection = $(this);
                        if (sections[nextIndex - 1]) {
                            $(".animated", sections[nextIndex - 1]).addClass('go');
                        }
                        //console.log(nextIndex);

                    },
                    responsiveWidth: 991,
                });
            } else {

                lsfullpage = $('#fullpage').fullpage({
                    anchors: ['slidehome', 'overview', 'location', 'modelhouse', 'loiich', 'utilities', 'khuyenmai', 'news', 'footer'],
                    menu: '#fullpage_nav ul',
                    //sectionsColor: ['#ffffff', '#ffffff', '#ffffff'],
                    verticalCentered: false,
                    scrollOverflow: true,
                    scrollOverflowOptions: {
                        scrollbars: true,
                        mouseWheel: true,
                        hideScrollbars: false,
                        fadeScrollbars: false,
                        disableMouse: false
                    },
                    afterLoad: function(anchorLink, index) {
                        if (index == 1) {
                            $(".hotline-sticky").removeClass("sticky");
                            $(".top-head").removeClass("sticky");
                            $("#gotop").addClass("hidden");
                        } else {
                            $(".hotline-sticky").addClass("sticky");
                            $(".top-head").addClass("sticky");
                            $("#gotop").removeClass("hidden");
                        }
                    },
                    onLeave: function(index, nextIndex, direction) {
                        var leavingSection = $(this);
                        if (sections[nextIndex - 1]) {
                            $(".animated", sections[nextIndex - 1]).addClass('go');
                        }
                        //console.log(nextIndex);

                    },
                    responsiveWidth: 991,
                });
            }
        }
    }

    $(window).resize(function() {
        if (lsfullpage != null)
            $.fn.fullpage.destroy('all');
        loadscrollfullpage();
        if ($(window).width() > 1200) {
            $(".mainslide .bxslider li span.item").height($(window).height() - 95);
            $("#fullpage .auto-height").height($(window).height() - 60);
        } else if ($(window).width() > 992) {
            $(".mainslide .bxslider li span.item").height($(window).height() - 60);
            $("#fullpage .auto-height").height($(window).height() - 60);
        } else {
            $(".mainslide .bxslider li span.item").css('height', '');
            $("#fullpage .auto-height").css('height', '');
        }
    });

    $(document).ready(function() {
        //$('.page-header .nav li.home').addClass('active');
        loadscrollfullpage();
        //$(".mainslide .bxslider li span.item, #fullpage .auto-height").height($("#fullpage").height());
        if ($(window).width() > 1200) {
            $(".mainslide .bxslider li span.item").height($(window).height() - 95);
            $("#fullpage .auto-height").height($(window).height() - 60);
        } else if ($(window).width() > 992) {
            $(".mainslide .bxslider li span.item").height($(window).height() - 60);
            $("#fullpage .auto-height").height($(window).height() - 60);
        } else {
            $(".mainslide .bxslider li span.item").css('height', '');
            $("#fullpage .auto-height").css('height', '');
        }
        // $(".bt-home-video, .bt-video").click(function() {
        //     if ($(this).attr('href') != '#') {
        //         $.fancybox({
        //             padding: 0,
        //             'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'embed/'),
        //             "type": "iframe",
        //             iframe: {
        //                 preload: false
        //             }
        //         });
        //     }
        //     return false;
        // });

        //Popup
        //            var popup = getCookie('tqpopup');
        //            if (popup == null) {
        // $.fancybox.open({
        //     href: '#startpopup',
        //     scrolling: 'no',
        //     padding: 0,
        //     wrapCSS: 'pageloadpopup'
        // });
        //                setCookie('tqpopup', 'true', 1);
        //            }

        sliderimg = $('.mainslide .bxslider').bxSlider({
            auto: true,
            mode: 'fade',
            speed: 350,
            pause: 2500,
            captions: false,
            // pager: false,
            // controls: true,
            onSliderLoad: function(currentIndex) {
                var src = "";
                if (currentIndex ==0){
                    src = $(slide[0]).data("src");
                }else{
                    src = $(slide[currentIndex]).data("src");
                }
                $(".bx-controls-direction").append("<div class='next-thumb'><img src='" + src + "' alt='' /></div>");

                var title = "";
                title = $(slide[currentIndex]).data("title");
                $(".home-gallery").append("<div class='slide-content animatedParent '>" + title + "</div>");
                $(".home-gallery .slide-content .doanimation").addClass("animated");
            },
            onSlideBefore: function($slideElement, oldIndex, newIndex) {
                if (newIndex < $(slide).length - 1) {
                    src = $(slide[newIndex + 1]).data("src");
                } else {
                    src = $(slide[0]).data("src");
                }
                $(".bx-controls-direction .next-thumb img").attr("src", src);
                title = $(slide[newIndex]).data("title");
                $(".home-gallery .slide-content").html(title);
                $(".home-gallery .slide-content .doanimation").addClass("animated go");
            }
        });
        $(".cmdRegister").click(function() {
            var name = $("#txtName").val();
            var mobile = $("#txtMobile").val();
            var email = $("#txtEmail").val();
            var hoidap = $("#txtHoiDap").val();
            if (Valid_NewsLetter('.txtcontactName', 'Vui lòng nhập họ & tên', 'Họ & Tên','.txtcontactMobile', 'Vui lòng nhập số điện thoại', 'Điện thoại','.txtcontactEmail', 'Vui lòng nhập email hoặc email của Quý khách không đúng định dạng', 'Email','.txtcontactHoiDap', 'Vui lòng nhập thông tin vào ô bên dưới', 'Hỏi đáp')) {
               
                var dataToServer= {
                    "entry.1003006183": name,
                    "entry.435372916": mobile,
                    "entry.1989955453": email,
                    "entry.543510334": hoidap
                } 
                $.ajax({
                    url: "https://docs.google.com/forms/d/1AMstqiYLZCaILVpPmY9e_4GNxAeVnYJAZKO3x97g8XY/formResponse",
                    data: dataToServer,
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function() {
                            bootbox.alert('Xin nhập lại!');

                        },
                        200: function() {
                            bootbox.alert('Chúng tôi sẽ liên lạc với bạn ngay khi có thể! Xin cảm ơn!');
                        }
                    }
                })
            }
        });
        $('#txtEmail').keypress(function(event) {
            if (event.which == 9 || event.which == 13) {
                $(".cmdRegister").trigger("click");
                return false;
            }
        });
    });
})
