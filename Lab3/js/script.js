var blueData = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);   //Initialize an zero array with length 10
var redData = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);   //Initialize an zero array with length 10
var NS = "http://www.w3.org/2000/svg"; //The svg namespace
var barHeightTotal = 0;
var barWidthTotal = 0;
//DEFINE YOUR VARIABLES UP HERE
var barWidth = 20;
var color = ['#0000ff', '#ff0000'];

//

randomizer(blueData);
randomizer(redData);

//Generate array data randomly
function randomizer(d) {
    for (var i = 0, len = d.length; i < len; i++) {
        d[i] = Math.random();
    }
}

//the horizontal timeline
var xAxisSVG = function (startP, length, width, stroke) {
    var tempSVG = document.createElementNS(NS, 'line');
    tempSVG.setAttribute('x1', startP.x);
    tempSVG.setAttribute('y1', startP.y);
    tempSVG.setAttribute('x2', startP.x + length);
    tempSVG.setAttribute('y2', startP.y);
    tempSVG.style.stroke = stroke;
    tempSVG.style.strokeWidth = width;
    return tempSVG;
};

//bar
var barSVG = function (startP, width, height, fill) {
    var tempSVG = document.createElementNS(NS, 'rect');
    tempSVG.setAttribute('x', startP.x);
    tempSVG.setAttribute('y', startP.y);
    tempSVG.setAttribute('width', width);
    tempSVG.setAttribute('height', height);
    tempSVG.style.fill = fill;
    return tempSVG;
};

//The display function
function display() {
    var svgContainer = document.getElementById('svg');
    barHeightTotal = svgContainer.clientHeight;
    barWidthTotal = svgContainer.clientWidth;

    var svg = document.createElementNS(NS, 'svg');  //create an svg element
    svg.setAttribute('width', barWidthTotal);
    svg.setAttribute('height', barHeightTotal);
    svgContainer.appendChild(svg);  //append the svg element to the container

    //draw the horizontal timeline
    var xAxis = xAxisSVG({x: 0, y: barHeightTotal}, barWidthTotal, 5, '#000000');
    svg.appendChild(xAxis);

    //draw bars
    for (var i = 0; i < blueData.length; i++) {
        var blue_bar = barSVG({
            x: 3 * i * barWidth,
            y: barHeightTotal * (1 - blueData[i])
        }, barWidth, blueData[i] * barHeightTotal, color[0]);
        svg.appendChild(blue_bar);
    }
    for (var j = 0; j < redData.length; j++) {
        var red_bar = barSVG({
            x: (3 * j + 1) * barWidth,
            y: barHeightTotal * (1 - redData[j])
        }, barWidth, redData[j] * barHeightTotal, color[1]);
        svg.appendChild(red_bar);
    }
}

function drawBlue() {
    var canvas = document.getElementById('canvas');
    var blue_ctx = canvas.getContext('2d');
    blue_ctx.strokeStyle = '#0000FF';
    blue_ctx.beginPath();
    for (var i = 0; i < blueData.length; i++) {
        var current_position = {x: (3 * i + 0.5) * barWidth, y: barHeightTotal * (1 - blueData[i])};
        blue_ctx.moveTo(current_position.x, current_position.y);
        blue_ctx.arc(current_position.x,current_position.y,6,0,2*Math.PI);
        if (i < blueData.length - 1) {
            var next_position = {x: (3 * (i + 1) + 0.5) * barWidth, y: barHeightTotal * (1 - blueData[i + 1])};

            blue_ctx.lineTo(next_position.x, next_position.y);
        }
    }
    blue_ctx.stroke();
}

function drawRed() {
    var canvas = document.getElementById('canvas');
    var red_ctx = canvas.getContext('2d');
    red_ctx.strokeStyle = '#FF0000';
    red_ctx.beginPath();
    for (var i = 0; i < redData.length; i++) {
        var current_position = {x: (3 * i + 1.5) * barWidth, y: barHeightTotal * (1 - redData[i])};
        red_ctx.moveTo(current_position.x, current_position.y);
        red_ctx.arc(current_position.x,current_position.y,6,0,2*Math.PI);
        if (i < redData.length - 1) {
            var next_position = {x: (3 * (i + 1) + 1.5) * barWidth, y: barHeightTotal * (1 - redData[i + 1])};

            red_ctx.lineTo(next_position.x, next_position.y);
        }
    }
    red_ctx.stroke();
}



