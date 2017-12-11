var dataBank = [];

function setup() {
	createCanvas(1000, 300);
	pixelDensity(1);
	background(200);
	
	var arr = [];
	
	for (var i = 0; i < 20; i++) {
		arr.push(Math.random());
	}	
	
	dispPoints(arr);
	selectionSort(arr);
	console.log(dataBank.length);
}

var i = 0;
function keyPressed() {
	if (keyCode === LEFT_ARROW && i < dataBank.length){
		console.log(i);
		clear();
		background(200);
		dispPoints(dataBank[i]);
		i++;
	}
	return false;
}

function dispPoints(data) {
	var ptsDisp = [];
	fill(0);
	var delx = (canvas.width - 20) / data.length; //Padding of width 10 on either side
	
	for(var i = 0; i < data.length; i++) {
		var pnt = [10 + delx * i, canvas.height - (data[i] * canvas.height)];
		
		ellipse(pnt[0], pnt[1], 10, 10);
		if(ptsDisp.length > 0) {
			line(ptsDisp[ptsDisp.length - 1][0], ptsDisp[ptsDisp.length - 1][1], pnt[0], pnt[1]);
		}
		ptsDisp.push(pnt);
	}
}

function arrCopy(arr) {
	var tempArr = [];
	for (var a = 0; a < arr.length; a++) {
		tempArr.push(arr[a]);
	}
	return tempArr;
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
        }
		
    }
    return list;
}



