function setup() {
  	createCanvas(500, 600);
    background('white');
    xGap = 10;
    w = width - 2 * xGap;
}

function draw() {
    strokeColor = 0;
    y = 30;
        h = 38;
    fill(strokeColor);
    strokeWeight(0)
    for (let i = 0; i < 15; i++) {
        rect(xGap, y, w, h);
        y += h + 5;
        h = 31;
        strokeColor += 10;
        fill(strokeColor)
    }

    for (let i = 0; i < 50000; i++) {
        strokeWeight(0.5);
        stroke(random(255), random(255), random(255));
        point(random(width), random(height), random(255));
    }
    noLoop()

}
