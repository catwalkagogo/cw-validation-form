var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Field = require('./Field');

var InputField = (function (_super) {
    __extends(InputField, _super);
    function InputField() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(InputField.prototype, "value", {
        get: function () {
            return this.attr('value');
        },
        set: function (value) {
            this.attr('value', value);
        },
        enumerable: true,
        configurable: true
    });

    return InputField;
})(Field);

module.exports = InputField;
//# sourceMappingURL=InputField.js.map
