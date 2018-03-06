import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";

import { ConverterComponent } from "../converter/converter.container";
import { ConverterModule } from "../converter/converter.module";

const routes: Routes = [
	{
		path: "currency",
		component: ConverterComponent
	}
];

@NgModule({
	imports: [
		BrowserAnimationsModule,
		ConverterModule,
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
