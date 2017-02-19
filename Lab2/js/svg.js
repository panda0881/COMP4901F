var blueData = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);   //Initialize an zero array with length 10
var redData = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);   //Initialize an zero array with length 10
var NS = "http://www.w3.org/2000/svg"; //The svg namespace
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
    tempSVG.setAttribute('height', height);
    tempSVG.setAttribute('width', width);
    tempSVG.style.fill = fill;
    return tempSVG;
};

//The display function
function display() {
    var svgContainer = document.getElementById('svg');
    var barHeightTotal = svgContainer.clientHeight;
    var barWidthTotal = svgContainer.clientWidth;


    var svg = document.createElementNS(NS, 'svg');  //create an svg element
    svg.setAttribute('width', barWidthTotal);
    svg.setAttribute('height', barHeightTotal);
    svgContainer.appendChild(svg);  //append the svg element to the container

    //draw the horizontal timeline
    var xAxis = xAxisSVG({x: 0, y: barHeightTotal}, barWidthTotal, 5, '#000000');
    svg.appendChild(xAxis);

    //draw bars
    for (var i = 0; i < blueData.length; i++) {
        var tmp_blue_bar = barSVG({
            x: barWidth * 3 * i,
            y: (1 - blueData[i]) * barHeightTotal
        }, barWidth, blueData[i] * barHeightTotal, '#0000ff');
        svg.appendChild(tmp_blue_bar);
    }

    for (var j = 0; j < redData.length; j++) {
        var tmp_red_bar = barSVG({
            x: barWidth * (3 * j + 1),
            y: (1 - redData[j]) * barHeightTotal
        }, barWidth, redData[j] * barHeightTotal, '#ff0000');
        svg.appendChild(tmp_red_bar);
    }


}



