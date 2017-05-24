// GLOBAL VARIABLES
var userObject                  = null;                                           // MAIN USER OBJECT
var foodCartData                = [];                                             // DISPLAY DATA FOR FOOD CART
var restName                    = null;                                           // SELECTED RESTAURANT NAME
var restId                      = null;                                           // SELECTED RESTAURANT ID
var selectedRest                = null;


var customerInfoFlag            = false;
var addressInfoFlag             = false;
var paymentInfoFlag             = false;

var couponApplied               = false;
var paymentReceived             = false;


//SERVER HOST DETAIL

$(document).ready(function() {

    // EXCEPTION IF USER OBJECT NOT RECEIVED UN-DEFINED
    if(localStorage.getItem("USER_OBJECT_HE") == undefined ||localStorage.getItem("USER_OBJECT_HE") == "" || localStorage.getItem("USER_OBJECT_HE") == null)
    {
        // SEND USER BACK TO HOME PAGE
        window.location.href = '/en/index.html';

    }


    // RETRIEVE USER OBJECT RECEIVED FROM PREVIOUS PAGE
    userObject  = JSON.parse(localStorage.getItem("USER_OBJECT_HE"));

    // RETRIEVE SELECTED REST ID RAW RESPONSE
    foodCartData  = JSON.parse(localStorage.getItem("FOOD_CARD_DATA_HE"));

    // RETRIEVE SELECTED REST ID RAW RESPONSE
    selectedRest  = JSON.parse(localStorage.getItem("SELECTED_REST_HE"));


    restName                    = userObject.restaurantTitle;                      // SELECTED RESTAURANT NAME
    restId                      = userObject.restaurantId;                         // SELECTED RESTAURANT ID


    $('#rest-title').html(userObject.restaurantTitleHe);


    // HIDE SUBMIT ORDER BUTTON ON START

    $('#submitOrder').hide();


    if(userObject.pickup_hide == true)
    {
        $('#pickup_option').hide();
        $('#checkbox-id-23').prop('checked', true);
        $('#deliveryFieldsParent').addClass('show');

    }
    else {

        // SET DEFAULT VALUES ON ADDRESS AND DELIVERY SELECTION
        $('#checkbox-id-12').prop('checked', true);

    }

    userObject.pickFromRestaurant = true;

    $('#checkbox-id-13').prop('checked', true);

    userObject.Cash_Card = "CASH";
    userObject.Cash_Card_he = "מזומן";


    $('#address-text').html(userObject.restaurantAddress);

    var temp = '<option value="-1">בחר אזור</option>';

    for(var x=0;x<selectedRest.delivery_fee.length;x++)
    {
        temp += '<option value="'+x+'">'+selectedRest.delivery_fee[x].area_he +' : דמי משלוח ' +selectedRest.delivery_fee[x].fee+  ' ש"ח ' +'</option>';
    }

    $('#delivery-areas').html(temp);

    updateCartElements();

    initAccordion();

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


        str += '<div class="row-holder">'+

            '<div class="row header-row">'+
            '<div class="col-md-4 col-xs-4">'+
            '<span class="dim" dir="rtl"> '+foodCartData[x].qty.toString()+' '+ ' x ש"ח ' + foodCartData[x].price+
            '</span></div>'+
            '<div class="col-md-8 col-xs-8">'+
            '<h2>'+ foodCartData[x].name_he +'</h2>'+
            '</div>'+
            '</div>'+
            '<div class="row no-gutters">'+
            '<div class="col-md-8 col-sm-8 col-xs-8 pull-right">';

        if(foodCartData[x].specialRequest != "")
        {

            if(foodCartData[x].detail != "") {

                str += '<p>' + foodCartData[x].detail_he + ', הערות : ' + foodCartData[x].specialRequest + '</p>';
            }
            else
            {
                str += '<p>' + foodCartData[x].detail_he + ' הערות : ' + foodCartData[x].specialRequest + '</p>';
            }
        }
        else {

            str += '<p>' + foodCartData[x].detail_he +'</p>';

        }


        str += '</div>'+
            '</div>'+
            '</div>';

    }


    $('#nested-section').html(str);
    $('#summary_items').html(str);

    $('#totalAmountWithoutDiscount').html(userObject.total + ' ש"ח');
    $('#totalAmountWithoutDiscount2').html(userObject.total + ' ש"ח');


    $('.badge').html(countItems);


    if(!userObject.isCoupon)
    {
        $('#showDiscount').hide();
        $('#showDiscount2').hide();
    }
    else
    {

        $('#showDiscount').show();
        $('#showDiscount2').show();

        $('#totalAmountWithoutDiscount').html(userObject.totalWithoutDiscount + ' ש"ח');
        $('#totalAmountWithoutDiscount2').html(userObject.totalWithoutDiscount + ' ש"ח');

        newTotal = userObject.total;
    }


    if($('#checkbox-id-12').is(":checked"))
    {
        $('#deliveryDetail').hide();
        $('#deliveryDetail2').hide();
    }
    else
    {
        if(userObject.deliveryCharges != null && userObject.deliveryCharges != 0) {

            $('#area-charges').html(userObject.deliveryCharges + ' ש"ח');
            $('#area-charges2').html(userObject.deliveryCharges + ' ש"ח');
            newTotal = convertFloat(convertFloat(newTotal) + convertFloat(userObject.deliveryCharges));
            $('#deliveryDetail').show();
            $('#deliveryDetail2').show();
        }
        else
        {
            $('#deliveryDetail').hide();
            $('#deliveryDetail2').hide();
        }
    }

    $('#totalAmount').html(' סה"כ '+newTotal + ' ש"ח');
    $('#totalAmount2').html(' סה"כ '+newTotal + ' ש"ח');

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
        $("#error-name").html('*שדה חובה');
        $("#error-name").show();

        return;
    }

    // EMAIL CANNOT BE EMPTY
    if($("#email_text").val() == ""){

        $("#email").addClass("error");
        $("#error-email").html('*שדה חובה');
        $("#error-email").show();

        return;
    }

    if( !validateEmail($("#email_text").val())){

        $("#email").addClass("error");
        $("#error-email").html('דוא"ל שגוי');
        $("#error-email").show();
        return;
    }

    // CONTACT NO CANNOT BE EMPTY

    if($("#contact_text").val() == ""){

        $("#contact").addClass("error");
        $("#error-contact").html('*שדה חובה');
        $("#error-contact").show();
        return;
    }


    // VALIDATION OF CONTACT NO NOT CONTAIN CHAR EXCEPT +

    var contact = $("#contact_text").val().replace('+','');

    if(!(/^\d+$/.test(contact)))
    {
        $("#contact").addClass("error");
        $("#error-contact").html('מספר טלפון לא תקין');
        $("#error-contact").show();
        return;
    }

    userObject.name       =  $("#name_text").val();
    userObject.email      =  $("#email_text").val();
    userObject.contact    =  $("#contact_text").val();


    customerInfoFlag = true;

    if(customerInfoFlag && paymentInfoFlag && addressInfoFlag)
    {
        $('#submitOrder').show();
    }
    else
    {
        $('#submitOrder').hide();
    }

    $('#deliveryInfoParent').addClass("active");
    $('#customerInfoParent').removeClass("active");
    $('#paymentParent').removeClass("active");
    $('#specialRequestParent').removeClass("active");


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

        $('#deliveryInfoParent').removeClass("active");
        $('#customerInfoParent').removeClass("active");
        $('#paymentParent').addClass("active");
        $('#specialRequestParent').removeClass("active");
        $('#cash_parent').hide();
        $('#cash_message').show();

        addressInfoFlag = true;

        if(customerInfoFlag && paymentInfoFlag && addressInfoFlag)
        {
            $('#submitOrder').show();
        }
        else
        {
            $('#submitOrder').hide();
        }

        $("#user_name").val(userObject.name);

        showSlide($('#paymentSlider')).hide().slideDown(300);
        hideSlide($('#deliverySlider'));

        $('#checkbox-id-13').prop('checked', false);
        $('#checkbox-id-24').prop('checked', true);
        $('#show_credit_card').addClass('show');

    }
    else
    {
        // if($("#appt-no").val() == "")
        // {
        //     $("#appt-no").addClass("error");
        //     $("#error-appt-no").html('*שדה חובה');
        //     $("#error-appt-no").show();
        //     return;
        // }


        if($("#address").val() == "")
        {
            $("#address").addClass("error");
            $("#error-address").html('*שדה חובה');
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

        userObject.pickFromRestaurant = false;

        userObject.deliveryAddress = $("#address").val();
        userObject.deliveryAptNo = $("#appt-no").val();


        $('#deliveryInfoParent').removeClass("active");
        $('#customerInfoParent').removeClass("active");
        $('#paymentParent').addClass("active");
        $('#specialRequestParent').removeClass("active");
        $('#cash_parent').show();
        $('#cash_message').hide();
        $("#user_name").val(userObject.name);


        addressInfoFlag = true;

        if(customerInfoFlag && paymentInfoFlag && addressInfoFlag)
        {
            $('#submitOrder').show();
        }
        else
        {
            $('#submitOrder').hide();
        }

        showSlide($('#paymentSlider')).hide().slideDown(300);
        hideSlide($('#deliverySlider'));

        $('#checkbox-id-24').prop('checked', false);
        $('#checkbox-id-13').prop('checked', true);
        $('#show_credit_card').removeClass('show');


    }



    console.log(userObject);
}



function ClosePayment()
{

    $("#error-card").removeClass("error");
    $('#error-card-no').html("");

    $("#error-cvv-parent").removeClass("error");
    $("#exp_error").removeClass("error");

    $('.payment-errors').html("");
    $('.payment-errors').hide();


    // IF PAYMENT THROUGH CREDIT CARD

    if ($('#checkbox-id-24').is(":checked")) {

        // CARD NO SHOULD NOT BE EMPTY
        if ($('#card_no').val() == "") {

            $("#error-card").addClass("error");
            $('#error-card-no').html("*שדה חובה");
            return;

        }

        if((!$('#card_no').val().match(/^\d+$/)))
        {
            if($("#card_no").val() != ''){

                $("#error-card").addClass("error");
                $('#error-card-no').html("מספר כרטיס שגוי");
                return;
            }
        }


        // CVV SHOULD NOT BE EMPTY
        if ($('#cvv').val() == "") {
            $("#error-cvv-parent").addClass("error");
            $('.payment-errors').html("*שדה חובה CVV");
            $('.payment-errors').show();

            return;
        }

        // MONTH SHOULD NOT BE EMPTY
        if ($('#month').val() == "") {
            $("#exp_error").addClass("error");
            $('.payment-errors').html("* תאריך תפוגה של כרטיס חודש (MM) נדרש");
            $('.payment-errors').show();
            return;
        }

        // MONTH SHOULD NOT BE EMPTY
        if ($('#year').val() == "") {
            $("#exp_error").addClass("error");
            $('.payment-errors').html("* תאריך תפוגת הכרטיס שנה (YY) חובה");
            $('.payment-errors').show();
            return;
        }

    }

    $('#coupon').removeClass('error');
    $("#error-coupon").html("");
    $("#error-coupon").hide();

    // USER WANT TO USE COUPON
    if($('#coupon-txt').val() != "")
    {
        var code  = $('#coupon-txt').val();

        if(!couponApplied)
        {
            var selectedCityName    =   JSON.parse(localStorage.getItem("USER_CITY_NAME"));

            commonAjaxCall("/restapi/index.php/coupon_validation", {"code": code, "email": userObject.email,
                "total": userObject.total,"rest_title" : userObject.restaurantTitle,
                "rest_city" : selectedCityName},checkCouponCallBack);
        }

    }
    else
    {

        paymentInfoFlag = true;

        if(customerInfoFlag && paymentInfoFlag && addressInfoFlag)
        {
            $('#submitOrder').show();
        }
        else
        {
            $('#submitOrder').hide();
        }

        showSlide($('#specialRequest')).hide().slideDown(300);
        hideSlide($('#paymentSlider'));
    }

}



function saveCashDetail()
{

    $('#order-summary').modal('hide');
    processPayments();
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

            $('#discountValue').html("-" + discountedAmount +' ש"ח');
            $('#discountValue2').html("-" + discountedAmount +' ש"ח');
        }
        else
        {

            userObject.isFixAmountCoupon = false;

            discountedAmount = convertFloat((convertFloat(userObject.total) * convertFloat(userObject.discount)) / 100);

            newTotal = convertFloat(convertFloat(userObject.total) - convertFloat(discountedAmount));

            $('#discountValue').html("-" + discountedAmount +' ש"ח');
            $('#discountValue2').html("-" + discountedAmount +' ש"ח');

            $('#discountTitle').html(" קופון הנחה " + userObject.discount+"%");
            $('#discountTitle2').html(" קופון הנחה " + userObject.discount+"%");

        }


        userObject.totalWithoutDiscount = userObject.total;
        userObject.total = newTotal;

        userObject.isCoupon = true;
        updateCartElements();

        $('#coupon_parent').hide();
        couponApplied = true;
        $('#coupon-txt').val("");

        paymentInfoFlag = true;

        if(customerInfoFlag && paymentInfoFlag && addressInfoFlag)
        {
            $('#submitOrder').show();
        }
        else
        {
            $('#submitOrder').hide();
        }

        showSlide($('#specialRequest')).hide().slideDown(300);
        hideSlide($('#paymentSlider'));


    }
    // INVALID COUPON CODE
    else
    {

        userObject.isCoupon = false;
        $('#coupon').addClass('error');
        $("#coupon-txt").val("");
        $("#error-coupon").html("Error - this coupon is not valid.");
        $("#error-coupon").show();
        updateCartElements();
        showSlide($('#paymentSlider')).hide().slideDown(300);

    }

    console.log(userObject);
}


function processPayments()
{
    if ($('#checkbox-id-13').is(':checked') && !userObject.pickFromRestaurant) {

        userObject.Cash_Card = "CASH";
        userObject.Cash_Card_he = "מזומן";
        onPaymentSuccess();
    }
    else
    {
        if(!paymentReceived)
        {
            $('#payment-form').submit();
        }
    }
}


// CREDIT CARD PAYMENT
function payment_credit_card(cardNo, cvv, exp) {

    userObject.cartData = foodCartData;


    if(userObject.deliveryArea == null)
    {
        userObject.deliveryArea = '';
    }


    if(userObject.specialRequest == null)
    {
        userObject.specialRequest = '';
    }


    var  newTotal = userObject.total;


    if(userObject.deliveryCharges != null && userObject.deliveryCharges != 0) {


        newTotal = convertFloat(convertFloat(userObject.total) + convertFloat(userObject.deliveryCharges));


    }

    commonAjaxCall("/restapi/index.php/stripe_payment_request", {"amount" : newTotal, "user_order": userObject , "cc_no"  : cardNo, "exp_date"  : exp, "cvv"  : cvv },paymentCreditCardCallBack);

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

    if(resp.response == "success")
    {
        paymentReceived = true;
        userObject.Cash_Card = "Credit Card";
        userObject.Cash_Card_he = "כרטיס אשראי";
        userObject.trans_id = resp.trans_id;
        onPaymentSuccess();
    }
    else
    {
        $(".payment-errors").html(resp.response);
        $(".payment-errors").show();
        showSlide($('#paymentSlider')).hide().slideDown(300);
    }

}


function specialRequestSave()
{
    var sr = $('#specialRequestText').val();

    if(sr != null && sr != "")
    {
        userObject.specialRequest = sr;
    }

    hideSlide($('#specialRequest'));


    $('#deliveryInfoParent').removeClass("active");
    $('#customerInfoParent').removeClass("active");
    $('#paymentParent').removeClass("active");
    $('#specialRequestParent').removeClass("active");

}



function onPaymentSuccess()
{
    sectionPayment = true;

    $('#deliveryInfoParent').removeClass("active");
    $('#customerInfoParent').removeClass("active");
    $('#paymentParent').removeClass("active");
    $('#specialRequestParent').addClass("active");

    callPage3();
}


// SEND ORDER USER TO SERVER & CALL PAGE 3

function  callPage3() {

    userObject.cartData = foodCartData;

    if(userObject.deliveryArea == null)
    {
        userObject.deliveryArea = '';
    }

    if(userObject.specialRequest == null)
    {
        userObject.specialRequest = '';
    }

    if(userObject.deliveryCharges != null && userObject.deliveryCharges != 0) {

        var  newTotal = convertFloat(convertFloat(userObject.total) + convertFloat(userObject.deliveryCharges));

        userObject.total = newTotal;

    }

    if(userObject.totalWithoutDiscount == null || userObject.totalWithoutDiscount == "")
    {
        userObject.totalWithoutDiscount = userObject.total;
    }


    var browserName = BrowserInfo();


    commonAjaxCall("/restapi/index.php/add_order",{"user_order": userObject,"user_platform": 'HE Desktop',"browser_info":browserName},callPage3CallBack);

};


function callPage3CallBack(response) {


    var restaurantTitle     =   userObject.restaurantTitle.replace(/\s/g, '');
    var selectedCityName    =   JSON.parse(localStorage.getItem("USER_CITY_NAME"));
    selectedCityName        =   selectedCityName.replace(/\s/g, '');

    userObject = null;
    localStorage.setItem("USER_OBJECT", "");

    // MOVING TO ORDER PAGE
    window.location.href = '/he/'+selectedCityName+"/"+ restaurantTitle+"/complete-order";

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


function goBack()
{
    var restaurantTitle     =   userObject.restaurantTitle.replace(/\s/g, '');
    var selectedCityName    =   JSON.parse(localStorage.getItem("USER_CITY_NAME"));
    selectedCityName        =   selectedCityName.replace(/\s/g, '');

    // MOVING TO ORDER PAGE
    window.location.href = '/he/'+selectedCityName+"/"+ restaurantTitle+"/order";
}




function BrowserInfo() {

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;

// In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
        browserName = "Opera";
        fullVersion = nAgt.substring(verOffset+6);
        if ((verOffset=nAgt.indexOf("Version"))!=-1)
            fullVersion = nAgt.substring(verOffset+8);
    }
// In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
        browserName = "Microsoft Internet Explorer";
        fullVersion = nAgt.substring(verOffset+5);
    }
// In Chrome, the true version is after "Chrome"
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
        browserName = "Chrome";
        fullVersion = nAgt.substring(verOffset+7);
    }
// In Safari, the true version is after "Safari" or after "Version"
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
        browserName = "Safari";
        fullVersion = nAgt.substring(verOffset+7);
        if ((verOffset=nAgt.indexOf("Version"))!=-1)
            fullVersion = nAgt.substring(verOffset+8);
    }
// In Firefox, the true version is after "Firefox"
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
        browserName = "Firefox";
        fullVersion = nAgt.substring(verOffset+8);
    }
// In most other browsers, "name/version" is at the end of userAgent
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) <
        (verOffset=nAgt.lastIndexOf('/')) )
    {
        browserName = nAgt.substring(nameOffset,verOffset);
        fullVersion = nAgt.substring(verOffset+1);
        if (browserName.toLowerCase()==browserName.toUpperCase()) {
            browserName = navigator.appName;
        }
    }
// trim the fullVersion string at semicolon/space if present
    if ((ix=fullVersion.indexOf(";"))!=-1)
        fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1)
        fullVersion=fullVersion.substring(0,ix);

    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
        fullVersion  = ''+parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion,10);
    }

    return browserName;

}