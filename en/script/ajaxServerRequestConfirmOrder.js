// GLOBAL VARIABLES

var userObject                  = null;                                           // MAIN USER OBJECT
var foodCartData                = [];                                             // DISPLAY DATA FOR FOOD CART
var restName                    = null;                                           // SELECTED RESTAURANT NAME
var restId                      = null;                                           // SELECTED RESTAURANT ID
var selectedRest                = null;

//SERVER HOST DETAIL

$(document).ready(function() {

    // EXCEPTION IF USER OBJECT NOT RECEIVED UN-DEFINED
    if(localStorage.getItem("USER_OBJECT") == undefined ||localStorage.getItem("USER_OBJECT") == "" || localStorage.getItem("USER_OBJECT") == null)
    {
        // SEND USER BACK TO HOME PAGE
        window.location.href = '/en/index.html';

    }


    // RETRIEVE USER OBJECT RECEIVED FROM PREVIOUS PAGE
    userObject  = JSON.parse(localStorage.getItem("USER_OBJECT"));

    // RETRIEVE SELECTED REST ID RAW RESPONSE
    foodCartData  = JSON.parse(localStorage.getItem("FOOD_CARD_DATA"));

    // RETRIEVE SELECTED REST ID RAW RESPONSE
    selectedRest  = JSON.parse(localStorage.getItem("SELECTED_REST"));


    restName                    = userObject.restaurantTitle;                      // SELECTED RESTAURANT NAME
    restId                      = userObject.restaurantId;                         // SELECTED RESTAURANT ID


    // HIDE SUBMIT ORDER BUTTON ON START

    $('#submitOrder').hide();


    // SET DEFAULT VALUES ON ADDRESS AND DELIVERY SELECTION
    $('#checkbox-id-12').prop('checked', true);

    userObject.pickFromRestaurant = true;

    $('#checkbox-id-13').prop('checked', true);

    userObject.Cash_Card = "CASH";


    $('#address-text').html(userObject.restaurantAddress);

    var temp = '<option value="-1">Select Area</option>';

    for(var x=0;x<selectedRest.delivery_fee.length;x++)
    {
        temp += '<option value="'+x+'">'+selectedRest.delivery_fee[x].area_en +' : Fee '+ selectedRest.delivery_fee[x].fee +'NIS</option>';
    }

    $('#delivery-areas').html(temp);

    updateCartElements();

});


$('#delivery-areas').on('change', function() {

    var index =  this.value;

    if(index == -1)
    {
        userObject.deliveryArea = null;
        userObject.deliveryCharges = 0;
        $("#error-area").html('Select One!');
        $("#area").addClass("error");
        $("#error-area").show();

    }
    else
    {
        userObject.deliveryArea = selectedRest.delivery_fee[index].area_en;
        userObject.deliveryCharges = selectedRest.delivery_fee[index].fee;
        $("#error-area").html('');
        $("#error-area").hide();
        $("#area").removeClass("error");

    }

    updateCartElements();
});


// UPDATE FOOD CART
function updateCartElements()
{
    var countItems = 0;
    var newTotal = userObject.total;

    // DISPLAY FOOD CART IF AT LEAST ONE ITEM TO DISPLAY

    var str = '';

    for (var x = 0; x < foodCartData.length; x++)
    {
        countItems = countItems +  foodCartData[x].qty;


        str += '<div class="row-holder">' +
            '<div class="row header-row">' +
            '<div class="col-md-8 col-xs-8">' +
            '<h2>' + foodCartData[x].name + '</h2>' +
            '</div>'+
            '<div class="col-md-4 col-xs-4">'+
            '<span class="dim">'+ foodCartData[x].qty.toString() +' x ' + foodCartData[x].price_without_subItems  + ' NIS</span>'+
            '</div>'+
            '</div>'+
            '<div class="row">' +
            '<div class="col-md-8 col-sm-8 col-xs-8">' +
            '<p>' + foodCartData[x].detail + '</p>' +
            '</div>'+
            '</div>'+
            '</div>';



    }


    $('#nested-section').html(str);
    $('#totalAmountWithoutDiscount').html(userObject.total + " NIS");


    $('.badge').html(countItems);


    if(!userObject.isCoupon)
    {
        $('#showDiscount').hide();
    }
    else
    {

        $('#showDiscount').show();
        $('#totalAmountWithoutDiscount').html(userObject.totalWithoutDiscount + " NIS");
        newTotal = userObject.total;
    }


    if(userObject.deliveryArea == null)
    {
        $('#deliveryDetail').hide();

    }
    else
    {
        $('#area-charges').html(userObject.deliveryCharges+" NIS");
        newTotal = convertFloat(newTotal) + convertFloat(userObject.deliveryCharges);
        $('#deliveryDetail').show();
    }

    $('#totalAmount').html(newTotal);

}


function saveUserInfo() {


    // EXCEPTION HANDLING

    // NAME CANNOT BE EMPTY

    $("#email").removeClass("error");
    $("#contact").removeClass("error");
    $("#name").removeClass("error");
    $("#error-name").hide();
    $("#error-email").hide();
    $("#error-contact").hide();

    if($("#name_text").val() == "")
    {
        $("#name").addClass("error");
        $("#error-name").html('*Required Field');
        $("#error-name").show();
        return;
    }

    // EMAIL CANNOT BE EMPTY
    if($("#email_text").val() == ""){

        $("#email").addClass("error");
        $("#error-email").html('*Required Field');
        $("#error-email").show();
        return;
    }

    if( !validateEmail($("#email_text").val())){

        $("#email").addClass("error");
        $("#error-email").html('Invalid Email!');
        $("#error-email").show();
        return;
    }

    // CONTACT NO CANNOT BE EMPTY

    if($("#contact_text").val() == ""){

        $("#contact").addClass("error");
        $("#error-contact").html('*Required Field');
        $("#error-contact").show();
        return;
    }


    // VALIDATION OF CONTACT NO NOT CONTAIN CHAR EXCEPT +

    var contact = $("#contact_text").val().replace('+','');

    if(!(/^\d+$/.test(contact)))
    {
        $("#contact").addClass("error");
        $("#error-contact").html('Invalid Phone Number!');
        $("#error-contact").show();
        return;
    }

    userObject.name       =  $("#name_text").val();
    userObject.email      =  $("#email_text").val();
    userObject.contact    =  $("#contact_text").val();


    $('#deliveryInfoParent').addClass("active");
    $('#customerInfoParent').removeClass("active");

    showSlide($('#deliverySlider')).hide().slideDown(300);
    hideSlide($('#customerSlider'));

}


function deliveryAddress()
{

    $("#appt-no").removeClass("error");
    $("#address").removeClass("error");
    $("#area").removeClass("error");
    $("#error-appt-no").hide();
    $("#error-address").hide();
    $("#error-area").hide();

    // DELIVER ADDRESS EMPTY
    if($('#checkbox-id-12').is(':checked'))
    {
        userObject.pickFromRestaurant = true;
    }
    else
    {
        if($("#appt-no").val() == "")
        {
            $("#appt-no").addClass("error");
            $("#error-appt-no").html('*Required Field');
            $("#error-appt-no").show();
            return;
        }


        if($("#address").val() == "")
        {
            $("#address").addClass("error");
            $("#error-address").html('*Required Field');
            $("#error-address").show();
            return;
        }

        if(userObject.deliveryArea == null)
        {
            $("#area").addClass("error");
            $("#error-area").html('Select One!');
            $("#error-area").show();
            return;
        }
    }

    showSlide($('#paymentSlider')).hide().slideDown(300);
    hideSlide($('#deliverySlider'));

    console.log(userObject);
}


function saveCashDetail()
{

    $("#user_name").val(userObject.name);

    $('#coupon').removeClass('error');
    $("#error-coupon").html("");
    $("#error-coupon").hide();

    // USER WANT TO USE COUPON
    if($('#coupon-txt').val() != "")
    {
        var code  = $('#coupon-txt').val();
        commonAjaxCall("/restapi/index.php/coupon_validation", {"code": code, "email": userObject.email},checkCouponCallBack);
    }
    else
    {
        processPayments();
    }

}


function checkCouponCallBack(response)
{
    var responseCoupon = JSON.parse(response);
    var code = $("#coupon-txt").val();


    console.log(responseCoupon);

    // COUPON IS VALID
    if (responseCoupon.success == true)
    {

        var newTotal = 0;

        userObject.discount = responseCoupon.amount;
        var discountedAmount = 0;

        if (responseCoupon.isFixAmountCoupon) {

            userObject.isFixAmountCoupon = true;

            discountedAmount = convertFloat(userObject.discount);

            newTotal = convertFloat(userObject.total) - convertFloat(userObject.discount);

            $('#discountValue').html("-" + discountedAmount +" NIS");
        }
        else
        {

            userObject.isFixAmountCoupon = false;

            discountedAmount = ((convertFloat(userObject.total) * convertFloat(userObject.discount)) / 100);

            newTotal = userObject.total - discountedAmount;

            $('#discountValue').html("-" + discountedAmount +" NIS");

        }


        userObject.totalWithoutDiscount = userObject.total;
        userObject.total = newTotal;

        userObject.isCoupon = true;
        updateCartElements();

        $('#coupon_parent').hide();
        processPayments();
    }
    // INVALID COUPON CODE
    else
    {

        // $('#coupon_section').hide();
        // $("#coponInput").addClass('red-border-c');
        // $("#couponError").html("Oops, this Coupons wrong, Try Again!");
        // $("#coponInput").val('');

        userObject.isCoupon = false;
        $('#coupon').addClass('error');
        $("#coupon-txt").val("");
        $("#error-coupon").html("Oops, this Coupons wrong, Try Again!");
        $("#error-coupon").show();
        updateCartElements();

    }

    console.log(userObject);
}


function processPayments()
{
    if ($('#checkbox-id-13').is(':checked')) {

        userObject.Cash_Card = "CASH";

        showSlide($('#specialRequest')).hide().slideDown(300);
        hideSlide($('#paymentSlider'));
    }
    else
    {

        $('#payment-form').submit();
    }
}


// CREDIT CARD PAYMENT
function payment_credit_card(token) {


    commonAjaxCall("/restapi/index.php/stripe_payment_request", {"amount" : userObject.total, "email"  : userObject.email, "token"  : token},paymentCreditCardCallBack);

}


function paymentCreditCardCallBack(response) {

    var resp = '';

    try {

        resp = JSON.parse(response);
    }
    catch (e)
    {
        resp = response;
        console.log(resp);
    }

    if(response == "success")
    {
        onPaymentSuccess();
    }
    else
    {
        $(".payment-errors").html(resp);
        $(".payment-errors").show();
    }

}



function onPaymentSuccess()
{
    showSlide($('#specialRequest')).hide().slideDown(300);
    hideSlide($('#paymentSlider'));
}


function specialRequestSave()
{
    var sr = $('#specialRequestText').val();

    if(sr != null && sr != "")
    {
        userObject.specialRequest = sr;
    }

    hideSlide($('#specialRequest'));

    $('#submitOrder').show();
}




// SEND ORDER USER TO SERVER & CALL PAGE 3

function  callPage3() {

    userObject.cartData = foodCartData;

    localStorage.setItem("USER_OBJECT", "");

    commonAjaxCall("/restapi/index.php/add_order",{"user_order": userObject},callPage3CallBack);

};


function callPage3CallBack(response) {

    userObject = null;
    window.location.href = '/en/feedback.html';
}


// VALIDATE EMAIL ADDRESS
function validateEmail(email) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


// accordion slide visibility
var showSlide = function(slide) {
    return slide.css({position:'', top: '', left: '', width: '' });
};


var hideSlide = function(slide) {
    return slide.show().css({position:'absolute', top: -9999, left: -9999, width: slide.width() });
};


function convertFloat(num)
{
    return parseFloat(parseFloat(num).toFixed(2));
}

