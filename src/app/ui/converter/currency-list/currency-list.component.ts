import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";

import { CurrencyPayload } from "../../../sdk";

@Component({
	selector: "app-currency-list",
	templateUrl: "./currency-list.component.html",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyListComponent implements OnChanges {
	@Input() amount: number;
	@Input() currencyRates: CurrencyPayload[];
	@Input() displayedColumns: string[];

	dataSource;

	@ViewChild(MatSort) sort: MatSort;

	ngOnChanges(changes: SimpleChanges) {
		if (changes["currencyRates"]) {
			this.dataSource = new MatTableDataSource(this.currencyRates);
			this.dataSource.sort = this.sort;
		}
	}
}
