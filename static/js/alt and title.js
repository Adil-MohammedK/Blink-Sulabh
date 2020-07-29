//code to add title for all anchor tags
var anchor = document.getElementsByTagName('a');
for (let i = 0; i < anchor.length; i++) {
  var hrefAnchor = anchor[i].href;
  if (anchor[i].title == '') {
    anchor[i].title = hrefAnchor;
  }
}
//code to set all address italics to normal for dyslexic
var address = document.getElementsByTagName('address');
for (let i = 0; i < address.length; i++) {
  address[i].style.fontStyle = 'normal';
  if (address[i].title == '') {
    address[i].title = 'address';
  }
}
//code to set all body text from italics to normal and sans serif fonts for dyslexic
document.body.style.fontStyle = 'normal';
document.body.style.fontFamily = 'sans serif';
//code to add alt text to an image map area
var area = document.getElementsByTagName('area');
for (let i = 0; i < area.length; i++) {
  var hrefArea = area[i].href;
  if (area[i].alt == '') {
    area[i].alt = hrefArea;
  }
}
//code to enable read aloud line breaks
var br = document.getElementsByTagName('br');
for (let i = 0; i < br.length; i++) {
  br[i].title = 'Line Break';
}
