$('document').ready(function(){
    $.getJSON("https://swapi-api.hbtn.io/api/people/5/?format=json", function(obj) {
        $.each(obj, function(key, value) {
            $("DIV#character").replace(value.name);
        });
    });

});