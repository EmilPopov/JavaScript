function countWords(text) {
	var wordCounts = {},
		words = text.split(' '),
		word;
	for (var i in words) {
		word = words[i];
		if (!wordCounts[word]) {
			wordCounts[word] = 0;
		}
		wordCounts[word] += 1;
	}
	return wordCounts;
}
var text = 'Write a Function that returns the index of the first element in array that is bigger than its neighbors or -1 if there’s no such element Use the function from the previous exercise Write a Function that returns the index of the first element in array that is bigger than its neighbors or -1 if there’s no such element Use the function from the previous exercise';
var words = countWords(text);
for (var word in words) {
	console.log(word + '=>' + words[word]);
}