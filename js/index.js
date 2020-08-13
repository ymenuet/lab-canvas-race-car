const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");

class Car {
    constructor(x, y, imageUrl) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = imageUrl;
        this.width = 40;
        this.height = 80;
    }
    draw() {
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    moveRight() {
        this.x += 5
    }
    moveLeft() {
        this.x -= 5
    }
}

const car = new Car(
    canvas.width / 2 - 20,
    canvas.height - 100,
    "../images/car.png"
);
let intervalId;

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 39) car.moveRight()
    else if (e.keyCode === 37) car.moveLeft()
})

window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };

    function startGame() {
        intervalId = setInterval(updateCanvas, 1000 / 60)
    }
};

function updateCanvas() {
    clearCanvas()
    drawBoard()

}

function clearCanvas() {
    context.clearRect(0, 0, $canvas.width, $canvas.height)
}

function drawBoard() {
    //board background
    context.fillStyle = "gray";
    context.fillRect(0, 0, $canvas.width, $canvas.height);
    //grass
    context.fillStyle = "green";
    context.fillRect(0, 0, 20, $canvas.height);
    context.fillRect($canvas.width - 20, 0, 20, $canvas.height);
    //outside white lines
    context.fillStyle = "white";
    context.fillRect(25, 0, 10, $canvas.height);
    context.fillRect($canvas.width - 35, 0, 10, $canvas.height);
    //white stripes
    for (let i = 0; i < 20; i++) {
        context.fillRect($canvas.width / 2 - 3, i * 35, 6, 20);
    }
    car.draw()
}