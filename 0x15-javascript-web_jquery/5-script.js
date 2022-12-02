$('document').ready(function() {
    $("DIV#add_item").on('click', whenMouseIsClicked);
    function whenMouseIsClicked(){
        $("UL.my_list").append("<li>Item</li>");
    
    }

    })