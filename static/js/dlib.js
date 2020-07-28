// const MODEL_URL = '/models';
var video = document.getElementById('video');
var constraints = { video: {} };
// var cursor = document.getElementById('cursor');

//this function clicks at the coordinates (x,y)
function clicker(x, y) {
  document.elementFromPoint(x, y).click();
}
function getAllElementsFromPoint(x, y) {
  var elements = [];
  var display = [];
  var item = document.elementFromPoint(x, y);
  while (
    item &&
    item !== document.body &&
    item !== window &&
    item !== document &&
    item !== document.documentElement
  ) {
    elements.push(item);
    display.push(item.style.display);
    item.style.display = 'none';
    item = document.elementFromPoint(x, y);
  }
  // restore display property
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = display[i];
  }
  return elements;
}

//uncomment the below line to display video
// video.style.display = 'none';

function startVideo() {
  if (navigator.getUserMedia) {
    navigator.getUserMedia(
      constraints,
      (stream) => (video.srcObject = stream),
      (err) => alert(JSON.stringify(err))
    );
  } else {
    alert('Your browser does not support getUserMedia()');
  }
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
  faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
]).then(startVideo);

var c = 0;

var basex = 0;
var basey = 0;

var compx = 30;
var compy = 30;

function Cursor(x, y, source) {
  this.x = x;
  this.y = y;
  this.speedx = 0;
  this.speedy = 0;
  this.width = 30;
  this.height = 30;
  this.image = new Image();
  this.image.src = source;
  this.update = function () {
    ctx = CanvasBoard.context;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };
  this.move = function () {
    if (this.x > 0 && this.x < window.innerWidth - this.width) {
      this.x += this.speedx;
    } else if (this.x <= 0) {
      this.x = 5;
    } else {
      this.x = window.innerWidth - this.width - 5;
    }
    if (this.y > 0 && this.y < window.innerHeight - this.height) {
      this.y += this.speedy;
    } else if (this.y <= 0) {
      this.y = 5;
    } else {
      this.y = window.innerHeight - this.height - 5;
    }
  };
}
var CanvasBoard = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.context = this.canvas.getContext('2d');
    //this.canvas.style.border = "5px solid #d3d3d3";
    this.interval = setInterval(updateCanvas, 20);
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  // stop: function () {
  //     clearInterval(this.interval);
  // }
};

function updateCanvas() {
  CanvasBoard.clear();
  component.move();
  component.update();
}

component = new Cursor(compx, compy, cursorImage);
CanvasBoard.start();

setInterval(async () => {
  const useTinyModel = true;
  const detections = await faceapi
    .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks(useTinyModel);

  //console.log(detections.landmarks.positions);
  landmarks = detections.landmarks.positions;
  //console.log(landmarks[0]);

  //faceapi.draw.drawDetections(video, detections);
  //faceapi.draw.drawFaceLandmarks(video, detections);

  var i = [
    landmarks[17],
    landmarks[21],
    landmarks[22],
    landmarks[26],
    landmarks[36],
    landmarks[39],
    landmarks[42],
    landmarks[45],
    landmarks[31],
    landmarks[35],
    landmarks[48],
    landmarks[54],
    landmarks[57],
    landmarks[8],
  ];
  var sumx = 0;
  var sumy = 0;
  //console.log(i);
  for (let v in i) {
    sumx += i[v].x;
    sumy += i[v].y;
  }
  var yaw, pitch;
  //console.log(sumx/14,sumy/14);
  rx = (i[0].x + i[1].x + i[4].x + i[5].x + i[8].x + i[10].x) / 6;
  lx = (i[2].x + i[3].x + i[6].x + i[7].x + i[9].x + i[11].x) / 6;
  ry = (i[0].y + i[1].y + i[4].y + i[5].y + i[8].y + i[10].y) / 6;
  ly = (i[2].y + i[3].y + i[6].y + i[7].y + i[9].y + i[11].y) / 6;
  //console.log("(%d,%d),(%d,%d)",rx,ry,lx,ly);

  c++;

  basex += sumx / 14;
  xbase = basex / c;
  yaw = sumx / 14 + rx + lx - 3 * xbase;
  basey += sumy / 14;
  ybase = basey / c;
  pitch = sumy / 14 + ry + ly - 3 * ybase;

  //console.log("iteration",c);

  //console.log("yaw, pitch :",yaw, pitch);

  r = -(yaw > 75) || yaw < -100;
  u = -(pitch > 75) || pitch < -75;
  console.log(r, u);

  component.speedx = 10 * r;
  component.speedy = -10 * u;

  compx = component.x;
  compy = component.y;
  console.log(compx);
  console.log(compy);
});
