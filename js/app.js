function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function draw() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var tileWidth = 120;
  var srcRow = [
    document.getElementById('tile-1'),
    document.getElementById('tile-2'),
    document.getElementById('tile-3'),
    document.getElementById('tile-4'),
    document.getElementById('tile-5'),
    document.getElementById('tile-6')
  ];

  for(i=0; i<6; i++) {
    var row = shuffle(srcRow);
    var y = i*tileWidth;
    for(n=0;n<6;n++) {
      var x = n*tileWidth;
      ctx.drawImage(row[n], x, y, tileWidth, tileWidth);
    }
  }
}

$(function() { if($('#canvas').length > 0) { draw(); } });