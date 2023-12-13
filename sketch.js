function setup() {
    createCanvas(800, 800);
}
class Carrot {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        this.body();
        this.eyes();
        this.pupils();
        this.mouth();
        this.leaf();
        this.arms();
        this.legs();
    }

    body() {
        strokeWeight(3);
        stroke(240, 190, 0);
        fill(255, 170, 0);
        ellipseMode(CENTER);
        ellipse(this.x, this.y+110, 50, 90);
        ellipse(this.x, this.y+90, 70, 90);
        ellipse(this.x, this.y+70, 85, 90);
        ellipse(this.x, this.y+60, 95, 65);
        ellipse(this.x, this.y+50, 100, 55);
        ellipse(this.x, this.y+40, 110, 50);
        ellipse(this.x, this.y+25, 115, 50);
        ellipse(this.x, this.y+10, 114, 50);
        ellipse(this.x, this.y, 110, 50);
        ellipse(this.x, this.y-15, 100, 50);
        ellipse(this.x, this.y-30, 90, 45);
        arc(this.x, this.y-40, 80, 60, 600, 19, PI);
    }

    eyes() {
        stroke(0);
        fill(0);
        circle(this.x-20, this.y-40, 10);
        circle(this.x+20, this.y-40, 10);
    }

    pupils() {
        noStroke();
        fill(255);
        circle(this.x+19, this.y-40, 5);
        circle(this.x-19, this.y-40, 5);
    }

    mouth() {
        stroke(0);
        noFill();
        arc(this.x, this.y-35, 12, 12, 1, 2);
    }

    leaf() {
        stroke(0, 255, 0);
        noFill();
        arc(this.x, this.y-80, 10, 50, 5, 1);
    }

    arms() {
        stroke(0);
        noFill();
        ellipseMode(CORNER);
        arc(this.x-75, this.y-60, 50, 60, 8, 3);
        arc(this.x+52, this.y-25, 80, 40, 2, 3);
    }

    legs() {
        line(this.x+12, this.y+150, this.x+14, this.y+160);
        line(this.x-10, this.y+150, this.x-12, this.y+160);
    }
}

let carrot = new Carrot();

function draw() {
        background(230, 160, 150);
        carrot.draw();

//     //carrot body
//     strokeWeight(3);
//    stroke(240, 190, 0);
//    fill(255, 170, 0);
//    ellipseMode(CENTER);
//    ellipse(400, 510, 50, 90);
//    ellipse(400, 490, 70, 90);
//    ellipse(400, 470, 85, 90);
//    ellipse(400, 460, 95, 65);
//    ellipse(400, 450, 100, 55);
//    ellipse(400, 440, 110, 50);
//    ellipse(400, 425, 115, 50);
//    ellipse(400, 410, 114, 50);
//    ellipse(400, 400, 110, 50);
//    ellipse(400, 385, 100, 50);
//    ellipse(400, 370, 90, 45);
//    arc(400, 360, 80, 60, 600, 19, PI);

//    //face
//    stroke(0); //eyes
//    fill(0);
//    circle(380, 360, 10);
//    circle(420, 360, 10);

//    noStroke(); //pupils
//    fill(255);
//    circle(419, 360, 5);
//    circle(381, 360, 5);

//    stroke(0); //mouth
//    noFill();
//    arc(400, 365, 12, 12, 1, 2);

//    //leaf
//    stroke(0, 255, 0);
//    noFill();
//    arc(400, 320, 10, 50, 5, 1);

//    //arms
//    stroke(0);
//    noFill();
//    ellipseMode(CORNER);
//    arc(325, 340, 50, 60, 8, 3);
//    arc(452, 375, 80, 40, 2, 3);

//    //legs
//    line(412, 550, 415, 560);
//    line(390, 550, 388, 560);
}