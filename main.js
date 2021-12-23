function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    fill(250, 191, 201);
    
    circle(40,40,50); 
    rect(230, 15, 55, 55, 20);
    circle(460,40,50);
    rect(432, 170, 55, 55, 20);
    circle(40,360,50);
    rect(12, 170, 55, 55, 20);
    circle(460,360,50);
    rect(230, 333, 55, 55, 20);


    stroke(50, 178, 82);
    fill(0,0,0);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
}

function take_snapshot(){
    save("frame_picture.png");
}