(function() {
    var sort = (function() {
        var array = [];
        function swap(i, j) {
            var t = array[i];
            array[i] = array[j];
            array[j] = t;
        }
        function min(i) {
            var minIndex = i,
            len;
            for (i++; len = array.length,i < len; i++)
                if (array[i] < array[minIndex])
                    minIndex = i;
            return minIndex;
        }
        return function(arr) {
            array = arr;
            array.forEach(function(el, i) {
                swap(i, min(i));
            });
            return array;
        };
    }());
    console.log(sort([-1, 2, -3, 4, -5, 6, -7]));
}());