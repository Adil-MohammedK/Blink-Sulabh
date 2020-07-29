//warning for caps lock off
var input = document.getElementsByTagName("input");
// When the user presses any key on the keyboard, run the function
for(let i=0; i<input.length; i++){
if(input[i].addEventListener){ input[i].addEventListener("keyup", function(event) {
  // If "caps lock" is pressed, display the warning text
  if (event.getModifierState("CapsLock")) {
    var text = document.createElement("P");   // Create a <button> element
    text.innerHTML = "WARNING!Caps Lock is OFF!";                   // Insert text
    text.style.color = "red";
    input[i].insertAdjacentElement("afterend", text);               // Append <button> to <body>    
    alert("Warning!Caps Lock is off!");
  }
});
}

//warning for not loading video
var video = document.getElementsByTagName("video");
for(let i=0;i<video.length;i++){
    video[i].addEventListener("abort",abortFunction(event));
    video[i].oncanplay = function() {
      alert("Can start playing video");
  };
  video[i].onerror = function() {
    alert("Error! Something went wrong");
  };
  video[i].onloadstart = function() {
    alert("Starting to load video");
  };
  video[i].onseeked = function() {
    alert("Seek operation completed!");
  };
  video[i].onstalled = function() {
    alert("Media data is not available");
  };
  video[i].onsuspend = function() {
    alert("Loading of the media is suspended");
  };
  video[i].onwaiting = function() {
    alert("Wait! I need to buffer the next frame");
  };
  isSupp = video[i].canPlayType(vidType+';codecs="'+codType+'"');
  if(isSupp==""){
    alert("Your Browser doesn't support this media type!");
  }
}
function abortFunction(event){
    alert("Video Loading Aborted!");
}
//for audio
var audio = document.getElementsByTagName("audio");
for(let i=0;i<audio.length;i++){
    audio[i].addEventListener("abort",abortFunctionAudio(event));
    audio[i].oncanplay = function() {
      alert("Can start playing audio");
  };
  audio[i].onerror = function() {
    alert("Error! Something went wrong");
  };
  audio[i].onloadstart = function() {
    alert("Starting to load audio");
  };
  audio[i].onseeked = function() {
    alert("Seek operation completed!");
  };
  audio[i].onstalled = function() {
    alert("Media data is not available");
  };
  audio[i].onsuspend = function() {
    alert("Loading of the media is suspended");
  };
  audio[i].onwaiting = function() {
    alert("Wait! I need to buffer the next frame");
  };
}
function abortFunctionAudio(event){
  alert("Audio Loading Aborted!");
}

