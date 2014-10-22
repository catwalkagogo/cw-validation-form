var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Field = require('../Field');

var ChoiceField = (function (_super) {
    __extends(ChoiceField, _super);
    function ChoiceField(form, name, attr, options) {
        var _this = this;
        _super.call(this, form, name, attr);
        this._options = [];
        if (options) {
            options.forEach(function (option) {
                return _this._options.push(option);
            });
        }
    }
    Object.defineProperty(ChoiceField.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return ChoiceField;
})(Field);

module.exports = ChoiceField;
//# sourceMappingURL=ChoiceField.js.map
