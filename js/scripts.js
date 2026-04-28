jQuery(document).ready(function() {


    jQuery('html').click(function() {
        if (jQuery('ul.menu').hasClass('open')) {
            jQuery('ul.menu').removeClass('open');
        }
    });

    // replace mobile-nav with your entire nav container
    jQuery('.nav_area').click(function(e) {
        e.stopPropagation();
    });


    jQuery(".toggle").click(function() {
        jQuery("ul.menu").toggleClass('open');
    });

    // jQuery("li.menu-item-has-children > a").after("<span class='arrow'><i class='fa fa-angle-down' aria-hidden='true'></i></span>");

    jQuery(window).load(function() {
        jQuery('li.menu-item-has-children  > span').click(function() {
            jQuery(this).next('.sub-menu').slideToggle('500');
            jQuery(this).closest('li').siblings().find('ul').hide();
            jQuery(this).toggleClass('close-icon');
            jQuery(this).closest('li').siblings().find('span').removeClass('close-icon');
        });
    });


    jQuery('.sidebar h3').click(function() {
        jQuery(".sidebar > ul").slideToggle("slow");
    });





    jQuery('li.has-sub-menu > a').click(function() {
        jQuery(this).next("ul.side-sub-menu").slideToggle();
        jQuery(this).closest('li').siblings().find('ul.side-sub-menu').hide();

    });











});