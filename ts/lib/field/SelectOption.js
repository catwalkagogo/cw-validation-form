var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChoiceOption = require('../ChoiceOption');
var Enumerable = require('linq');

var SelectOption = (function (_super) {
    __extends(SelectOption, _super);
    function SelectOption(content, value) {
        _super.call(this);
        this.content = content;
        this.value = value;
    }
    Object.defineProperty(SelectOption.prototype, "value", {
        get: function () {
            return this.attr('value');
        },
        set: function (value) {
            this.attr('value', value);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(SelectOption.prototype, "label", {
        get: function () {
            return this.attr('label');
        },
        set: function (label) {
            this.attr('label', label);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(SelectOption.prototype, "content", {
        get: function () {
            return this.attr('__content');
        },
        set: function (label) {
            this.attr('__content', label);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(SelectOption.prototype, "disabled", {
        get: function () {
            return this.attr('disabled');
        },
        set: function (disabled) {
            this.attr('disabled', disabled);
        },
        enumerable: true,
        configurable: true
    });


    Object.defineProperty(SelectOption.prototype, "selected", {
        get: function () {
            return this.attr('selected');
        },
        set: function (selected) {
            this.attr('selected', selected);
        },
        enumerable: true,
        configurable: true
    });


    SelectOption.createFrom = function (options) {
        return Enumerable.from(options).select(function (p) {
            return new SelectOption(p.value, p.key);
        }).toArray();
    };
    return SelectOption;
})(ChoiceOption);

module.exports = SelectOption;
//# sourceMappingURL=SelectOption.js.map
