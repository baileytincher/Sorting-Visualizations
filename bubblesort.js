// Bubble Sort

function subbleSort(list) {

        var temp = 0;
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = 0; j < array.length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    return list;
    }

       




