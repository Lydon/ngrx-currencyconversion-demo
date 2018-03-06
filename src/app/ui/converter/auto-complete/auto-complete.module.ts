import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from "@angular/material";

import { AutoCompleteComponent } from "./auto-complete.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MatAutocompleteModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule
	],
	exports: [AutoCompleteComponent],
	declarations: [AutoCompleteComponent]
})
export class AutoCompleteModule {
}
