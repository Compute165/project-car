canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

backImg = "raceBackg.jpg";

car1Img = "car1.png";
car1X = 10;
car1Y = 10;
car1W = 100;
car1H = 90;

car2Img = "car2.png";
car2X = 10;
car2Y = 100;
car2W = 100;
car2H = 90;

function draw() {
    background = new Image();
    background.onload = drawBackg;
    background.src = backImg;

    car1 = new Image();
    car1.onload = drawcar1;
    car1.src = car1Img;

    car2 = new Image();
    car2.onload = drawcar2;
    car2.src = car2Img;
}

function drawBackg() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}

function drawcar1() {
    ctx.drawImage(car1, car1X, car1Y, car1W, car1H);
}

function drawcar2() {
    ctx.drawImage(car2, car2X, car2Y, car2W, car2H);
}


window.addEventListener("keydown", keyDown);

function keyDown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "38") {

        console.log("up");
        up1();
    }

    if (keyPressed == "40") {

        console.log("down");
        down1();
    }

    if (keyPressed == "37") {

        console.log("left");
        left1();
    }

    if (keyPressed == "39") {

        console.log("right");
        right1();
    }

    if (keyPressed == "87") {

        console.log("up");
        up2();
    }

    if (keyPressed == "83") {

        console.log("down");
        down2();
    }

    if (keyPressed == "65") {

        console.log("left");
        left2();
    }

    if (keyPressed == "68") {

        console.log("right");
        right2();
    }
}