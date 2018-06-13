
var mathPi2 = Math.PI * 2;
var x, y, r, Lx, Ly, cntxt, w, h,
    up = 38,
    down = 40,
    left = 37,
    right = 39;

function initializeValue() {
    x = 50, y = 50, r = 15, Ax = x, Ay = y, Lx = 2, Ly = 4;
    w = $("#arrowkey-canvas").width();
    h = $("#arrowkey-canvas").height();
    var surface = document.getElementById("arrowkey-canvas");
    cntxt = surface.getContext("2d");
    circle(x, y, r, w, h);

}
function getKeyValue(event) {
    var arrowValue = event.which || event.keyCode;
    if (arrowValue == up || arrowValue == down || arrowValue == left || arrowValue == right) {
        $("p.out").text("The Unicode value is: " + arrowValue);
        switch (arrowValue) {
            case up: {
                $("p.out").append(" - (UP KEY)").removeClass("red").addClass("green");
                Ax = x;
                Ay = y;
                Ay = y - 10;
                renderAnimationLogic(Ax, Ay);
                break;
            }
            case down: {
                $("p.out").append(" - (DOWN KEY)").removeClass("red").addClass("green");
                Ax = x;
                Ay = y;
                Ay = y + 10;
                renderAnimationLogic(Ax, Ay);
                break;
            }
            case left: {
                $("p.out").append(" - (LEFT KEY)").removeClass("red").addClass("green");
                Ax = x;
                Ay = y;
                Ax = x - 10;
                renderAnimationLogic(Ax, Ay);
                break;
            }
            case right: {
                $("p.out").append(" - (RIGHT KEY)").removeClass("red").addClass("green");
                Ax = x;
                Ay = y;
                Ax = x + 10;
                renderAnimationLogic(Ax, Ay);
                break;
            }
            default: {

            }
        }
    }
    else {
        $("p.out").text("Please use arrow keys to navigate.").removeClass("green").addClass("red");
    }
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
function renderAnimationLogic(Ax, Ay) {

    x = Ax, y = Ay;

    if (x + Lx > w) {
        Ax = w;
    }
    else if (x + Lx < 0) {
        Ax = 0;
    }
    if (y + Ly > h) {
        Ay = h;
    }
    else if (y + Ly < 0) {
        Ay = 0;
    }
    if (x + Lx > w || x + Lx < 0) {
        $("p.out").text("X Limits Reached!").removeClass("green").addClass("red");
    }
    else if (y + Ly > h || y + Ly < 0) {
        $("p.out").text("Y Limits Reached!").removeClass("green").addClass("red");
    }


    circle(Ax, Ay, r, w, h);
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
function renderGraphicsArrowkeyMove() {
    initializeValue();
    $(window).on('keydown', getKeyValue);
}
// animation

