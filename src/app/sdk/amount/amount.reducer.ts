import { ActionWithPayload } from "../index";

import { AMOUNT_ACTION_TYPE } from "./amount.action";
import { AmountState } from "./amount.model";

const INITIAL_STATE: AmountState = {
	isBusy: false,
	amount: 1
};

export function amountReducer(state = INITIAL_STATE, action: ActionWithPayload) {
	switch (action.type) {
		case AMOUNT_ACTION_TYPE.amountChange:
			return Object.assign({}, state, {
				isBusy: true,
				amount: action.payload
			});
		default:
			return state;
	}
}

