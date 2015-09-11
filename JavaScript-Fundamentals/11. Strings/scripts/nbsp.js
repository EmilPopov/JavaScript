function replaceWhiteSpaces(str){
	return str.replace(/ /g, '&nbsp;');
}
var str = "We are lIViNg in a YELLOW SUBMARINE. We DON'T have anythLIviNGing else.";
console.log(replaceWhiteSpaces(str));
