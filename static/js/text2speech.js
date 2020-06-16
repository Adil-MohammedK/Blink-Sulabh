var available_voices;

if (window.speechSynthesis.getVoices().length == 0) {
  window.speechSynthesis.addEventListener('voiceschanged', function () {
    getVoiceList();
  });
} else {
  getVoiceList();
}

function getVoiceList() {
  available_voices = window.speechSynthesis.getVoices();

  var select_html = '';
  // find the default voice
  for (var i = 0; i < available_voices.length; i++) {
    select_html +=
      '<option value="' +
      i +
      '">' +
      available_voices[i].name +
      (available_voices[i].default == true ? ' (Default)' : '') +
      '</option>';
  }
  $('#chosen-voice').html(select_html);
}

$('#speak-button').on('click', function () {
  if ($.trim($('#speak-text').val()) != '') {
    var utter = new SpeechSynthesisUtterance();
    utter.text = $('#speak-text').val();
    utter.rate = 0.8;
    utter.pitch = 0.5;
    utter.voice = available_voices[$('#chosen-voice').val()];

    window.speechSynthesis.speak(utter);
  }
});

//power button function
function textToSpeechPower() {
  if (document.getElementById('power').innerHTML == 'Off') {
    document.getElementById('power').innerHTML = 'On';
  } else {
    document.getElementById('power').innerHTML = 'Off';
  }
}

//text to speech based on mouse coodinates
function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;

  var coords = 'X coords: ' + x + ', Y coords: ' + y;
  // document.getElementById("coords").innerHTML = coords;
  var elementMouseIsOver = document.elementFromPoint(x, y);

  // document.getElementById("elementName").innerHTML = elementMouseIsOver.innerText;

  var text = elementMouseIsOver.innerText;

  if ((text != '') & (document.getElementById('power').innerHTML == 'On')) {
    var utter = new SpeechSynthesisUtterance();
    utter.text = text;
    utter.rate = 0.8;
    utter.pitch = 0.5;
    utter.voice = available_voices[$('#chosen-voice').val()];
    var synth = window.speechSynthesis;
    synth.speak(utter);
  }

  document
    .elementFromPoint(x, y)
    .addEventListener('mouseout', function (event) {
      event.preventDefault();
      window.speechSynthesis.cancel();
    });
}
