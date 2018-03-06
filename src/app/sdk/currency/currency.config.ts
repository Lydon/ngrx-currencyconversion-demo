import { Injectable } from "@angular/core";

import { CurrencyDefaultSelection } from "./currency.model";

// todo:: split API with BASE and SYMBOLS const
// const CURRENCY_BASE_API = "https://api.fixer.io/latest?base=";
const CURRENCY_BASE_API = "http://localhost:4200/assets/api/currency.json"
const SYMBOLS = "&symbols=";
const DEFAULT_FROM_CURRENCY = CurrencyDefaultSelection.from.toString();
const DEFAULT_TO_CURRENCY = CurrencyDefaultSelection.to.toString();

@Injectable()
export class CurrencyConfigService {

	getCurrencyServer(from = DEFAULT_FROM_CURRENCY): string {
		return `${CURRENCY_BASE_API}`;
	}

	getCurrency(from?: string, to = DEFAULT_TO_CURRENCY): string {
		return `${`https://api.fixer.io/latest?base=` + from + SYMBOLS + to }`;
	}
}
