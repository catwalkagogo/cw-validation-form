var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChoiceField = require('../ChoiceField');

var _ = require('underscore');

var SelectField = (function (_super) {
    __extends(SelectField, _super);
    function SelectField(form, name, attr, options, presenter) {
        if (typeof presenter === "undefined") { presenter = null; }
        if (_.isUndefined(presenter)) {
            presenter = null;
        }

        _super.call(this, form, name, attr, options, presenter);
    }
    return SelectField;
})(ChoiceField);

module.exports = SelectField;
//# sourceMappingURL=SelectField.js.map
