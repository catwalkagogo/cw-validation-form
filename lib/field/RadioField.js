var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Enumerable = require('linq');
var ChoiceField = require('./ChoiceField');

var _ = require('underscore');

var RadioField = (function (_super) {
    __extends(RadioField, _super);
    function RadioField(form, name, attr, options) {
        _super.call(this, form, name, attr, options);
    }
    RadioField.prototype.html = function (attr) {
        var _this = this;
        attr = _.extend(this.attr(), attr);

        var value = attr['value'];
        var optionsHtml = Enumerable.from(this.options).select(function (opt) {
            return opt.render({
                name: _this.name,
                checked: value == opt.value
            });
        }).toArray().join('');

        var html = optionsHtml;

        return html;
    };
    return RadioField;
})(ChoiceField);

module.exports = RadioField;
//# sourceMappingURL=RadioField.js.map
