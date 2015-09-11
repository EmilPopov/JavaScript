var prop,
	list = [document, window, navigator],
	orderDoc = [];
for (var i = 0; i < list.length; i++) {
	for (var prop in list[i]) {
		orderDoc.push(prop);
	}
}

orderDoc.sort();
console.log("Largest: " + orderDoc[0] + "------" + "Smallest: " + orderDoc[orderDoc.length - 1]);
console.log(orderDoc);