var images = document.getElementsByTagName('img');
// To change hrefs of img and add rural.nic.in to it
for (var i = 0; i < images.length; i++) {
  if (images[i].src.includes(window.origin)) {
    str = images[i].src.split('https://rural.nic.in/').pop();
    images[i].src = 'https://rural.nic.in/' + str.split(window.origin).pop();
  }
}
document.getElementById('loader').style.visibility = 'hidden';
$(document).ready(function () {
  url = window.location.href;
  var entry = {
    name: url,
  };
  fetch(`${window.origin}/getcode`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(entry),
    cache: 'no-cache',
    headers: new Headers({
      'content-type': 'application/json',
    }),
  })
    .then(function (response) {
      if (response.status !== 200) {
        console.log(
          `Looks like there was a problem. Status code: ${response.status}`
        );
        return;
      }
      response.json().then(function (data) {
        console.log(data);
        html = data.html;
        console.log(html);
        linkData = findLinks(html);
        console.log(linkData);
        imgData = findLinks(html);
        console.log(imgData);
      });
    })
    .catch(function (error) {
      console.log('Fetch error: ' + error);
    });
});

$(document).ready(function () {
  $("a[href='/']").attr('href', '/?name=home'); //To change links of home to custom home link
});
function findLinks(htmlString) {
  var $container = $('<div/>').html(htmlString);

  //links function
  links = []; //return in function
  $container.find('a').each(function () {
    links.push([this.innerText, this.href);
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
