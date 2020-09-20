describe('Параметризация кредитного калькулятора', () => {
    beforeEach(() => {
        cy.visit('https://fincalculator.ru/kreditnyj-kalkulyator')
    })

    let testingData = [
        {
            description: 'light',
            requestData: {
                summa: 10000.00,
                period: 10,
            }
        },

        {
            description: 'hardcore',
            requestData: {
                summa: 1000000.00,
                period: 1000,
            }
        }
    ]

    testingData.forEach(({description, requestData}) => {
        it(`UI - Ввод корректных значений в поля "суммы" и "период" - ${description}`, () => {
            cy.get('input.all-column12[name="loanParameters.amount"]').clear().type(requestData.summa)
            cy.get('input.all-column12[name="loanParameters.root_periodValue"]').clear().type(requestData.period)
        })
    })
})