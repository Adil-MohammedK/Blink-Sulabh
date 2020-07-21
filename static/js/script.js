var body = '',
  head = '',
  html = '';
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
      });
    })
    .catch(function (error) {
      console.log('Fetch error: ' + error);
    });
});
