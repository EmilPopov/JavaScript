function extractEmails(str){
return str.match(/\w+@\w+\.\w+/g);

}
var str = 'Static void Main() nakov@telerik.com. using System,nakov@gmail.com return';
console.log(extractEmails(str));