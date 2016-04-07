
var validTriangle = function(a, b, c) {
    var pyTriple = a + b > c || b + c > a || a + c > b;
    var eqTri = a == b && a === c;
    var sideZero = a === 0 || b === 0 || c === 0;

    if (eqTri) {
        return true;
    } else if (sideZero) {
        return false;
    } else if (pyTriple) {
        return true;
    } else {
        return false;
    }
};