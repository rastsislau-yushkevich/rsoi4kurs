$(document).ready(function () {

    $('#btn1').click(function(){
        ajaxGetXML();
    });

    $('#btn2').click(function(){
        ajaxGetScript();
    });

    $('#btn3').click(function(){
        $('#name').hide();
        $('#address').hide();
        $('#age').hide();
        $('#position').hide();
    });

    $('#btn4').click(function(){
        ajaxGetHTML();
    });

});

function ajaxGetXML(){
    $.ajax({
        type: "POST",
        url: "xml.xml",
        dataType: "xml", 
        success: function(data) {
            const size = $('input[name=font]:checked').val();
            $('#name').val($(data).find('name').html()).css('font-size', size);
            $('#address').val($(data).find('address').html()).css('font-size', size);
            $('#age').val($(data).find('age').html()).css('font-size', size);
            $('#position').val($(data).find('position').html()).css('font-size', size);
        },
        error: function(){
            alert('ERROR');
        }
    });
}

function ajaxGetHTML(){
    $.ajax({
        type: "POST",
        url: "text.html",
        dataType: "html", 
        success: function(data) {
            $('#device_1').append(data);          
        },
        error: function(){
            alert('ERROR');
        }
    });
}

function ajaxGetScript() {
    $.ajax({
        url: "js.js",
        cache: true,
        dataType: "script",
        success: function(data) {
            console.log(data)
        }
      });
}