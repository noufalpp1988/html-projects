
var mathPi2 = Math.PI * 2;
var x, y, Ax, Ay, r, cntxt, w, h;


function initializeValue() {
    x = 50, y = 50, r = 15;
    w = $("#bouncing-canvas").width();
    h = $("#bouncing-canvas").height();
    //alert(w + "-" + h);
    var surface = document.getElementById("bouncing-canvas");
    cntxt = surface.getContext("2d");
    var mouseX = 0;
    var mouseY = 0;

}


function circle(x, y, r, w, h) {
    clearPlane(0, 0, w, h);
    cntxt.beginPath();
    cntxt.arc(x, y, r, 0, mathPi2, true);
    cntxt.closePath();
    cntxt.strokeStyle = "#000";
    cntxt.fillStyle = "#0099ff";
    cntxt.stroke();
    cntxt.fill();
}
function renderAnimationLogic() {

    var canvasPos = getPosition(document.getElementById("bouncing-canvas"));
    $("#bouncing-canvas").on('mousemove', function (e) {
        mouseX = e.clientX - canvasPos.x;
        mouseY = e.clientY - canvasPos.y;
        console.log(mouseX + "-" + mouseY);
        circle(mouseX, mouseY, r, w, h);
    });

}
function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }
    return {
        x: xPosition,
        y: yPosition
    };
}
function clearPlane() {
    cntxt.clearRect(0, 0, w, h);
}
function renderGraphicsMouseMove() {
    initializeValue();
    renderAnimationLogic();
}
// animation

