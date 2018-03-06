import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";
import { catchError, map, switchMap, tap } from "rxjs/operators";
import { Observable } from "rxjs/Observable";

import { ActionWithPayload } from "../index";

import { CURRENCY_ACTION_TYPE, CurrencyAction } from "./currency.action";
import { CurrencyService } from "./currency.service";
import { CurrencySelection } from "./currency.model";

@Injectable()
export class CurrencyEffects {
	@Effect() getAll$: Observable<Action> = this.actions$
		.ofType(CURRENCY_ACTION_TYPE.getAll)
		.pipe(
			map((currency: ActionWithPayload<string>) => currency.payload),
			switchMap((currency: string) => this.currencyService.getRates(currency)
				.pipe(
					map(response => this.currencyAction.getAllSuccess(response)),
					catchError(error => of(this.currencyAction.getAllFail(error)))
				)
			)
		);

	@Effect() getCurrency$: Observable<Action> = this.actions$
		.ofType(CURRENCY_ACTION_TYPE.getCurrency)
		.pipe(
			map((currency: ActionWithPayload<CurrencySelection>) => currency.payload),
			switchMap(
				(currencySelection: CurrencySelection) =>
					this.currencyService.getCurrency(currencySelection.from, currencySelection.to)
				.pipe(
					map(response => this.currencyAction.getCurrencySuccess(response)),
					catchError(error => of(this.currencyAction.getAllFail(error)))
				)
			)
		);

	constructor(private actions$: Actions,
				private currencyAction: CurrencyAction,
				private currencyService: CurrencyService) {
	}
}
