var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Validation = require('cw-validation');
var ValidationField = Validation.ValidationField;

var Core = require('cw-core');
var Accessor = Core.Accessor;

var Field = (function (_super) {
    __extends(Field, _super);
    function Field(form, name, attr) {
        if (typeof attr === "undefined") { attr = {}; }
        _super.call(this, form, name);
        this._attr = new Accessor(attr);
    }
    Field.prototype.attr = function (keyOrData, value) {
        return this._attr.access(keyOrData, value);
    };

    Field.prototype.render = function (attrOrCallback, callback) {
        if (arguments.length == 1) {
            this.renderImpl({}, attrOrCallback);
        } else if (arguments.length >= 2) {
            this.renderImpl(attrOrCallback, callback);
        }
    };

    Field.prototype.renderImpl = function (attr, callback) {
        callback(null, this.html(attr));
    };

    Field.prototype.html = function (attr) {
        if (typeof attr === "undefined") { attr = {}; }
        return null;
    };

    Object.defineProperty(Field.prototype, "value", {
        get: function () {
            return this.attr('value');
        },
        set: function (value) {
            this.attr('value', value);
        },
        enumerable: true,
        configurable: true
    });

    return Field;
})(ValidationField);

module.exports = Field;
//# sourceMappingURL=Field.js.map
