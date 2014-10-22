var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Dom = require('cw-dom');

var Enumerable = require('linq');

var CheckBoxOption = (function (_super) {
    __extends(CheckBoxOption, _super);
    function CheckBoxOption(label, value) {
        _super.call(this, 'option');
        this.label = label;
        this.value = value;
    }
    Object.defineProperty(CheckBoxOption.prototype, "value", {
        get: function () {
            return this.attr('value');
        },
        set: function (value) {
            this.attr('value', value);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(CheckBoxOption.prototype, "label", {
        get: function () {
            return this.attr('label');
        },
        set: function (label) {
            this.attr('label', label);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(CheckBoxOption.prototype, "disabled", {
        get: function () {
            return this.attr('disabled');
        },
        set: function (disabled) {
            this.attr('disabled', disabled);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(CheckBoxOption.prototype, "checked", {
        get: function () {
            return this.attr('checked');
        },
        set: function (checked) {
            this.attr('checked', checked);
        },
        enumerable: true,
        configurable: true
    });


    CheckBoxOption.createFrom = function (options) {
        return Enumerable.from(options).select(function (p) {
            return new CheckBoxOption(p.value, p.key);
        }).toArray();
    };
    return CheckBoxOption;
})(Dom.Node);

module.exports = CheckBoxOption;
//# sourceMappingURL=CheckBoxOption.js.map
