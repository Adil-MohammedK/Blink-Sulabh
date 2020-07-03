var available_voices;
var TTS_Power = localStorage.getItem('TTS_Power');
console.log('TTS Power on start: ' + TTS_Power);
if (TTS_Power == 'On') textToSpeechPower();
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
    console.log('TTS Power On');
    localStorage.setItem('TTS_Power', 'On');
  } else {
    document.getElementById('power').innerHTML = 'Off';
    console.log('TTS power Off');
    localStorage.setItem('TTS_Power', 'Off');
  }
}

//text to speech based on mouse coodinates
function showCoords(event, type) {
  var x, y, coords, elementMouseIsOver;
  console.log('Event: ' + event);
  if (type == 'Hover') {
    x = event.clientX;
    y = event.clientY;
  } else if (type == 'Touch') {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  }
  coords = 'X coords: ' + x + ', Y coords: ' + y;
  // document.getElementById("coords").innerHTML = coords;
  elementMouseIsOver = document.elementFromPoint(x, y);

  // document.getElementById("elementName").innerHTML = elementMouseIsOver.innerText;
  text = elementMouseIsOver.innerText;
  // else if (type == 'Touch')

  if ((text != '') & (document.getElementById('power').innerHTML == 'On')) {
    var utter = new SpeechSynthesisUtterance();
    utter.text = text;
    utter.rate = 0.8;
    utter.pitch = 0.5;
    utter.voice = available_voices[$('#chosen-voice').val()];
    var synth = window.speechSynthesis;
    synth.speak(utter);
  }
  if (type == 'Hover') {
    document
      .elementFromPoint(x, y)
      .addEventListener('mouseout', function (event) {
        event.preventDefault();
        window.speechSynthesis.cancel();
      });
  } else if (type == 'Touch') {
    document
      .elementFromPoint(x, y)
      .addEventListener('touchend', function (event) {
        event.preventDefault();
        window.speechSynthesis.cancel();
      });
  }
}

function addTTS(body) {
  document.querySelectorAll('*').forEach(function (node) {
    var attr = document.createAttribute('ontouchmove');
    var text = node.innerText;
    attr.value = "showCoords(event,'Touch',text)";
    node.setAttribute(attr);
  });
  console.log('TTS touchmove added');
}
