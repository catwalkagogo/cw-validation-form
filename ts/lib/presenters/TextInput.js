var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Presenter = require('./Presenter');

var Dom = require('cw-dom');

var TextInput = (function (_super) {
    __extends(TextInput, _super);
    function TextInput() {
        _super.apply(this, arguments);
    }
    TextInput.prototype.html = function (field, attr) {
        attr = _.extend(field.attr(), attr);
        attr['type'] = 'text';
        var html = Dom.Html.tag('input', attr);
        return html;
    };
    return TextInput;
})(Presenter);

module.exports = TextInput;
//# sourceMappingURL=TextInput.js.map
