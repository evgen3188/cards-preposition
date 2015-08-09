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

function below(ctx) {
  var line = new Path2D();
  line.moveTo(0, 100);
  line.lineTo(250, 100);
  ctx.stroke(line);

  var circle = new Path2D();
  circle.arc(50, 150, 25, 0 ,360);
  ctx.fill(circle);
}

function above(ctx) {
  var line = new Path2D();
  line.moveTo(0, 100);
  line.lineTo(250, 100);
  ctx.stroke(line);

  var circle = new Path2D();
  circle.arc(50, 50, 25, 0 ,360);
  ctx.fill(circle);
}

function opposite(ctx) {
  var l1 = new Path2D();
  l1.moveTo(0, 80);
  l1.lineTo(250, 80);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(0, 120);
  l2.lineTo(250, 120);
  ctx.stroke(l2);

  var c1 = new Path2D();
  c1.arc(200, 40, 25, 0 ,360);
  ctx.fill(c1);

  var c2 = new Path2D();
  c2.arc(200, 160, 25, 0 ,360);
  ctx.fill(c2);
}

function next_to(ctx) {
  ctx.strokeRect(10, 50, 105, 100);
  ctx.strokeRect(135, 50, 105, 100);
  ctx.fillStyle = 'rgb(100, 100, 100)';
  ctx.fillRect(138, 53, 99, 94);
}

function through(ctx) {
  ctx.stroke(new Path2D('M 20 180 L 50 20 L 230 20 L 200 180 Z'));
  ctx.stroke(new Path2D('M 0 160 L 250 40'));
}

function among(ctx) {
  var n = 8;
  var da = 2* Math.PI / n;
  var angle = 0;
  var x, y;
  var r = 80;
  var c;
  for (var i = 0; i < n; i++) {
    x = 125 + (r * Math.cos(angle));
    y = 100 - (r * Math.sin(angle));
    c = new Path2D();
    c.arc(Math.floor(x), Math.floor(y), 15, 0, 360);
    ctx.fill(c);

    angle += da;
    console.log(angle);
  }

  ctx.fillStyle = 'rgb(0, 170, 0)';
  c = new Path2D();
  c.arc(125, 100, 15, 0, 360);
  ctx.fill(c);
}

function in_front_of(ctx) {
  ctx.strokeRect(20, 50, 130, 130);
  ctx.strokeRect(100, 20, 130, 130);
  ctx.fillStyle = 'rgb(100, 100, 100)';
  ctx.fillRect(103, 23, 124, 124);
}

function behind(ctx) {
  ctx.strokeRect(20, 50, 130, 130);
  ctx.fillStyle = 'rgb(100, 100, 100)';
  ctx.fillRect(23, 53, 124, 124);
  ctx.strokeRect(100, 20, 130, 130);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillRect(103, 23, 124, 124);
}

function along(ctx) {
  var l = new Path2D();
  l.moveTo(0, 100); l.lineTo(250, 100);
  ctx.stroke(l);

  var c = new Path2D();
  c.arc(210, 60, 25, 25, 0, 360);
  ctx.fill(c);

  ctx.stroke(new Path2D('M 10 130 L 30 110 M 10 110 L 30 130'));
}

function across(ctx) {
  var l1 = new Path2D();
  l1.moveTo(0, 50); l1.lineTo(250, 50);

  var l2 = new Path2D();
  l2.moveTo(0, 150); l2.lineTo(250, 150);

  var l3 = new Path2D();
  l3.moveTo(40, 150); l3.lineTo(210, 50);

  ctx.stroke(l1);
  ctx.stroke(l2);
  ctx.stroke(l3);
}

function against(ctx) {
  ctx.strokeRect(125, 50, 100, 100);

  var l = new Path2D();
  l.moveTo(124, 50);
  l.lineTo(24, 150);
  ctx.stroke(l);
}

function between(ctx) {
  ctx.strokeRect(10, 50, 85, 100);
  ctx.strokeRect(155, 50, 85, 100);

  var c = new Path2D();
  c.arc(125, 100, 15, 15, 0, 360);
  ctx.fill(c);
}

function onto(ctx) {
  ctx.strokeRect(75, 120, 140, 200);

  ctx.lineWidth = 4;

  var l1 = new Path2D();
  l1.moveTo(45, 160);
  l1.bezierCurveTo(15, 60, 95, 80, 145, 120);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(145, 118);
  l2.lineTo(115, 110);
  ctx.stroke(l2);

  var l3 = new Path2D();
  l3.moveTo(145, 118);
  l3.lineTo(125, 95);
  ctx.stroke(l3);
}

function off(ctx) {
  ctx.strokeRect(75, 120, 140, 200);

  ctx.lineWidth = 4;

  var l1 = new Path2D();
  l1.moveTo(145, 118);
  l1.bezierCurveTo(95, 70, 40, 100, 30, 130);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(30, 130);
  l2.lineTo(35, 100);
  ctx.stroke(l2);

  var l3 = new Path2D();
  l3.moveTo(30, 130);
  l3.lineTo(50, 115);
  ctx.stroke(l3);
}

function into(ctx) {
  ctx.stroke(new Path2D('M 75 120 v 77 h 140 v -77'));

  ctx.lineWidth = 4;

  var l1 = new Path2D();
  l1.moveTo(45, 160);
  l1.bezierCurveTo(15, 60, 95, 80, 145, 120);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(145, 118);
  l2.lineTo(115, 110);
  ctx.stroke(l2);

  var l3 = new Path2D();
  l3.moveTo(145, 118);
  l3.lineTo(125, 95);
  ctx.stroke(l3);
}

function out_off(ctx) {
  ctx.stroke(new Path2D('M 75 120 v 77 h 140 v -77'));

  ctx.lineWidth = 4;

  var l1 = new Path2D();
  l1.moveTo(145, 140);
  l1.bezierCurveTo(135, 60, 40, 100, 30, 130);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(30, 130);
  l2.lineTo(35, 100);
  ctx.stroke(l2);

  var l3 = new Path2D();
  l3.moveTo(30, 130);
  l3.lineTo(50, 115);
  ctx.stroke(l3);
}

function past(ctx) {
  ctx.strokeRect(75, 50, 100, 100);

  ctx.lineWidth = 4;

  var l1 = new Path2D();
  l1.moveTo(10, 180);
  l1.lineTo(240, 180);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(240, 180);
  l2.lineTo(210, 170);
  ctx.stroke(l2);

  var l3 = new Path2D();
  l3.moveTo(240, 180);
  l3.lineTo(210, 190);
  ctx.stroke(l3);
}

function to(ctx) {
  ctx.strokeRect(115, 50, 100, 100);

  ctx.lineWidth = 4;

  var l1 = new Path2D();
  l1.moveTo(0, 100);
  l1.lineTo(115, 100);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(115, 100);
  l2.lineTo(85, 90);
  ctx.stroke(l2);

  var l3 = new Path2D();
  l3.moveTo(115, 100);
  l3.lineTo(85, 110);
  ctx.stroke(l3);
}

function towards(ctx) {
  ctx.strokeRect(145, 50, 100, 100);

  ctx.lineWidth = 4;

  var l1 = new Path2D();
  l1.moveTo(0, 100);
  l1.lineTo(85, 100);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(85, 100);
  l2.lineTo(55, 90);
  ctx.stroke(l2);

  var l3 = new Path2D();
  l3.moveTo(85, 100);
  l3.lineTo(55, 110);
  ctx.stroke(l3);

  ctx.setLineDash([2,2]);
  var l4 = new Path2D();
  l3.moveTo(88, 100);
  l3.lineTo(145, 100);
  ctx.stroke(l3);
}

function mov_under(ctx) {
  ctx.strokeRect(75, 20, 100, 100);

  ctx.lineWidth = 4;
  //ctx.setLineDash([4, 4]);
  var l = new Path2D('M 20 100 a 105 65 0 0 0 210 0');
  ctx.stroke(l);

  var l1 = new Path2D();
  l1.moveTo(230, 100);
  l1.lineTo(210, 120);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(230, 100);
  l2.lineTo(240, 120);
  ctx.stroke(l2);
}

function mov_over(ctx) {
  ctx.strokeRect(75, 80, 100, 100);

  ctx.lineWidth = 4;
  var l = new Path2D('M 20 100 a 105 65 0 0 1 210 0');
  ctx.stroke(l);

  var l1 = new Path2D();
  l1.moveTo(230, 100);
  l1.lineTo(210, 80);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(230, 100);
  l2.lineTo(240, 80);
  ctx.stroke(l2);
}

function mov_through(ctx) {
  ctx.stroke(new Path2D('M 20 180 L 50 20 L 230 20 L 200 180 Z'));

  var l1 = new Path2D();
  l1.moveTo(250, 40);
  l1.lineTo(220, 43);
  ctx.stroke(l1);

  var l2 = new Path2D();
  l2.moveTo(250, 40);
  l2.lineTo(232, 63);
  ctx.stroke(l2);

  ctx.setLineDash([3, 3]);
  ctx.stroke(new Path2D('M 0 160 L 250 40'));
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

    mov_through(ctx);
    
    canvas.addEventListener('click', function() {
      var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      window.location.href = image;
    });
  }
});
