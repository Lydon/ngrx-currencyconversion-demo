import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule, MatListModule, MatSortModule, MatTableModule } from "@angular/material";

import { CurrencyListComponent } from "./currency-list.component";

@NgModule({
	imports: [
		CommonModule,
		MatTableModule,
		MatDividerModule,
		MatSortModule,
		MatListModule
	],
	declarations: [CurrencyListComponent],
	exports: [CurrencyListComponent]
})
export class CurrencyListModule {
}
