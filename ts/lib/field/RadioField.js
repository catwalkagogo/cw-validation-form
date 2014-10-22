var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var ChoiceField = require('../ChoiceField');

var _ = require('underscore');

var RadioPresenter = require('../presenters/Radio');

var RadioField = (function (_super) {
    __extends(RadioField, _super);
    function RadioField(form, name, attr, options, presenter) {
        if (typeof presenter === "undefined") { presenter = null; }
        if (_.isUndefined(presenter)) {
            presenter = new RadioPresenter();
        }

        _super.call(this, form, name, attr, options, presenter);
    }
    return RadioField;
})(ChoiceField);

module.exports = RadioField;
//# sourceMappingURL=RadioField.js.map
