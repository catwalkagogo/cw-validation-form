var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Presenter = require('./Presenter');

var Dom = require('cw-dom');
var Enumerable = require('linq');

var Select = (function (_super) {
    __extends(Select, _super);
    function Select() {
        _super.apply(this, arguments);
    }
    Select.prototype.html = function (field, attr) {
        attr = _.extend(field.attr(), attr);

        var value = attr['value'];
        var options = field.options;

        var optionsHtml = Enumerable.from(options).select(function (opt) {
            var optAttr = opt.attr();
            if (optAttr['value'] == field.value) {
                optAttr['selected'] = true;
            }
            delete optAttr['__content'];
            Dom.Html.tag('option', optAttr, optAttr['__content']);
        }).toArray().join('');

        var html = Dom.Html.tag('select', attr, optionsHtml);

        return html;
    };
    return Select;
})(Presenter);

module.exports = Select;
//# sourceMappingURL=Select.js.map
