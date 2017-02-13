var ave = 0;
var arrayData = Array.apply(null, Array(10)).map(Number.prototype.valueOf, 0);   //Initialize an zero array with length 10

randomizer(arrayData);

function randomizer(d) {
    for (var i = 0, len = d.length; i < len; i++) {
        d[i] = Math.random();
    }
}

function averager(d) {
    var total = 0;
    for (var i = 0, len = d.length; i < len; i++) {
        total += d[i];
    }
    ave = total / d.length;
}

function display() {
    randomizer(arrayData);
    averager(arrayData);
    document.getElementById("array").innerHTML = arrayData;
    document.getElementById("ave").innerHTML = ave;
}



