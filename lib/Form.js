var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var _ = require('underscore');

var Validation = require('cw-validation');

var ValidationForm = Validation.ValidationForm;
var TextField = require('./field/TextField');
var TextAreaField = require('./field/TextAreaField');
var SelectField = require('./field/SelectField');
var SelectOption = require('./field/SelectOption');
var RadioField = require('./field/RadioField');
var RadioOption = require('./field/RadioOption');
var CheckBoxField = require('./field/CheckBoxField');
var CheckBoxOption = require('./field/CheckBoxOption');

var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        _super.apply(this, arguments);
    }
    Form.prototype.addText = function (name, attr) {
        return this.addField(new TextField(this, name, attr));
    };

    Form.prototype.addTextArea = function (name, attr) {
        return this.addField(new TextAreaField(this, name, attr));
    };

    Form.prototype.addSelect = function (name, attr, options) {
        var _options = (options) ? _.isArray(options) ? options : SelectOption.createFrom(options) : [];
        return this.addField(new SelectField(this, name, _options));
    };

    Form.prototype.addRadio = function (name, attr, options) {
        var _options = (options) ? _.isArray(options) ? options : RadioOption.createFrom(options) : [];
        return this.addField(new RadioField(this, name, _options));
    };

    Form.prototype.addCheckBox = function (name, attr, options) {
        var _options = (options) ? _.isArray(options) ? options : CheckBoxOption.createFrom(options) : [];
        return this.addField(new CheckBoxField(this, name, _options));
    };
    return Form;
})(ValidationForm);

var form = new Form();

module.exports = Form;
//# sourceMappingURL=Form.js.map
