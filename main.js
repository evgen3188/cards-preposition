function inside(ctx) {
  ctx.strokeRect(55, 50, 140, 100);
  var path = new Path2D();
  path.arc(125, 100, 25, 0, 360);
  ctx.fill(path);
}

function outside(ctx) {
  ctx.strokeRect(90, 40, 140, 100);

  var path = new Path2D();
  path.arc(45, 90, 25, 0, 360);
  ctx.fill(path);
}

function near(ctx) {
  ctx.strokeRect(90, 40, 140, 100);

  var path = new Path2D();
  path.arc(45, 65, 25, 0, 360);
  ctx.fill(path);
}

function on(ctx) {
  ctx.strokeRect(45, 120, 160, 200);

  var path = new Path2D();
  path.arc(125, 95, 25, 0, 360);
  ctx.fill(path);
}

function over(ctx) {
  ctx.strokeRect(45, 120, 160, 200);

  var path = new Path2D();
  path.arc(125, 75, 25, 0, 360);
  ctx.fill(path);
}

function under(ctx) {
  ctx.strokeRect(45, 100, 160, 200);

  var path = new Path2D();
  path.arc(125, 145, 25, 0, 360);
  ctx.fill(path);
}

window.addEventListener('load', function() {
  var canvas = document.getElementById('preposition');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.lineWidth = 6;
    var old = ctx.fillStyle;
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, 250, 200);
    ctx.fillStyle = old;

    near(ctx);
    
    canvas.addEventListener('click', function() {
      var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      window.location.href = image;
    });
  }
});
