import Presenter = require('./Presenter');
import InputField = require('../InputField');
import Dom = require('cw-dom');

class TextArea extends Presenter<InputField<any>> {
	html(field: InputField<any>, attr: Object): string {
		attr = _.extend(field.attr(), attr);
		var value = attr['value'];
		delete attr['value'];

		var html = Dom.Html.tag('textarea', attr, Dom.Html.escape(value));
		return html;
	}
}

export = TextArea;