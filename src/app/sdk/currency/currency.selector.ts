import { Injectable } from "@angular/core";

import { State } from "../index";

import { CurrencyPayload, SelectedCurrencyPayload } from "./currency.model";

@Injectable()
export class CurrencySelector {

	getCurrencies() {
		return (state: State): CurrencyPayload[] => state.currency.currencies;
	}

	getCurrency() {
		return (state: State): SelectedCurrencyPayload => state.currency.selectedCurrency;
	}
}
