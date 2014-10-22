import Field = require('../Field');
import Dom = require('cw-dom');
import _ = require('underscore');

class TextField extends Field<TextField> {
	html(attr: Object): string {
		attr = _.extend(this.attr(), attr);
		attr['type'] = 'text';
		var html = Dom.Html.tag('input', attr);
		return html;
	}
}

export = TextField;