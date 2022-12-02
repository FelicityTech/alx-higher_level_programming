$('document').ready(function(){
    $('DIV#update_header').on('click', whenMouseIsClicked);
    function whenMouseIsClicked() {
        $('header').replaceWith("New Header!!!");
    };
});