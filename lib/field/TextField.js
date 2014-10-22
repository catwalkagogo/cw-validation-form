var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Field = require('../Field');
var Dom = require('cw-dom');
var _ = require('underscore');

var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        _super.apply(this, arguments);
    }
    TextField.prototype.html = function (attr) {
        attr = _.extend(this.attr(), attr);
        attr['type'] = 'text';
        var html = Dom.Html.tag('input', attr);
        return html;
    };
    return TextField;
})(Field);

module.exports = TextField;
//# sourceMappingURL=TextField.js.map
