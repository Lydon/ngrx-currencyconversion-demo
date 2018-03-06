import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MatOptionSelectionChange } from "@angular/material";
import { Store } from "@ngrx/store";
import { merge } from "rxjs/observable/merge";
import { filter, tap } from "rxjs/operators";
import { Subscription } from "rxjs/Subscription";

import * as _ from "lodash";

import { AmountAction, AmountSelector, CurrencyAction, CurrencyPayload, CurrencySelector, State } from "../../sdk";
import { CurrencyDefaultSelection, SelectedCurrencyPayload } from "../../sdk/currency/currency.model";

import { CurrencySelection } from "./converter.model";

@Component({
selector: "<app-converter></app-converter>",
	templateUrl: "./converter.container.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConverterComponent implements OnInit, OnDestroy {

	amount: number;
	code = "code";
	options: CurrencyPayload[];
	currencyRates: CurrencyPayload;
	data$$: Subscription;
	filteredOptions: string[];

	currencyOption = CurrencySelection;
	currencySelection = CurrencyDefaultSelection;

	constructor(public store: Store<State>,
				public amountAction: AmountAction,
				public amountSelector: AmountSelector,
				public currencyAction: CurrencyAction,
				public currencySelector: CurrencySelector,
				public changeDetection: ChangeDetectorRef) {
		const amount$ = this.store.select(this.amountSelector.getAmount())
			.pipe(
				tap(amount => this.amount = amount)
			);

		const currencyRates$ = this.store.select(this.currencySelector.getCurrencies())
			.pipe(
				filter(currencies => !!currencies),
				tap((currencyRates: CurrencyPayload[]) => {
					this.options = currencyRates;
				})
			);

		const currency$ = this.store.select(this.currencySelector.getCurrency())
			.pipe(
				filter(currency => !!currency),
				tap((currency: SelectedCurrencyPayload) => {
					this.currencyRates = {
						rate: currency.rates[Object.keys(currency.rates)[0]],
						code: Object.keys(currency.rates)[0]
					};
				})
			);

		this.data$$ = merge(
			amount$,
			currencyRates$,
			currency$
		).subscribe(() => this.changeDetection.markForCheck());
	}

	ngOnInit() {
		this.store.dispatch(this.currencyAction.getAll());
		this.store.dispatch(this.currencyAction.getCurrency(this.currencySelection.from, this.currencySelection.to));
	}

	ngOnDestroy() {
		this.data$$.unsubscribe();
	}

	onAmountChange(amount: string) {
		const number = parseFloat(amount);
		this.amount = 1;

		if (!isNaN(number)) {
			return this.store.dispatch(this.amountAction.changeAmount(number));
		}
	}

	onOptionSelected($event: MatOptionSelectionChange, option: string) {
		if (!$event.isUserInput) {
			return;
		}

		const setOption = option.toLowerCase();
		const currencyCode = $event.source.value;

		if (!_.find(this.options, [this.code, currencyCode]) || this.currencySelection[setOption] === currencyCode) {
			return;
		}

		console.log(currencyCode, setOption);
		this.store.dispatch(this.currencyAction.updateCurrencySelection(currencyCode, setOption));
		this.currencySelection[setOption] = currencyCode;
		this.store.dispatch(this.currencyAction.getCurrency(this.currencySelection.from, this.currencySelection.to));
	}

}

