import { ActionWithPayload } from "../index";

import { CURRENCY_ACTION_TYPE } from "./currency.action";
import { CurrencyDefaultSelection, CurrencyState } from "./currency.model";

const INITIAL_STATE: CurrencyState = {
	isBusy: false,
	...CurrencyDefaultSelection
};

export function currencyReducer(state = INITIAL_STATE, action: ActionWithPayload): CurrencyState {
	switch (action.type) {
		case CURRENCY_ACTION_TYPE.getAll: {
			return Object.assign({}, state, {
				isBusy: true
			});
		}

		case CURRENCY_ACTION_TYPE.getAllSuccess: {
			return Object.assign({}, state, {
				isBusy: false,
				currencies: action.payload
			});
		}

		case CURRENCY_ACTION_TYPE.getAllFail: {
			return Object.assign({}, state, {
				isBusy: false
			});
		}

		case CURRENCY_ACTION_TYPE.getCurrency: {
			return Object.assign({}, state, {
				isBusy: true
			});
		}

		case CURRENCY_ACTION_TYPE.getCurrencySuccess: {
			return Object.assign({}, state, {
				isBusy: false,
				selectedCurrency: action.payload
			});
		}

		case CURRENCY_ACTION_TYPE.updateCurrencySelection: {
			return Object.assign({}, state, {
				[action.payload.option]: action.payload.currencyCode
			});
		}

		default:
			return state;
	}
}
