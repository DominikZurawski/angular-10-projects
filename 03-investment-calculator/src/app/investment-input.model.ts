// export type InvestmentInput =    {
//         initialInvestment: number,
//         duration: number,
//         expectedReturn: number,
//         annualInvestment: number

//     }

export interface InvestmentInput {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
}

export interface Results {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
}


