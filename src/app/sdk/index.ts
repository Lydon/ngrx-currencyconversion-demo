import { Action } from "@ngrx/store";

import { AmountState } from "./amount/amount.model";
import { amountReducer } from "./amount/amount.reducer";
import { CurrencyState } from "./currency/currency.model";
import { currencyReducer } from "./currency/currency.reducer";

export { AmountAction } from "./amount/amount.action";
export { AmountSelector } from "./amount/amount.selector";
export { AmountPayload, AmountState } from "./amount/amount.model";

export { CurrencyAction } from "./currency/currency.action";
export { CurrencySelector } from "./currency/currency.selector";
export { CurrencyPayload, CurrencyState } from "./currency/currency.model";
export { CurrencyConfigService } from "./currency/currency.config";
export { CurrencyService } from "./currency/currency.service";
export { CurrencyEffects } from "./currency/currency.effect";

export interface ActionWithPayload<T = any> extends Action {
	payload: T;
}

export const Reducers = {
	amount: amountReducer,
	currency: currencyReducer
};

export interface State {
	amount: AmountState;
	currency: CurrencyState;
}
