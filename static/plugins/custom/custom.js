//  Scroll to top of tab-pane with a sticky Nav
// https://stackoverflow.com/a/57337113
$("div#nav-tab > a").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#nav-tab-content").offset().top-160
    }, 300);
});