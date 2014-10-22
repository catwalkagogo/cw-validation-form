import Field = require('../Field');

interface IPresenter<TField extends Field<any>> {
	render(field: TField, callback: (error: Error, html: string) => void): void;
	render(field: TField, attr: Object, callback: (error: Error, html: string) => void): void;
}

export = IPresenter;