function postToGoogle() {


  var fullname = document.forms[0].elements.fullname.value;
  var email = document.forms[0].elements.email.value;
  var message = document.forms[0].elements.message.value;


  $.ajax({

    url: "https://docs.google.com/forms/d/1o0F7Cinya9_HcxrhdDnYjmFe3Urh8DYW5dlQVjCp4lo/formResponse",
    data: {

      "entry.636323937": fullname,
      "entry.1229096238": email,
      "entry.625436445": message
    },

    type: "POST",
    dataType: "json",

    statusCode: {
      0: function() {
        window.location.replace("thank-you.html");
      },
      200: function() {
        window.location.replace("thank-you.html");
      }
    }
  });
}


var send= document.forms[0].elements.send;


send.addEventListener("click", function() {

  event.preventDefault();

  postToGoogle();
}, false);
