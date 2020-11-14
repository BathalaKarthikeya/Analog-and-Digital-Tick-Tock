//declare the variables.
var hr;
var mn;
var sc;

var hrAngle;
var mnAngle;
var scAngle;

function setup() {
  createCanvas(400, 500);

  //choose the angle mode.
  angleMode(DEGREES);
}

function draw() {
  background(0);

  // store the current hours,minutes and seconds.
  //hour
  hr = hour();

  //minute
  mn = minute();

  //second
  sc = second();

  //digital Clock.
  textSize(15);
  fill("red");
  text("DIGITAL CLOCK: ^_^", 50, 400);

  text("ANALOG CLOCK: ^_^", 50, 20);

  textSize(35);
  fill("yellow");
  text(hr + ":" + mn + ":" + sc, 135, 450);

  // <=============END OF DIGITAL CLOCK==============>

  //translate and rotate.
  translate(200, 200);
  rotate(-90);

  // <====================SECOND HAND=====================>

  //code for second hand.
  //draw the arc for second angle.
  noFill();
  strokeWeight(7);
  stroke(255, 0, 0);
  scAngle = map(sc, 0, 60, 0, 360);

  arc(0, 0, 260, 260, 0, scAngle);

  //draw the line for the second hand.
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  // <====================MINUTE HAND======================>

  //code for minute hand.
  //draw the arc for minute angle.
  noFill();
  strokeWeight(7);
  stroke(0, 255, 0);
  mnAngle = map(mn, 0, 60, 0, 360);

  arc(0, 0, 280, 280, 0, mnAngle);

  //draw the line for the minute hand.
  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();

  // <======================HOUR HAND========================>

  //code for hour hand.
  //draw the arc for hour angle.
  noFill();
  strokeWeight(7);
  stroke(0, 0, 255);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  arc(0, 0, 300, 300, 0, hrAngle);

  //draw the line for the hour hand.
  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  // <=====================END OF CODE=======================>

}