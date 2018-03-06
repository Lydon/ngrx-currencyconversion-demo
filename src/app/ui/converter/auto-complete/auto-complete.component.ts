import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

import * as _ from "lodash";

@Component({
	selector: "app-auto-complete",
	templateUrl: "./auto-complete.component.html"
})
export class AutoCompleteComponent implements OnInit {
	myControl: FormControl = new FormControl();

	@Input() code: string;
	@Input() options = [];
	@Input() filteredOptions: string[];
	@Input() placeHolder: string;
	@Input() currency: string;

	@Output() optionSelected = new EventEmitter<any>();

	ngOnInit() {
		this.myControl.setValue(this.currency);
		this.myControl.valueChanges
			.subscribe(val => {
					this.filteredOptions = this.filter(val);
			});
	}

	private filter(val: string): string[] {
		// todo:: filter on code and currency name (done but requires improvement)
		// todo:: rest list when clearing

		const currency = _.map(this.options.filter(option =>
				// todo:: more dynamic - set multi filter options based on passed arguments
			this.filterOption(option.currencyName, val) || this.filterOption(option.code, val)),
			this.code
		);

		return currency;
	}

	private filterOption(option: string, value: string): boolean {
		return !option
			? false
			: option.toLowerCase().indexOf(value.toLowerCase()) === 0;
	}
}
