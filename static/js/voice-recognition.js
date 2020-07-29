//       authorization tokens for your subscription.
var authorizationEndpoint = 'token.php';
var phrase;
var mouseX, mouseY;

function RequestAuthorizationToken() {
  if (authorizationEndpoint) {
    var a = new XMLHttpRequest();
    a.open('GET', authorizationEndpoint);
    a.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    a.send('');
    a.onload = function () {
      var token = JSON.parse(atob(this.responseText.split('.')[1]));
      serviceRegion = token.region;
      authorizationToken = this.responseText;
      subscriptionKey.disabled = true;
      // subscriptionKey.value =
      //   'using authorization token (hit F5 to refresh)';
      console.log('Got an authorization token: ' + token);
    };
  }
}
// status fields and start button in UI
var phraseDiv;
var startRecognizeOnceAsyncButton;

// subscription key and region for speech services.
var subscriptionKey = '9d8573b1126441f189ccf982d4fdb14e',
  serviceRegion = 'centralindia';
var authorizationToken;
var SpeechSDK;
var recognizer;
var buffer = [];
function keyMapper() {
  let lastKeyTime = Date.now();

  document.addEventListener('keydown', (event) => {
    // we are only interested in alphanumeric keys
    if (event.shiftKey || event.key.toLowerCase() == 'a') {
      const currentTime = Date.now();
      key = event.keyCode;
      if (currentTime - lastKeyTime > 500) {
        buffer = [];
      }

      buffer.push(key);
      console.log('Buffer:' + buffer);
      lastKeyTime = currentTime;
    }
    if (JSON.stringify(buffer) == '[16,38]') {
      //Shift + up arrow
      console.log('Key Combo pressed');
      turnSpeech();
      buffer = [];
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  startRecognizeOnceAsyncButton = document.getElementById(
    'startRecognizeOnceAsyncButton'
  );
  //   phraseDiv = document.getElementById('phraseDiv');
  phraseDiv = '';

  startRecognizeOnceAsyncButton.addEventListener('click', function () {
    startRecognizeOnceAsyncButton.disabled = true;
    phraseDiv = '';

    // if we got an authorization token, use the token. Otherwise use the provided subscription key
    var speechConfig;
    if (authorizationToken) {
      speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(
        authorizationToken,
        serviceRegion
      );
    } else {
      if (subscriptionKey === '' || subscriptionKey === 'subscription') {
        alert(
          'Please enter your Microsoft Cognitive Services Speech subscription key!'
        );
        return;
      }
      speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
        subscriptionKey,
        serviceRegion
      );
    }

    speechConfig.speechRecognitionLanguage = 'en-US';
    var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
    recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync(
      function (result) {
        startRecognizeOnceAsyncButton.disabled = false;
        phraseDiv += result.text;
        window.console.log(result);
        phrase = result.text;
        console.log(phrase);
        recognizer.close();
        recognizer = undefined;
      },
      function (err) {
        startRecognizeOnceAsyncButton.disabled = false;
        phraseDiv += err;
        window.console.log(err);

        recognizer.close();
        recognizer = undefined;
      }
    );
  });
  keyMapper();

  if (!!window.SpeechSDK) {
    SpeechSDK = window.SpeechSDK;
    startRecognizeOnceAsyncButton.disabled = false;
    // in case we have a function for getting an authorization token, call it.
    if (typeof RequestAuthorizationToken === 'function') {
      RequestAuthorizationToken();
    }
  }
});
function turnSpeech() {
  startRecognizeOnceAsyncButton.disabled = true;
  phraseDiv = '';

  // if we got an authorization token, use the token. Otherwise use the provided subscription key
  var speechConfig;
  if (authorizationToken) {
    speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(
      authorizationToken,
      serviceRegion
    );
  } else {
    if (subscriptionKey === '' || subscriptionKey === 'subscription') {
      alert(
        'Please enter your Microsoft Cognitive Services Speech subscription key!'
      );
      return;
    }
    speechConfig = SpeechSDK.SpeechConfig.fromSubscription(
      subscriptionKey,
      serviceRegion
    );
  }

  speechConfig.speechRecognitionLanguage = 'en-US';
  var audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
  recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);

  recognizer.recognizeOnceAsync(
    function (result) {
      startRecognizeOnceAsyncButton.disabled = false;
      phraseDiv += result.text;
      window.console.log(result);
      phrase = result.text;
      console.log(phrase);
      statement(phrase);
      recognizer.close();
      recognizer = undefined;
    },
    function (err) {
      startRecognizeOnceAsyncButton.disabled = false;
      phraseDiv += err;
      window.console.log(err);
      recognizer.close();
      recognizer = undefined;
    }
  );
}
function findCoords(event) {
  var mouseX = event.clientX;
  var mouseY = event.clientY;
}

async function statement(phrase = '') {
  if (phrase.startsWith('Type')) {
    elm = document.elementFromPoint(mouseX, mouseY);
    elm.value = string;
  } else if (phrase.startsWith('Go to link')) {
    string = phrase.split('Find link').pop();
    speak('Finding ' + string);
    for (i = 0; i < linkData.length; i++) {
      string = string.trim().toLowerCase();
      // if (linkData[i].indexOf(string) < 0) break;
      findString = linkData[i][0].trim().toLowerCase() + '.';
      if (findString != string) continue;
      setTimeout(() => {
        speak('Link found. Redirecting');
      }, 1000);
      change();
      window.location.href = linkData[i][1];
    }
  } else if (phrase.startsWith('List out links')) {
    speak('Listing out all links');
    for (i = 19; i < linkData.length; i++) {
      string = linkData[i][0].trim();
      // var outlineElem = findElements('a', linkData[i][0], true);
      speak(string);
      // await sleep(500);
      // outlineElem = findElements('a', linkData[i][0], false, outlineElem);
      document.body.addEventListener('keydown', function (event) {
        if (event.keyCode == '27') {
          event.preventDefault();
          window.speechSynthesis.cancel();
        }
      });
    }
  } else if (phrase.startsWith('Page down')) {
    var height = document.documentElement.clientHeight;
    var id = setInterval(function () {
      window.scrollBy(0, 1);
      height--;
      if (height < 1) clearInterval(id);
    }, 1);
  } else if (phrase.startsWith('Page up')) {
    var height = document.documentElement.clientHeight;
    var id = setInterval(function () {
      window.scrollBy(0, -1);
      height--;
      if (height < 1) clearInterval(id);
    }, 1);
  } else if (phrase.startsWith('Page top')) {
    $('html, body').animate({ scrollTop: '0' });
  } else if (phrase.startsWith('Page bottom')) {
    $('button').click(function () {
      $('html, body').animate(
        {
          scrollTop: $('html, body').get(0).scrollHeight,
        },
        2000
      );
    });
  } else speak('Wrong command.Please try again');
}
