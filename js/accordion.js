$(document).ready(function () {
            // Setup HoverAccordion for Example 2 with some custom options
            $('.accordion').hoverAccordion({
                activateitem: '1',
                speed: 'fast'
            });
            $('.accordion').children('li:first').addClass('firstitem');
            $('.accordion').children('li:last').addClass('lastitem');
});