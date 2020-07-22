var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++) {
  str = images[i].src.split('https://rural.nic.in/').pop();
  images[i].src = 'https://rural.nic.in/' + str.split(window.origin).pop();
}
function findLinks(htmlString) {
  var $container = $('<div/>').html(htmlString);

  //links function
  links = []; //return in function
  $container.find('a').each(function () {
    links.push([this.innerText, this.href]);
  });
  return links;
}

function findImages(htmlString) {
  var $container = $('<div/>').html(htmlString); //necessary for all functions

  //images function
  imgs = []; //return in function
  $container.find('img').each(function () {
    imgs.push([this.src, this.alt]);
  });
  return imgs;
}
