import Presenter = require('./Presenter');
import InputField = require('../InputField');
import Dom = require('cw-dom');

class TextInput extends Presenter<InputField<any>> {
	html(field: InputField<any>, attr: Object): string {
		attr = _.extend(field.attr(), attr);
		attr['type'] = 'text';
		var html = Dom.Html.tag('input', attr);
		return html;
	}
}

export = TextInput;