var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Enumerable = require('linq');
var ChoiceField = require('./ChoiceField');

var _ = require('underscore');

var Dom = require('cw-dom');

var SelectField = (function (_super) {
    __extends(SelectField, _super);
    function SelectField(form, name, attr, options) {
        _super.call(this, form, name, attr, options);
    }
    SelectField.prototype.html = function (attr) {
        attr = _.extend(this.attr(), attr);

        var value = attr['value'];
        var optionsHtml = Enumerable.from(this.options).select(function (opt) {
            return opt.render({
                selected: opt.value == value
            });
        }).toArray().join('');

        var html = Dom.Html.tag('select', attr, optionsHtml);

        return html;
    };
    return SelectField;
})(ChoiceField);

module.exports = SelectField;
//# sourceMappingURL=SelectField.js.map
