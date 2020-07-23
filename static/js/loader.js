function clickOrigin(e) {
  var target = e.target;
  var tag = [];
  tag.tagType = target.tagName.toLowerCase();
  tag.tagClass = target.className.split(' ');
  tag.id = target.id;
  tag.parent = target.parentNode.tagName.toLowerCase();
  str = target.href;
  urlEnd = str.split(window.origin + window.location.pathname).pop();
  console.log('Url tail:' + urlEnd);
  tag.href = urlEnd;
  console.log(tag);
  return tag;
}
function change() {
  document.body.style.background = ' #347fc7';
  document.querySelector('#body').style.display = 'none';
  document.getElementById('loader').style.display = 'block';
  document.querySelector('#loader').style.visibility = 'visible';
}
var tagsToIdentify = ['img', 'a'];

document.body.onclick = function (e) {
  elem = clickOrigin(e);
  if (elem.href == 'javascript:void(0);') {
    return false;
  } else if (elem.href == '#' || elem.href == ('${window.location.href}#`)) {
    return false;
  } else {
    for (i = 0; i < tagsToIdentify.length; i++) {
      if (elem.tagType == tagsToIdentify[i] && elem.parent == 'a') {
        console.log(
          "You've clicked a monitored tag (" +
            elem.tagType +
            ', in this case and one inside an "a" element, no less!).'
        );
        change();
      } else if (elem.tagType == tagsToIdentify[i]) {
        console.log(
          "You've clicked a monitored tag (" + elem.tagType + ', in this case).'
        );
        change();
      }
    }
  }
};
