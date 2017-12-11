// Selection Sort

function SelectionSort(list) {
        var minVal = 0;
        var temp = 0;
        var index = 0;

        for (var i = 0; i < list.length; i++) {
            minVal = list[i];
            index = i;
            for (int j = i; j < list.length; j++) {
                if (list[j] < minVal) {
                    minVal = list[j];
                    index = j;
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

       