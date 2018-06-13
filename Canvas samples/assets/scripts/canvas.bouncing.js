
var mathPi2 = Math.PI * 2;
var x, y, Ax, Ay, r, cntxt, w, h;


function initializeValue() {
    x = 50, y = 50, Ax = 2, Ay = 4, r = 15, w = $("#bouncing-canvas").width(), h = $("#bouncing-canvas").height();
    //alert(w + "-" + h);
}
function renderGraphicsBouncingBall() {
    initializeValue();
    var surface = document.getElementById("bouncing-canvas");
    cntxt = surface.getContext("2d");
    return setInterval(renderAnimationLogic, 15);
}

function circle(x, y, r) {
    cntxt.beginPath();
    cntxt.arc(x, y, r, 0, mathPi2, true);
    cntxt.closePath();
    cntxt.strokeStyle = "#000";
    cntxt.fillStyle = "#0099ff";
    cntxt.stroke();
    cntxt.fill();
}
function renderAnimationLogic() {
    clearPlane(0,0,w,h);
    circle(x, y, r);
    if (x + Ax > w || x + Ax < 0)
        Ax = -Ax;
    if (y + Ay > h || y + Ay < 0)
        Ay = -Ay;

    x += Ax;
    y += Ay;

}

function clearPlane() {
    cntxt.clearRect(0, 0, w, h);
}

// animation

