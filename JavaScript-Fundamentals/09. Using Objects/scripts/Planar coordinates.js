 function Point(x, y) {
 	if (!(this instanceof Point))
 		return new Point(x, y);
 	this.x = x;
 	this.y = y;
 }
 Point.calculateDistance = function(a, b) {
 	return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
 };

 function Line(pointA, pointB) {
 	if (!(this instanceof Line)){
 		return new Line(pointA, pointB);
 	}
 	this.start = pointA;
 	this.end = pointB;
 	this.length = Point.calculateDistance(this.start, this.end);
 }

 function canBeTriangle(l1, l2, l3) {
 	if (l1.length >= l2.length + l3.length || l2.length >= l1.length + l3.length || l3.length >= l2.length + l1.length) {
 		return false;
 	} else {
 		return true;
 	}
 }
 var p1 = Point(1, 1),
 	p2 = Point(4, 5),
 	p3 = Point(-10, -1),
 	p4 = Point(-5, 11),
 	p5 = Point(13, 10),
 	p6 = Point(7, 2);

 var l1 = Line(p1, p2),
 	l2 = Line(p3, p4),
 	l3 = Line(p5, p6),
 	l4 = Line(p1, p2);
 console.log('l1 length (p1, p2 distance): ' + l1.length);
 console.log('l2 length (p3, p4 distance): ' + l2.length);
 console.log('l3 length (p5, p6 distance): ' + l3.length);

 console.log('l1,l2,l3 can form triangle: ' + canBeTriangle(l1, l2, l3));
 console.log('l1,l2,l1 can form triangle: ' + canBeTriangle(l1, l2, l1));