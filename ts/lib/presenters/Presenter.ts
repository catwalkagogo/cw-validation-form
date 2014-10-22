import IPresenter = require('./IPresenter');
import Field = require('../Field');

class Presenter<TField extends Field<any>> implements IPresenter<TField> {
	public render(field: TField, callback: (error: Error, html: string) => void): void;
	public render(field: TField, attr: Object, callback: (error: Error, html: string) => void): void;
	public render(field: TField, attrOrCallback: any, callback?: (error: Error, html: string) => void): void {
		if(arguments.length == 1) {
			this.renderImpl(field, {}, attrOrCallback);
		} else if(arguments.length >= 2) {
			this.renderImpl(field, attrOrCallback, callback);
		}
	}

	renderImpl(field, attr: Object, callback: (error: Error, html: string) => void): void {
		callback(null, this.html(field, attr));
	}

	public html(field: TField, attr: Object= {}): string {
		return null;
	}
}

export = Presenter;