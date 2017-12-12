function quickSort(arr, lo, hi) {
	if (hi - lo < 2) {
		if (hi - lo == 1) {
			if(arr[lo] > arr[hi]) {
				swap(arr, lo, hi);
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

	for (var i = lo; i <= hi && lo != hi; i++) {
		if (arr[i] < arr[pivInd]) {
			swap(arr, i, lo);
			lo++;
		} else {
			swap(arr, i, hi);
			hi--;
			i--; //Since we need to re-check the value at i
		}	
	}

	if (arr[pivInd] > arr[lo]) {
		swap(arr, pivInd, lo);
		pivInd = lo;
	} else {
		swap(arr, pivInd, lo - 1);
		pivInd = lo - 1;
	}

	sort(arr, loInit, pivInd - 1);
	sort(arr, pivInd + 1, hiInit);
}

function swap(arr, ind1, ind2) {
	int temp = arr[ind1];
	arr[ind1] = arr[ind2];
	arr[ind2] = temp;
}