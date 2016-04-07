Array.prototype.total = function() {
    sum = 0;
    for (var i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

Array.prototype.mean = function() {
    mean = 0;
    for (var i = 0; i < this.length; i++) {
        mean += this[i];
    }
    mean = mean / this.length;
    return mean;
};

Array.prototype.median = function() {
    var middle = Math.floor(this.length / 2);
    var evenMiddle = (this[middle-1] + this[middle]) / 2;
    if (this.length % 2 == 0) {
        return evenMiddle;
    } else {
        return this[middle];
    }
}

Array.prototype.mode = function() {
    freq = {};
    for (var i = 0; i < this.length; i++) {
        var curEl = this[i];
        freq[curEl] ? freq[curEl]++ : freq[curEl] = 1;
    }

    var max = 1;
    for (key in freq) {
        if (freq[key] > max) {
            max = freq[key];
            maxObj = {};
            maxObj[key] = max;
        }
    }
    return maxObj;
}
