var charsA = 'Pesho'.split(''),
	charsB = 'Mitko '.split('');
charsA.forEach(function(el, i) {
	var compared = el.charCodeAt(0) - charsB[i].charCodeAt(0);
	var result = compared > 0 ? 'bigger' : compared < 0 ? 'smaller' : 'equal';
	console.log(i,result);
});