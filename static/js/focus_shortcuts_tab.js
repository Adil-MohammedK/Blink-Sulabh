var para = document.getElementsByTagName('p');
for (let i = 0; i < para.length; i++) {
  if (para[i].accessKey == '') {
    para[i].accessKey = 'p';
  }
  para[i].focus();
}
var h1 = document.getElementsByTagName('h1');
for (let i = 0; i < h1.length; i++) {
  if (h1[i].accessKey == '') {
    h1[i].accessKey = '1';
  }
  h1[i].focus();
}
var h2 = document.getElementsByTagName('h2');
for (let i = 0; i < h2.length; i++) {
  if (h2[i].accessKey == '') {
    h2[i].accessKey = '2';
  }
  h2[i].focus();
}
var h3 = document.getElementsByTagName('h3');
for (let i = 0; i < h3.length; i++) {
  if (h3[i].accessKey == '') {
    h3[i].accessKey = '3';
  }
  h3[i].focus();
}
var h4 = document.getElementsByTagName('h4');
for (let i = 0; i < h4.length; i++) {
  if (h4[i].accessKey == '') {
    h4[i].accessKey = '4';
  }
  h4[i].focus();
}
var h5 = document.getElementsByTagName('h5');
for (let i = 0; i < h5.length; i++) {
  if (h5[i].accessKey == '') {
    h5[i].accessKey = '5';
  }
  h5[i].focus();
}
var h6 = document.getElementsByTagName('h6');
for (let i = 0; i < h6.length; i++) {
  if (h6[i].accessKey == '') {
    h6[i].accessKey = '6';
  }
  h6[i].focus();
}
var em = document.getElementsByTagName('em');
for (let i = 0; i < em.length; i++) {
  if (em[i].accessKey == '') {
    em[i].accessKey = 'i';
  }
  em[i].focus();
}
var b = document.getElementsByTagName('b');
for (let i = 0; i < b.length; i++) {
  if (b[i].accessKey == '') {
    b[i].accessKey = 'i';
  }
  b[i].focus();
}
var strong = document.getElementsByTagName('strong');
for (let i = 0; i < strong.length; i++) {
  if (strong[i].accessKey == '') {
    strong[i].accessKey = 'i';
  }
  strong[i].focus();
}
var underline = document.getElementsByTagName('u');
for (let i = 0; i < underline.length; i++) {
  if (underline[i].accessKey == '') {
    underline[i].accessKey = 'i';
  }
  underline[i].focus();
}
var anchor = document.getElementsByTagName('a');
for (let i = 0; i < anchor.length; i++) {
  if (anchor[i].accessKey == '') {
    anchor[i].accessKey = 'h';
  }
  anchor[i].focus();
  alert('You are being taken to another part or subpage or external link');
}
var list = document.getElementsByTagName('ul');
for (let i = 0; i < list.length; i++) {
  if (list[i].accessKey == '') {
    list[i].accessKey = 'l';
  }
  anchor[i].focus();
}
var li = document.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
  li[i].focus();
}
var olist = document.getElementsByTagName('ol');
for (let i = 0; i < olist.length; i++) {
  if (olist[i].accessKey == '') {
    olist[i].accessKey = 'l';
  }
  olist[i].focus();
}
var table = document.getElementsByTagName('table');
for (let i = 0; i < table.length; i++) {
  if (table[i].accessKey == '') {
    table[i].accessKey = 't';
  }
  table[i].focus();
}
var tr = document.getElementsByTagName('tr');
for (let i = 0; i < tr.length; i++) {
  tr[i].focus();
}
var td = document.getElementsByTagName('td');
for (let i = 0; i < td.length; i++) {
  td[i].focus();
}
var th = document.getElementsByTagName('th');
for (let t = 0; i < th.length; i++) {
  th[i].focus();
}
var form = document.getElementsByTagName('form');
for (let i = 0; i < form.length; i++) {
  if (form[i].accessKey == '') {
    form[i].accessKey = 'f';
  }
  form[i].focus();
}
var input = document.getElementsByTagName('input');
for (let i = 0; i < input.length; i++) {
  if (input[i].accessKey == '') {
    input[i].accessKey = 'n';
  }
  input[i].focus();
}
var option = document.getElementsByTagName('option');
for (let i = 0; i < option.length; i++) {
  if (option[i].accessKey == '') {
    option[i].accessKey = 'o';
  }
  option[i].focus();
}
var blockquote = document.getElementsByTagName('blockquote');
for (let i = 0; i < blockquote.length; i++) {
  if (blockquote[i].accessKey == '') {
    blockquote[i].accessKey = 'q';
  }
  blockquote[i].focus();
}
var button = document.getElementsByTagName('button');
for (let i = 0; i < button.length; i++) {
  if (button[i].accessKey == '') {
    button[i].accessKey = 's';
  }
  button[i].focus();
}
