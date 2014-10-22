var Presenter = (function () {
    function Presenter() {
    }
    Presenter.prototype.render = function (field, attrOrCallback, callback) {
        if (arguments.length == 1) {
            this.renderImpl(field, {}, attrOrCallback);
        } else if (arguments.length >= 2) {
            this.renderImpl(field, attrOrCallback, callback);
        }
    };

    Presenter.prototype.renderImpl = function (field, attr, callback) {
        callback(null, this.html(field, attr));
    };

    Presenter.prototype.html = function (field, attr) {
        if (typeof attr === "undefined") { attr = {}; }
        return null;
    };
    return Presenter;
})();

module.exports = Presenter;
//# sourceMappingURL=Presenter.js.map
