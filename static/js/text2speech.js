var available_voices;
var x, y, coords;

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
    var text = $('#speak-text').val();
    speak(text);
  }
});

//power button function
function textToSpeechPower() {
  if (document.getElementById('power').innerHTML == 'Off') {
    document.getElementById('power').innerHTML = 'On';
    document.getElementById('power').style.backgroundColor = '#33cc33';
    console.log('TTS Power On');
    localStorage.setItem('screen_read', 'On');
  } else {
    document.getElementById('power').innerHTML = 'Off';
    console.log('TTS power Off');
    document.getElementById('power').style.backgroundColor = '#e70808';
    localStorage.setItem('screen_read', 'Off');
  }
}

//text to speech based on mouse coodinates
async function showCoords(event, type) {
  var elementMouseIsOver;
  // console.log('Event: ' + event);
  if (type == 'Hover') {
    x = event.clientX;
    y = event.clientY;
  } else if (type == 'Touch') {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  }
  coords = 'X coords: ' + x + ', Y coords: ' + y;
  if (document.getElementById('power').innerHTML == 'On') {
    elementMouseIsOver = document.elementFromPoint(x, y);
    var prevSrc = '';
    if (elementMouseIsOver.children.length > 0) {
      if (elementMouseIsOver.children.length == 1) {
        var text = elementMouseIsOver.childNodes[0].nodeValue;
      } else {
        return 0; //to ignore text inside child tags if present
      }
    } else {
      var text = elementMouseIsOver.innerText;
    }

    //end of changes
    if (elementMouseIsOver.tagName == 'IMG') {
      text = elementMouseIsOver.alt;
      // if (elementMouseIsOver.alt == '' && prevSrc != elementMouseIsOver.src) {
      //   processImage(elementMouseIsOver.src);
      //   text = caption;
      //   prevSrc = elementMouseIsOver.src;
      //   sleep(2000);
      // }
      console.log('TTS text: ' + text);
    }

    if (text != '') {
      speak(text);
      var textMark = localStorage.getItem('text_highlight');
      console.log(textMark);
      if (text != 'X' && textMark == 'On') {
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
function speak(text) {
  var utter = new SpeechSynthesisUtterance();
  utter.text = text;
  utter.rate = 0.8;
  utter.pitch = 0.5;
  utter.voice = available_voices[$('#chosen-voice').val()];
  var synth = window.speechSynthesis;
  synth.speak(utter);
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
  console.log('Mark removed');
}
