function arrCopy(arr) {
  var tempArr = [];
  for (var a = 0; a < arr.length; a++) {
    tempArr.push(arr[a]);
  }
  return tempArr;
}

var arr1 = [];
var arr2 = [];
var arr3 = [];
function setup() {
  for (var i = 0; i < 15; i++) {
    var n = Math.random();
    arr1.push(n);
    arr2.push(n);
    arr3.push(n);
  } 
}

//Selection sort.
var selection = function( p ) {
  var dataBank = [];

  p.setup = function() {
    p.createCanvas(1000, 300);
    p.pixelDensity(1);
    p.background(200);

    p.textAlign(CENTER, CENTER);
    p.fill(0, 0, 255, 40);
    p.textSize(100);
    p.text("Selection Sort", 500, 150);
    p.textSize(50);
    p.text(0, 500, 225);

    dispPoints(arr1);
    selectionSort(arr1);

    console.log("ss:" + dataBank.length);
  };

  var i = 0;
  
  p.keyPressed = function() {
    if (i < dataBank.length){
      p.clear();
      p.background(200);
      dispPoints(dataBank[i]);

      p.textAlign(CENTER, CENTER);
      p.fill(0, 0, 255, 40);
      p.textSize(100);
      p.text("Selection Sort", 500, 150);
      p.textSize(50);
      p.text(i + 1, 500, 225);

      i++;
    }
    return false;
  }


  function dispPoints(data) {
    var ptsDisp = [];
    p.fill(0);
    var delx = (p.canvas.width - 20) / data.length; //Padding of width 10 on either side
    
    for(var i = 0; i < data.length; i++) {
      var pnt = [10 + delx * i, p.canvas.height - 10 - (data[i] * (p.canvas.height / 1.5))];
    
      p.ellipse(pnt[0], pnt[1], 10, 10);
      if(ptsDisp.length > 0) {
        p.line(ptsDisp[ptsDisp.length - 1][0], ptsDisp[ptsDisp.length - 1][1], pnt[0], pnt[1]);
      }
      ptsDisp.push(pnt);
    }
  }

  function selectionSort(list) {
    for (var i = 0; i < list.length - 1; i++) {
        var minVal = list[i];
        var index = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[j] < minVal) {
                minVal = list[j];
                index = j; 
            }
            dataBank.push(arrCopy(list));
        }
        var temp = list[i];
        list[i] = list[index];
        list[index] = temp;
    }
    dataBank.push(arrCopy(list));
    return list;
  }
  
};
var myp5 = new p5(selection, 'ss');

//Bubble sort
var bubble = function( p ) { 
  var dataBank = [];

  p.setup = function() {
    p.createCanvas(1000, 300);
    p.pixelDensity(1);
    p.background(200);

    p.textAlign(CENTER, CENTER);
    p.fill(0, 0, 255, 40);
    p.textSize(100);
    p.text("Bubble Sort", 500, 150);
    p.textSize(50);
    p.text(0, 500, 225);

    dispPoints(arr2);
    bubbleSort(arr2);
    console.log("bs:" + dataBank.length);
  };

  var i = 0;
  p.keyReleased = function() {
    if (i < dataBank.length){
      p.clear();
      p.background(200);
      dispPoints(dataBank[i]);

      p.textAlign(CENTER, CENTER);
      p.fill(0, 0, 255, 40);
      p.textSize(100);
      p.text("Bubble Sort", 500, 150);
      p.textSize(50);
      p.text(i + 1, 500, 225);

      i++;
    }
    return false;
  }
  function dispPoints(data) {
    var ptsDisp = [];
    p.fill(0);
    var delx = (p.canvas.width - 20) / data.length; //Padding of width 10 on either side
    
    for(var i = 0; i < data.length; i++) {
      var pnt = [10 + delx * i, p.canvas.height - 10 - (data[i] * (p.canvas.height / 1.5))];
    
      p.ellipse(pnt[0], pnt[1], 10, 10);
      if(ptsDisp.length > 0) {
        p.line(ptsDisp[ptsDisp.length - 1][0], ptsDisp[ptsDisp.length - 1][1], pnt[0], pnt[1]);
      }
      ptsDisp.push(pnt);
    }
  }

  function bubbleSort(array) {
    for (var n = 0; n < array.length - 1; n++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
            dataBank.push(arrCopy(array));
        }
    }
    return array;
  }
};
var myp5 = new p5(bubble, 'bs');

//Quick sort
var quick = function( p ) { 
  var dataBank = [];

  p.setup = function() {
    p.createCanvas(1000, 300);
    p.pixelDensity(1);
    p.background(200);

    p.textAlign(CENTER, CENTER);
    p.fill(0, 0, 255, 40);
    p.textSize(100);
    p.text("Quick Sort", 500, 150);
    p.textSize(50);
    p.text(0, 500, 225);

    dispPoints(arr3);
    quickSort(arr3, 0, arr3.length - 1);

    console.log("qs:" + dataBank.length);
  };

  var i = 0;
  p.keyReleased = function() {
    if (i < dataBank.length){
      p.clear();
      p.background(200);
      dispPoints(dataBank[i]);

      p.textAlign(CENTER, CENTER);
      p.fill(0, 0, 255, 40);
      p.textSize(100);
      p.text("Quick Sort", 500, 150);
      p.textSize(50);
      p.text(i + 1, 500, 225);

      i++;
    }
    return false;
  }
  function dispPoints(data) {
    var ptsDisp = [];
    p.fill(0);
    var delx = (p.canvas.width - 20) / data.length; //Padding of width 10 on either side
    
    for(var i = 0; i < data.length; i++) {
      var pnt = [10 + delx * i, p.canvas.height - 10 - (data[i] * (p.canvas.height / 1.5))];
    
      p.ellipse(pnt[0], pnt[1], 10, 10);
      if(ptsDisp.length > 0) {
        p.line(ptsDisp[ptsDisp.length - 1][0], ptsDisp[ptsDisp.length - 1][1], pnt[0], pnt[1]);
      }
      ptsDisp.push(pnt);
    }
  }

  function quickSort(arr, lo, hi) {
    if (hi - lo < 2) {
      if (hi - lo == 1) {
        if(arr[lo] > arr[hi]) {
          swap(arr, lo, hi);
          dataBank.push(arrCopy(arr));
        }
      }
      return;
    }
    partition(arr, lo, hi);
  }

  function getPivotInd(arr, lo , hi) {
    var a = arr[lo + 1];
    var b = arr[(lo + hi) / 2];
    var c = arr[hi];

    if ((a - b) * (c - a) >= 0) { // a >= b and a <= c OR a <= b and a >= c
      return lo + 1;
    } else if ((b - a) * (c - b) >= 0) { // b >= a and b <= c OR b <= a and b >= c
      return (lo + hi) / 2;
    } else {
      return hi;
    }
  }

  function partition(arr, loInit, hiInit) {
    var lo = loInit;
    var hi = hiInit;
    var pivInd = getPivotInd(arr, lo, hi);

    swap(arr, lo, pivInd);
    pivInd = lo;
    lo++;

    for (var a = lo; a <= hi && lo != hi; a++) {
      if (arr[a] < arr[pivInd]) {
        swap(arr, a, lo);
        lo++;
      } else {
        swap(arr, a, hi);
        hi--;
        a--; //Since we need to re-check the value at a
      }
      dataBank.push(arrCopy(arr));
    }

    if (arr[pivInd] > arr[lo]) {
      swap(arr, pivInd, lo);
      pivInd = lo;
    } else {
      swap(arr, pivInd, lo - 1);
      pivInd = lo - 1;
    }

    dataBank.push(arrCopy(arr));

    quickSort(arr, loInit, pivInd - 1);
    quickSort(arr, pivInd + 1, hiInit);
  }

  function swap(arr, ind1, ind2) {
    var temp = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = temp;
  }
};
var myp5 = new p5(quick, 'qs');