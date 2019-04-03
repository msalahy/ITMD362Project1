// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() {
var x = document.forms["myForm"]["name"].value;
if (x == "") {
alert("Name must be filled out");
return false;
}
var x = document.forms["myForm"]["email"].value;
if (x == "") {
alert("Email Address must be filled out");
return false;
}
var x = document.forms["myForm"]["email"].value;
var atpos = x.indexOf("@");
var dotpos = x.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
alert("Not a valid e-mail address");
return false;
}
var x = document.forms["myForm"]["message"].value;
if (x == "") {
alert("Message must be filled out");
return false;
}
else{
  submit.alert("Thank you for submit your information, we will update you on the next sales. ")
}
}


