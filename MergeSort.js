function mergeSort(arr) {
	if (arr.length <= 1) return;
	
	var midP = arr.length / 2;
	
	var left = [], right = [];
	for (var i = 0; i < midP; i++) left.push(arr[i]);
	for (var j = midP; j < arr.length; j++) right.push(arr[j]);
	
	mergeSort(left);
	mergeSort(right);
	
	merge(arr, left, right);
}

function merge(arr, left, right) {
	var i = 0, j = 0;
	while (i < left.length && j < right.length)
		arr.push(left[i] < right[j] ? left[i++] : right[j++]);
	
	while (i < left.length) arr.push(left[i]);
	while (j < right.length) arr.push(right[j]);
}
	