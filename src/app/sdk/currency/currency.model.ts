export interface CurrencyPayload extends CurrencyCode {
	rate: number;
}

export interface CurrencyCode {
	code: string;
}

export interface CurrencySelection {
	to: string;
	from: string;
}

export interface CurrencyState extends CurrencySelection {
	isBusy: boolean;
	currencies?: CurrencyPayload[];
	selectedCurrency?: SelectedCurrencyPayload;
}

export interface SelectedCurrencyPayload {
	date: string | number | Date;
	rates: Object;
}

export enum CurrencyDefaultSelection {
	to = "EUR",
	from = "GBP"
}

export interface AppError {
	type: AppErrorType;
	code: string;
	data: any;
}

export const enum AppErrorType {
}
