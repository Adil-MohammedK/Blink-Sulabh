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
