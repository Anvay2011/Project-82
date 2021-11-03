canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="blue";
var width_line=4;
var radius=4;
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){

  color=document.getElementById("color_chosen").value;
    width_line=document.getElementById("width_line").value;
    radius=document.getElementById("radius_chosen").value;

    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUP";
}


canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY-canvas.offsetTop;
  
  if (mouseEvent=="mouseDown" ){
      ctx.beginPath();
      ctx.strokeStyle= color;
      ctx.lineWidth= width_line;
      ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI)

      console.log("Last position of x and y cordinates = ");
      console.log("x = " + last_position_of_x + "y =" + last_position_of_y);
      ctx.moveTo(last_position_of_x, last_position_of_y);

      console.log("Current position of x and y cordinates = ");
      console.log("x = " + current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
      ctx.stroke();
  }

  last_position_of_x=current_position_of_mouse_x;
  last_position_of_y=current_position_of_mouse_y;
}
function clear_canvas(){
  ctx.clearRect(0,0, canvas.width,canvas.height)
}