$("document").ready(function() {
    $("DIV#red_header").on("click", whenMouseIsClicked);
    function whenMouseIsClicked() {
        $("header").addClass('red');
    }
});