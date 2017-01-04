jQuery(document).ready(function ($) {

    jQuery("#album_container a.fancybox").each(function () {
        if ($(this).attr('href') != '#' && $(this).attr('href').indexOf("watch?v=") != -1) {

            $(this).attr('href', $(this).attr('href').replace(new RegExp("watch\\?v=", "i"), 'v/')).addClass("fancy-video");
        }
        else {
            $(this).addClass("fancy-photo");
        }
    });

    jQuery("#album_container a.fancybox.fancy-photo").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'fade',
        nextEffect: 'fade',
        'autoScale': false,
        'transitionIn': 'none',
        'transitionOut': 'none',
        'title': $(this).title,
        padding: 0,
        'href': $(this).href,
        helpers: {
            title: {
                type: 'outside'
            },
            thumbs: {
                width: 80,
                height: 60,
                position: 'bottom'
            }
        }
    });

    jQuery("#album_container a.fancybox.fancy-video").fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        prevEffect: 'fade',
        nextEffect: 'fade',
        'title': $(this).title,
        padding: 3,
        'type': 'swf',
        'swf': {
            'wmode': 'transparent',
            'allowfullscreen': 'true'
        }
    });



    /*
    Portfolio Masonry
    =========================================================
    */
    var $container_isotope = $('#album_container');
    //Add preloader
    $container_isotope.append('<div class="preloader"><i class="fa fa-cog fa-spin"></i></div>');
    $container_isotope.imagesLoaded(function ($images, $proper, $broken) {
        $container_isotope.isotope({
            // options
            itemSelector: '.album-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }

        }); //isotope

        //---------------------------------------------------

        //Resize Items at start
        $container_isotope.isotope('layout');

        // filter items when filter link is clicked
        $('.album-filter-list a').click(function () {
            var selector = $(this).attr('data-filter');
            var name = $(this).attr('data-name');
            $(".page-branch-title .title").html(name);
            $container_isotope.isotope({ filter: selector });
            var $parent = $(this).parents(".album-filter-list");
            $parent.find(".active").removeClass('active');
            $(".album-filter-list").not($parent).find("li").removeClass('active').first().addClass("active");
            $(this).parent().addClass("active");
            return false;
        });


        //Remove preloader
        $container_isotope.find('.preloader i').css('display', 'none');
        $container_isotope.children('.preloader').css('opacity', 0).delay(900).fadeOut();

    }); //images loaded

}); //document ready