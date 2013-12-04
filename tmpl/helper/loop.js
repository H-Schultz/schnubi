
module.exports = function(length, options) {
    var r = '';
    for (var i = 0; i < length; ++i) {

        r += options.fn(this, { data: i })

    }
    return r;
};