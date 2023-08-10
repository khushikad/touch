canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

var mouseevent = "";
var oldx;
var oldy;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e) {
    mouseevent = "mousedown";

}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e) {
    mouseevent = "mouseleave";

}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e) {
    mouseevent = "mouseup";

}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e) {
    currentx = e.clientX - canvas.offsetLeft;
    currenty = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = "indigo";
        ctx.lineWidth = 3;
        ctx.moveTo(oldx, oldy);
        ctx.lineTo(currentx, currenty);
        ctx.stroke();
    }
    oldx = currentx;
    oldy = currenty;

}

canvas.addEventListener("touchstart", mytouchstart);
function mytouchstart(e) {
    oldx = e.touches[0].clientX - canvas.offsetLeft;
    oldy = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = "indigo";
    ctx.lineWidth = 3;
    ctx.moveTo(oldx, oldy);
    ctx.lineTo(currentx, currenty);
    ctx.stroke();

    oldx = currentx;
    oldy = currenty;
}

