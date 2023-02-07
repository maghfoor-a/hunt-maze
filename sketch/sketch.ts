function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop();
}

function draw() {
    background("white");

    const circlesArray: CircleData[] = calculatePackedCircles(width, height);

    for (const c of circlesArray) {
        drawCircle(c);
    }
}

function drawCircle(c: CircleData) {
    const shade = random(50, 100);
    fill(shade);
    noStroke();
    circle(c.position.x, c.position.y, c.radius * 2);
}

// If user clicks, draw() will be called again (indirectly)
function mousePressed() {
    redraw();
}
