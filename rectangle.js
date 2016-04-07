
var area = function(rectangle) {
    return rectangle.width * rectangle.height
}

var perimeter = function(rectangle) {
    return rectangle.width *2 + rectangle.height*2
}

var diagonal = function(rectangle) {
    var cSquared = Math.pow(rectangle.width, 2) + Math.pow(rectangle.height, 2)
    return Math.sqrt(cSquared)
}

var isSquare = function(rectangle) {
    return rectangle.width == rectangle.height
}
