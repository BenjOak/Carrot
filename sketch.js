function setup() {
    createCanvas(800, 800);
}
let carrot = new class Carrot {
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
        ellipse(400, 510, 50, 90);
        ellipse(400, 490, 70, 90);
        ellipse(400, 470, 85, 90);
        ellipse(400, 460, 95, 65);
        ellipse(400, 450, 100, 55);
        ellipse(400, 440, 110, 50);
        ellipse(400, 425, 115, 50);
        ellipse(400, 410, 114, 50);
        ellipse(400, 400, 110, 50);
        ellipse(400, 385, 100, 50);
        ellipse(400, 370, 90, 45);
        arc(400, 360, 80, 60, 600, 19, PI);
    }

    eyes() {
        stroke(0);
        fill(0);
        circle(380, 360, 10);
        circle(420, 360, 10);
    }

    pupils() {
        noStroke();
        fill(255);
        circle(419, 360, 5);
        circle(381, 360, 5);
    }

    mouth() {
        stroke(0);
        noFill();
        arc(400, 365, 12, 12, 1, 2);
    }

    leaf() {
        stroke(0, 255, 0);
        noFill();
        arc(400, 320, 10, 50, 5, 1);
    }

    arms() {
        stroke(0);
        noFill();
        ellipseMode(CORNER);
        arc(325, 340, 50, 60, 8, 3);
        arc(452, 375, 80, 40, 2, 3);
    }

    legs() {
        line(412, 550, 415, 560);
        line(390, 550, 388, 560);
    }
}

function draw() {
        background(230, 160, 150);
        carrot.draw(width/2, height/2);

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