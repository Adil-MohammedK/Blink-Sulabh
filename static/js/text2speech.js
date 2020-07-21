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
  var prevSrc = '';
  text = elementMouseIsOver.innerText;
  if (elementMouseIsOver.tagName == 'IMG') {
    text = elementMouseIsOver.alt;
    if (elementMouseIsOver.alt == '' && prevSrc != elementMouseIsOver.src) {
      text = processImage(elementMouseIsOver.src);
      prevSrc = elementMouseIsOver.src;
    }
    console.log('TTS text: ' + text);
  }
  // document.getElementById("elementName").innerHTML = elementMouseIsOver.innerText;

  // else if (type == 'Touch')

  if ((text != '') & (document.getElementById('power').innerHTML == 'On')) {
    var utter = new SpeechSynthesisUtterance();
    utter.text = text;
    utter.rate = 0.8;
    utter.pitch = 0.5;
    utter.voice = available_voices[$('#chosen-voice').val()];
    var synth = window.speechSynthesis;
    synth.speak(utter);
    var innerHTML = elementMouseIsOver.innerHTML;
    var index = innerHTML.indexOf(text);
    if (index >= 0) {
      innerHTML =
        innerHTML.substring(0, index) +
        '<mark>' +
        innerHTML.substring(index, index + text.length) +
        '</mark>' +
        innerHTML.substring(index + text.length);
      elementMouseIsOver.innerHTML = innerHTML;
    }
  }
  if (type == 'Hover') {
    document
      .elementFromPoint(x, y)
      .addEventListener('mouseout', function (event) {
        event.preventDefault();
        window.speechSynthesis.cancel();
        removeMark();
      });
  } else if (type == 'Touch') {
    document
      .elementFromPoint(x, y)
      .addEventListener('touchend', function (event) {
        event.preventDefault();
        window.speechSynthesis.cancel();
        removeMark();
      });
  }
}
function removeMark() {
  var mark = document.getElementsByTagName('mark');
  while (mark.length) {
    var parent = mark[0].parentNode;
    while (mark[0].firstChild) {
      parent.insertBefore(mark[0].firstChild, mark[0]);
    }
    parent.removeChild(mark[0]);
  }
}
