export interface AmountPayload {
	amount: number;
}

export interface AmountState extends AmountPayload {
	isBusy: boolean;
}
