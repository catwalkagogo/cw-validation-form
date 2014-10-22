var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Field = require('../Field');
var Dom = require('cw-dom');

var TextAreaField = (function (_super) {
    __extends(TextAreaField, _super);
    function TextAreaField() {
        _super.apply(this, arguments);
    }
    TextAreaField.prototype.html = function (attr) {
        attr = _.extend(this.attr(), attr);
        attr['type'] = 'text';
        var value = attr['value'];
        delete attr['value'];

        var html = Dom.Html.tag('textarea', attr, Dom.Html.escape(value));
        return html;
    };
    return TextAreaField;
})(Field);

module.exports = TextAreaField;
//# sourceMappingURL=TextAreaField.js.map
