var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Presenter = require('./Presenter');

var Dom = require('cw-dom');
var Enumerable = require('linq');

var CheckBox = (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        _super.apply(this, arguments);
    }
    CheckBox.prototype.html = function (field, attr) {
        attr = _.extend(field.attr(), attr);

        var value = attr['value'];
        var optionsHtml = Enumerable.from(field.options).select(function (opt) {
            var optAttr = opt.attr();
            optAttr['type'] = 'checkbox';
            optAttr['checked'] = _.contains(value, opt.value);
            optAttr['name'] = field.name + '[]';

            var label = optAttr['__label'];
            delete optAttr['__label'];
            var labelAttr = {
                'for': optAttr['name']
            };

            return Dom.Html.tag('input', optAttr) + Dom.Html.tag('label', labelAttr, label);
        }).toArray().join('');

        var html = optionsHtml;

        return html;
    };
    return CheckBox;
})(Presenter);

module.exports = CheckBox;
//# sourceMappingURL=CheckBox.js.map
