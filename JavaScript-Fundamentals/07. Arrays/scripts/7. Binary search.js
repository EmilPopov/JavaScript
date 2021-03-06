
    function binarySearch(array, x) {
        var l = 0
          , r = array.length - 1
          , m;
        while (l <= r) {
            m = l + ((r - l) >> 1);
            if (array[m] < x)
                l = m + 1;
            else if (array[m] > x)
                r = m - 1;
            else
                return m;
        }
        return -1;
    }
    console.log(binarySearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], 34));