// 1.
// The output is []

// 2.
// The ouput is 1

// 3.

function reverse(str) {
    const arr = str.split("_");
    const result = arr.reduce(function(p, c, i) {
        if (i !== 0) return p+=firstLetterToUpperCase(c);
        return p+=c;
    }, "");
    return result;
}

function firstLetterToUpperCase(str) {
    const arr = str.split("");
    arr[0] = arr[0].toUpperCase();
    return arr.join("");
}
console.log(reverse("love_you_to_the_moon"));

// 4.
function mul(a, b) {
    if(b>1 && b<99) {
        return `${a*b}`;
    }
    return "Invalid argument b"
}
console.log(mul(123123, 88))