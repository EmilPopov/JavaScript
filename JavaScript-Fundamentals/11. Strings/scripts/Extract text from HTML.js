function extractText(html){
     result = html.replace(/<(.*?)>/g, '');
     return result;
}
var html = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log(extractText(html));

