Array.prototype.pad = function(minSize, val) {
    var padded = new Array();
    for (var i = 0; i < this.length; i++) {
        padded.push(this[i]);
    }
    while (padded.length < minSize) {
        padded.push(val || null);
    }
    return padded;
}
