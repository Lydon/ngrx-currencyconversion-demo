import { Injectable } from "@angular/core";

import { State } from "../index";

@Injectable()
export class AmountSelector {
	getAmount() {
		return (state: State): number => state.amount.amount;
	}
}
