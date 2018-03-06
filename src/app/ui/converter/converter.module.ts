import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatCardModule, MatInputModule } from "@angular/material";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducer, StoreModule } from "@ngrx/store";
import { storeLogger } from "ngrx-store-logger";

import { environment } from "../../../environments/environment";
import {
AmountAction, AmountSelector, CurrencyAction, CurrencyConfigService, CurrencyEffects, CurrencySelector, CurrencyService,
Reducers, State
} from "../../sdk";

import { AutoCompleteModule } from "./auto-complete/auto-complete.module";
import { ConverterComponent } from "./converter.container";
import { CurrencyListModule } from "./currency-list/currency-list.module";

export function logger(reducer: ActionReducer<State>): any {
	// default, no options
	return storeLogger()(reducer);
}

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
	imports: [
		AutoCompleteModule,
		CurrencyListModule,
		CommonModule,
		FormsModule,
		HttpClientModule,
		MatInputModule,
		MatCardModule,
		StoreModule.forRoot(Reducers, { metaReducers }),
		EffectsModule.forRoot([CurrencyEffects])
	],
	exports: [ConverterComponent],
	providers: [
		AmountSelector,
		AmountAction,
		CurrencySelector,
		CurrencyAction,
		CurrencyConfigService,
		CurrencyService,
		CommonModule,
	],
	declarations: [ConverterComponent]
})
export class ConverterModule {
}
