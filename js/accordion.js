$(document).ready(function () {
            $(".accordion  ul").hoverAccordion({
                activateitem: "1",
                speed: "fast"
            });
            $(".accordion").children("li:first").addClass("firstitem");
            $(".accordion").children("li:last").addClass("lastitem");
});

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
    navigation: true,
    navigationText: ["<span class='glyphicon glyphicon-menu-left'></span>","<span class='glyphicon glyphicon-menu-right'></span>"]
  });

  $("#owl-demo-1").owlCarousel({
    navigation: true,
    navigationText: ["<span class='glyphicon glyphicon-menu-left'></span>","<span class='glyphicon glyphicon-menu-right'></span>"]
  });
 
});

/* */