import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";

import { ActionWithPayload } from "../index";

import { AppError, CurrencyPayload, CurrencySelection, SelectedCurrencyPayload } from "./currency.model";

const ACTION_PREFIX = "[Currency]";
export const CURRENCY_ACTION_TYPE = {
	getAll: `${ACTION_PREFIX} Get All Currencies`,
	getAllSuccess: `${ACTION_PREFIX} Get All Success`,
	getAllFail: `${ACTION_PREFIX} Get All Fail`,
	getCurrency: `${ACTION_PREFIX} Get Currency`,
	getCurrencySuccess: `${ACTION_PREFIX} Get Currency Success`,
	getCurrencyFail: `${ACTION_PREFIX} Get Currency Fail`,
	updateCurrencySelection: `${ACTION_PREFIX} Update Currency Selection`
};

@Injectable()
export class CurrencyAction {

	getAll(): Action {
		return {
			type: CURRENCY_ACTION_TYPE.getAll
		};
	}

	getAllSuccess(currencies: CurrencyPayload[]): ActionWithPayload {
		return {
			type: CURRENCY_ACTION_TYPE.getAllSuccess,
			payload: currencies
		};
	}

	getAllFail(error: AppError): ActionWithPayload {
		return {
			type: CURRENCY_ACTION_TYPE.getAllFail,
			payload: error
		};
	}

	getCurrency(from: string, to: string): ActionWithPayload {
		return {
			type: CURRENCY_ACTION_TYPE.getCurrency,
			payload: { from, to } as CurrencySelection
		};
	}

	getCurrencySuccess(currency: SelectedCurrencyPayload): ActionWithPayload {
		return {
			type: CURRENCY_ACTION_TYPE.getCurrencySuccess,
			payload: currency
		};
	}

	updateCurrencySelection(currencyCode: string, option: string): ActionWithPayload {
		return {
			type: CURRENCY_ACTION_TYPE.updateCurrencySelection,
			payload: { currencyCode, option }
		};
	}
}

