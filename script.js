var canvas = document.getElementById("canvas")
canvas.addClass = "canvas";

var palette = document.getElementById("palette");

for (let i = 0; i < 2542; i++) {
   var cell = document.createElement("div");
   cell.classList.add("cell");
   canvas.appendChild(cell);
   cell.addEventListener("click", fill)
}

var colorArray = ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC',
          '#3D9970', '#2ECC40', '#01FF70', '#FFDC00', '#FF851B',
          '#FF4136', '#85144b', '#F012BE',
          '#B10DC9', '#111111', '#AAAAAA', '#DDDDDD', '#FFFFFF'];
          
for (let i = 0; i < colorArray.length; i++) {
   var color = document.createElement("div");
   color.classList.add("color");
   color.style.backgroundColor = colorArray[i];
   color.addEventListener("click", penColor)
   palette.appendChild(color);
}

var pen = color.style.backgroundColor
function penColor() {
   pen = event.target.style.backgroundColor;
}


function fill() {
   event.target.style.backgroundColor = pen;
}

var selector = document.createElement("div");
selector.classList.add("selector");
selector.style.backgroundColor = pen;
palette.appendChild(selector);
selector.addEventListener("click",fill)



