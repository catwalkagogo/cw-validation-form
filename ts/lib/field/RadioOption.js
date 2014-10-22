var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChoiceOption = require('../ChoiceOption');
var Enumerable = require('linq');

var RadioOption = (function (_super) {
    __extends(RadioOption, _super);
    function RadioOption(label, value) {
        _super.call(this);
        this.label = label;
        this.value = value;
    }
    Object.defineProperty(RadioOption.prototype, "value", {
        get: function () {
            return this.attr('value');
        },
        set: function (value) {
            this.attr('value', value);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(RadioOption.prototype, "label", {
        get: function () {
            return this.attr('label');
        },
        set: function (label) {
            this.attr('label', label);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(RadioOption.prototype, "disabled", {
        get: function () {
            return this.attr('disabled');
        },
        set: function (disabled) {
            this.attr('disabled', disabled);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(RadioOption.prototype, "checked", {
        get: function () {
            return this.attr('checked');
        },
        set: function (checked) {
            this.attr('checked', checked);
        },
        enumerable: true,
        configurable: true
    });


    RadioOption.createFrom = function (options) {
        return Enumerable.from(options).select(function (p) {
            return new RadioOption(p.value, p.key);
        }).toArray();
    };
    return RadioOption;
})(ChoiceOption);

module.exports = RadioOption;
//# sourceMappingURL=RadioOption.js.map
