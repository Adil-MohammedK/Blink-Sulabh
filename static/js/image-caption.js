function processImage(imgUrl) {
  // **********************************************
  // *** Update or verify the following values. ***
  // **********************************************

  var subscriptionKey = 'e5b89f57c0cd43e1a57cad7d5a7f9b48';
  var endpoint = 'https://naren.cognitiveservices.azure.com/';

  var uriBase = endpoint + 'vision/v3.0/analyze';

  // Request parameters.
  var params = {
    visualFeatures: 'Description',
  };

  var example = params.visualFeatures;

  // Display the image.
  //   var sourceImageUrl = document.getElementById('inputImage').value;
  var sourceImageUrl = imgUrl;
  console.log('Image src: ' + sourceImageUrl);

  // Make the REST API call.
  $.ajax({
    url: uriBase + '?' + $.param(params),

    // Request headers.
    beforeSend: function (xhrObj) {
      xhrObj.setRequestHeader('Content-Type', 'application/json');
      xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
    },

    type: 'POST',

    // Request body.
    data: '{"url": ' + '"' + sourceImageUrl + '"}',
  })

    .done(function (data) {
      // Show formatted JSON on webpage.
      //   $('#responseTextArea').val(JSON.stringify(data, null, 2));
      var caption = data.description.captions[0].text;
      console.log('Image caption: ' + caption);
      //   document.getElementById('description').value = caption;
      return caption;
    })

    .fail(function (jqXHR, textStatus, errorThrown) {
      // Display error message.
      var errorString =
        errorThrown === ''
          ? 'Error. '
          : errorThrown + ' (' + jqXHR.status + '): ';
      errorString +=
        jqXHR.responseText === ''
          ? ''
          : jQuery.parseJSON(jqXHR.responseText).message;
      alert(errorString);
    });
}
