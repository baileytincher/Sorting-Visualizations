function arrCopy(arr) {
  var tempArr = [];
  for (var a = 0; a < arr.length; a++) {
    tempArr.push(arr[a]);
  }
  return tempArr;
}

//Selection sort.
var selection = function( p ) {
  var dataBank = [];

  p.setup = function() {
    p.createCanvas(1000, 300);
    p.pixelDensity(1);
    p.background(200);
  
    var arr = [];
  
    for (var i = 0; i < 20; i++) {
      arr.push(Math.random());
    } 
  
    dispPoints(arr);
    selectionSort(arr);
  };

  var i = 0;
  p.keyPressed = function() {
    if (p.keyCode === p.LEFT_ARROW && i < dataBank.length){
      p.clear();
      p.background(200);
      dispPoints(dataBank[i]);
      i++;
    }
    return false;
  }

  function dispPoints(data) {
    var ptsDisp = [];
    p.fill(0);
    var delx = (p.canvas.width - 20) / data.length; //Padding of width 10 on either side
    
    for(var i = 0; i < data.length; i++) {
      var pnt = [10 + delx * i, p.canvas.height - (data[i] * p.canvas.height)];
    
      p.ellipse(pnt[0], pnt[1], 10, 10);
      if(ptsDisp.length > 0) {
        p.line(ptsDisp[ptsDisp.length - 1][0], ptsDisp[ptsDisp.length - 1][1], pnt[0], pnt[1]);
      }
      ptsDisp.push(pnt);
    }
  }

  function selectionSort(list) {
    var minVal = 0;
    var temp = 0;
    var index = 0;

    for (var i = 0; i < list.length; i++) {
        minVal = list[i];
        index = i;
        for (var j = i; j < list.length; j++) {
            if (list[j] < minVal) {
                minVal = list[j];
                index = j;
                dataBank.push(arrCopy(list));
            }
        }
        if (minVal < list[i]) {
            temp = list[i];
            list[i] = list[index];
            list[index] = temp;
            dataBank.push(arrCopy(list));
        }
    }
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
  
    var arr = [];
  
    for (var i = 0; i < 20; i++) {
      arr.push(Math.random());
    } 
  
    dispPoints(arr);
    bubbleSort(arr);
  };

  var i = 0;
  p.keyReleased = function() {
    if (p.keyCode === p.LEFT_ARROW && i < dataBank.length){
      p.clear();
      p.background(200);
      dispPoints(dataBank[i]);
      i++;
    }
    return false;
  }
  function dispPoints(data) {
    var ptsDisp = [];
    p.fill(0);
    var delx = (p.canvas.width - 20) / data.length; //Padding of width 10 on either side
    
    for(var i = 0; i < data.length; i++) {
      var pnt = [10 + delx * i, p.canvas.height - (data[i] * p.canvas.height)];
    
      p.ellipse(pnt[0], pnt[1], 10, 10);
      if(ptsDisp.length > 0) {
        p.line(ptsDisp[ptsDisp.length - 1][0], ptsDisp[ptsDisp.length - 1][1], pnt[0], pnt[1]);
      }
      ptsDisp.push(pnt);
    }
  }

  function bubbleSort(array) {
    var temp = 0;
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;      
        
                dataBank.push(arrCopy(array));
                }
            }
      
        }
    return array;
  }
};
var myp5 = new p5(bubble, 'bs');