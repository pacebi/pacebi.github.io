$(document).ready(function() {
  var navtype;

  // if jquery is available
  if (typeof $ !== 'undefined') {
    // pick header and nav size
    if ($(window).width() > 768) {
      // desktop
      $("#header").load("header/header-large.html");
      $("#nav").load("header/nav-large.html", function() {
        setNavType();
      });
      $("main").addClass("lmain");

    } else {
      // mobile
      $("#header").load("header/header-small.html");
      $("main").addClass("smain");
    }

    $("#footer").load("header/footer.html");

  } else {
    console.error('jquery missing');
  }

  // this entire section is because jquery won't run otherwise. why? idfk lol

  // navbar
  function setNavType() {
    navtype = ($(window).width() > 768) ? "lnavselected" : "snavselected";

    $(".lnavitem").each(function() {
      var href = $(this).find("a").attr("href");
      console.log(href);
      if (href === document.location.href.match(/[^\/]+$/)[0]) {
        $(this).find("a").addClass(navtype);
      }
    });
  }

  // mobile dropdown
  $(document).on("click", "#sheadertitle", function() {
    $("#snav").toggle();
  });

  // hide notice on click
  $(document).on("click", ".notice", function() {
    $(this).remove();
  });
  console.log("js working sucessfully");
});

// cookies
if (!Cookies.get("cookies_accepted")) {
  if ($(window).width() > 768) {
    $("#header").load("header/lcookie.html");
  } else {
    $("#header").load("header/scookie.html");
  }
  $(".cookie_accept").on("click", function() {
    Cookies.set("cookies_accepted", "true", { expires: 365 });
    $(".cookie_accept").remove();
  });
}
