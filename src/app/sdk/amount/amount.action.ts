import { Injectable } from "@angular/core";

import { ActionWithPayload } from "../index";

const ACTION_PREFIX = "[Amount]";
export const AMOUNT_ACTION_TYPE = {
	amountChange: `${ACTION_PREFIX} Change`,
};

@Injectable()
export class AmountAction {
	changeAmount(number: number): ActionWithPayload {
		return {
			type: AMOUNT_ACTION_TYPE.amountChange,
			payload: number
		};
	}
}
