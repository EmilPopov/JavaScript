
function subStrCount(str, target) {
    var rgx = new RegExp(target,"g"),
        result = str.match(rgx);
    return result.length;
}
var str = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
    target = 'in';
console.log(subStrCount(str,target));