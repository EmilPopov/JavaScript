 var numberToString = (function() {
     var ones =
         ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
         tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
     return function(n) {
         var r = '';
         if (n > 99) {
             r += ones[parseInt(n / 100, 10)] + ' hundred';
             if (n %= 100){
                 r += ' and '; // 101-199 201-299 ... 901-999
             }
             else return r; // 100 200 ... 900
         }
         if (n > 19) {
             r += tens[parseInt(n / 10 - 2, 10)];
             if (n %= 10) r += '-'; // 21-29  31-39 ... 91-99
             else return r; // 20 30 ... 90
         }
         return r += ones[n]; // 1 2 ... 19
     };
 }());
 console.log(numberToString(543));