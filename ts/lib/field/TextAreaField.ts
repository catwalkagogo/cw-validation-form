import Field = require('../Field');
import Dom = require('cw-dom');

class TextAreaField extends Field<TextAreaField> {
	html(attr: Object): string {
		attr = _.extend(this.attr(), attr);
		attr['type'] = 'text';
		var value = attr['value'];
		delete attr['value'];

		var html = Dom.Html.tag('textarea', attr, Dom.Html.escape(value));
		return html;
	}
}

export = TextAreaField;