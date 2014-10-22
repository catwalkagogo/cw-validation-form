var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Presenter = require('./Presenter');

var Dom = require('cw-dom');

var TextArea = (function (_super) {
    __extends(TextArea, _super);
    function TextArea() {
        _super.apply(this, arguments);
    }
    TextArea.prototype.html = function (field, attr) {
        attr = _.extend(field.attr(), attr);
        attr['type'] = 'text';
        var value = attr['value'];
        delete attr['value'];

        var html = Dom.Html.tag('textarea', attr, Dom.Html.escape(value));
        return html;
    };
    return TextArea;
})(Presenter);

module.exports = TextArea;
//# sourceMappingURL=TextArea.js.map
