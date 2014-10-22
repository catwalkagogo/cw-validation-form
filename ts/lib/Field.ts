import Validation = require('cw-validation');
import IPresenter = require('./presenters/IPresenter');

import Core = require('cw-core');
import Accessor = Core.Accessor;

class Field<TSelf extends Field<any>> extends Validation.Field<TSelf>{
	private _presenter: IPresenter<TSelf>;
	private _attr: Accessor;

	public constructor(form: Validation.IForm, name: string, attr: Object = {}, presenter:IPresenter<TSelf> = null) {
		super(form, name);
		this._attr = new Accessor(attr);
		this._presenter = presenter;
	}

	public attr(): any;
	public attr(key: string): any;
	public attr(key: string, value: any): void;
	public attr(data: Object): void;
	public attr(keyOrData?: any, value?: any): any {
		return this._attr.access(keyOrData, value);
	}

	public render(callback: (error: Error, html: string) => void): void;
	public render(attr: Object, callback: (error: Error, html: string) => void): void;
	public render(attrOrCallback: any, callback?: (error: Error, html: string) => void): void {
		if(arguments.length == 1) {
			this.renderImpl({}, attrOrCallback);
		} else if(arguments.length >= 2) {
			this.renderImpl(attrOrCallback, callback);
		}
	}

	renderImpl(attr: Object, callback: (error: Error, html: string) => void): void {
		callback(null, this.html(attr));
	}

	public html(attr: Object= {}): string {
		return null;
	}

	public set presenter(presenter: IPresenter<TSelf>) {
		this._presenter = presenter;
	}

	public get presenter(): IPresenter<TSelf> {
		return this._presenter;
	}
}

export = Field;