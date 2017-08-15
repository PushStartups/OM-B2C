// page init
jQuery(function(){
    initAccordion();
});

// accordion init
function initAccordion() {
    jQuery('ul.simple-accordion').slideAccordion({
        opener:'>a.opener',
        slider:'>div.slide',
        collapsible:false,
        animSpeed: 300
    });
    jQuery('ul.multilevel-accordion').slideAccordion({
        opener:'>a.opener',
        slider:'>div.slide',
        collapsible:true,
        animSpeed: 300
    });
}

/*
 * jQuery Accordion plugin
 */
;(function($){
    $.fn.slideAccordion = function(opt){
        // default options
        var options = $.extend({
            addClassBeforeAnimation: false,
            activeClass:'active',
            opener:'.opener',
            slider:'.slide',
            animSpeed: 300,
            collapsible:true,
            event:'click'
        },opt);

        return this.each(function(){
            // options
            var accordion = $(this);
            var items = accordion.find(':has('+options.slider+')');

            items.each(function(){
                var item = $(this);
                var opener = item.find(options.opener);
                var slider = item.find(options.slider);
                opener.bind(options.event, function(e){
                    if(!slider.is(':animated')) {
                        if(item.hasClass(options.activeClass)) {
                            if(options.collapsible) {
                                slider.slideUp(options.animSpeed, function(){
                                    hideSlide(slider);
                                    item.removeClass(options.activeClass);
                                });
                            }
                        } else {
                            // show active
                            var levelItems = item.siblings('.'+options.activeClass);
                            var sliderElements = levelItems.find(options.slider);
                            item.addClass(options.activeClass);
                            showSlide(slider).hide().slideDown(options.animSpeed);

                            // collapse others
                            sliderElements.slideUp(options.animSpeed, function(){
                                levelItems.removeClass(options.activeClass);
                                hideSlide(sliderElements);
                            });

                            var temp = 0;

                            setTimeout(function(){

                                var container = $('#main'),
                                    scrollTo = item;

                                temp = scrollTo.offset().top - container.offset().top + container.scrollTop() ;

                                //console.log(temp);

                                // Or you can animate the scrolling:
                                container.animate({


                                    scrollTop: (temp - 60)

                                },300)

                            }, 500);


                        }
                    }
                    e.preventDefault();
                });
                if(item.hasClass(options.activeClass)) showSlide(slider); else hideSlide(slider);
            });
        });
    };

    // accordion slide visibility
    var showSlide = function(slide) {
        return slide.css({position:'', top: '', left: '', width: '' });
    };
    var hideSlide = function(slide) {
        return slide.show().css({position:'absolute', top: -9999, left: -9999, width: slide.width() });
    };
}(jQuery));