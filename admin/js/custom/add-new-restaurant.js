
//BIND FUNCTIONS

$('#min_amount').bind('input', function() {

    if(!this.value.match(/^\d+$/))
    {
        document.getElementById('min_amount_error').innerHTML = "Wrong Number!";
    }
    else
    {
        document.getElementById('min_amount_error').innerHTML = "";
    }

});


$('#contact').bind('input', function() {

    if(!this.value.match(/^\d+$/))
    {
        document.getElementById('contact_error').innerHTML = "Wrong Number!";
    }
    else
    {
        document.getElementById('contact_error').innerHTML = "";
    }

});

$('#name_en').bind('input', function() {

    document.getElementById('name_en_error').innerHTML = "";

});

$('#name_he').bind('input', function() {

    document.getElementById('name_he_error').innerHTML = "";

});

$('#description_en').bind('input', function() {

    document.getElementById('description_en_error').innerHTML = "";

});

$('#description_he').bind('input', function() {

    document.getElementById('description_he_error').innerHTML = "";

});

$('#address_en').bind('input', function() {

    document.getElementById('address_en_error').innerHTML = "";

});

$('#address_he').bind('input', function() {

    document.getElementById('address_he_error').innerHTML = "";

});

$('#hechsher_en').bind('input', function() {

    document.getElementById('hechsher_en_error').innerHTML = "";

});

$('#hechsher_he').bind('input', function() {

    document.getElementById('hechsher_he_error').innerHTML = "";

});

$('#file').bind('input', function() {

    document.getElementById('file_error').innerHTML = "";

});








function add_restaurant()
{
    var name_en                    =  $('#name_en').val();
    var name_he                    =  $('#name_he').val();

    var contact                    =  $('#contact').val();

    var min_amount                 =  $('#min_amount').val();

    var city                       =  $('#city').val();

    var description_en             =  $('#description_en').val();
    var description_he             =  $('#description_he').val();

    var address_en                 =  $('#address_en').val();
    var address_he                 =  $('#address_he').val();

    var hechsher_en                =  $('#hechsher_en').val();
    var hechsher_he                =  $('#hechsher_he').val();



    if(name_en == "")
    {
        $('#name_en_error').html('Required*');
        return;
    }
    if(name_he == "")
    {
        $('#name_he_error').html('Required');
        return;
    }

    if(contact == "")
    {
        $('#contact_error').html('Required*');
        return;
    }

    if(min_amount == "")
    {
        $('#min_amount_error').html('Required*');
        return;
    }

    if(description_en == "")
    {
        $('#description_en_error').html('Required*');
        return;
    }
    if(description_he == "")
    {
        $('#description_he_error').html('Required*');
        return;
    }

    if(address_en == "")
    {
        $('#address_en_error').html('Required*');
        return;
    }
    if(address_he == "")
    {
        $('#address_he_error').html('Required*');
        return;
    }

    if(hechsher_en == "")
    {
        $('#hechsher_en_error').html('Required*');
        return;
    }
    if(hechsher_en == "")
    {
        $('#hechsher_en_error').html('Required*');
        return;
    }





    var postForm = { //Fetch form data
        'name_en'                 :  $('#name_en').val(),
        'name_he'                 :  $('#name_he').val(),
        'city_id'                 :  $('#city').val(),

        'contact'                 :  $('#contact').val(),

        'coming_soon'             :  $('#coming_soon').val(),

        'hide'                    :  $('#hide').val(),

        'description_en'          :  $('#description_en').val(),
        'description_he'          :  $('#description_he').val(),

        'address_en'              :  $('#address_en').val(),
        'address_he'              :  $('#address_he').val(),

        'hechsher_en'             :  $('#hechsher_en').val(),
        'hechsher_he'             :  $('#hechsher_he').val(),
        'pickup_hide'             :  $('#pickup_hide').val()



    };

    addLoading();
    $.ajax({
        url:"ajax/insert_new_restaurant.php",
        method:"post",
        data:postForm,
        dataType:"json",
        success:function(data)
        {
            hideLoading();
            alert("restaurant added successfully");
            window.location.href = "index.php?id="+city_id;
        }
    });
}

