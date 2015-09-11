 function parseURL(url) {
     var match = /(.*):\/\/(.*?)(\/.*)/.exec(url);
     return {
         protocol: match[1],
         server: match[2],
         resource: match[3]
     };
 }
 console.log(parseURL('http://www.devbg.org/forum/index.php'));
