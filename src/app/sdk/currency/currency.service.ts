import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { CurrencyConfigService } from "./currency.config";
import { CurrencyPayload, SelectedCurrencyPayload } from "./currency.model";

@Injectable()
export class CurrencyService {
	constructor(private http: HttpClient,
				private currencyConfigService: CurrencyConfigService) {
	}

	getRates(from?: string): Observable<CurrencyPayload[]> {
		return this.http.get<any>(this.currencyConfigService.getCurrencyServer(from)).map(result => {
			return result;
		});
	}

	getCurrency(from: string, to: string): Observable<SelectedCurrencyPayload> {
		return this.http.get<any>(this.currencyConfigService.getCurrency(from, to)).map(result => {
			return { date: result.date, rates: result.rates };
		});
	}
}
