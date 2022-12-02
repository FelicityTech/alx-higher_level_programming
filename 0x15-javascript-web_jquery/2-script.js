$("document").ready(function() {
    $("DIV#red_header").on("click", whenMouseIsClicked);
    function whenMouseIsClicked() {
        $("header").css('color', "#FF0000")
    }
});