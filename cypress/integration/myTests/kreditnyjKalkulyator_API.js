
describe('API tests', () => {
    Cypress.config('baseUrl', 'https://fincalculator.ru')

    it('ApI - 1 - Открытие страницы', () => {
        cy.request('./kreditnyj-kalkulyator').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })

    it('ApI - 2 - Поля по умолчанию', () => {
        cy.fixture('defaultResponse').then(defaultResponse => {
            cy.fixture('loan').then(loan => {
                cy.request('POST', 'calculators/CalculateLoan', loan).then((response) => {
                    expect(response.status).to.eq(200)
                    // проверка по блоку total
                    expect(response.body.total.minMonthPayment).equal(defaultResponse.total.minMonthPayment)
                    expect(response.body.total.maxMonthPayment).equal(defaultResponse.total.maxMonthPayment)
                    expect(response.body.total.totalAmount).equal(defaultResponse.total.totalAmount)
                    expect(response.body.total.totalOverpayment).equal(defaultResponse.total.totalOverpayment)
                    expect(response.body.total.relativeOverpayment).equal(defaultResponse.total.relativeOverpayment)
                    expect(response.body.total.inflationTotalAmount).equal(defaultResponse.total.inflationTotalAmount)
                    expect(response.body.total.inflationTotalOverpayment).equal(defaultResponse.total.inflationTotalOverpayment)
                    expect(response.body.total.inflationRelativeOverpayment).equal(defaultResponse.total.inflationRelativeOverpayment)
                    expect(response.body.total.xirr).equal(defaultResponse.total.xirr)
                })
            })
        })
    })

    it('ApI - 3 - Отправка значений не по умолчанию', () => {
        cy.fixture('responseCredit').then(responseCredit => {
            cy.fixture('credit').then(credit => {
                cy.request('POST', 'calculators/CalculateLoan', credit).then((response) => {
                    expect(response.status).to.eq(200)
                    // проверка по блоку total
                    expect(response.body.total.minMonthPayment).equal(responseCredit.total.minMonthPayment)
                    expect(response.body.total.maxMonthPayment).equal(responseCredit.total.maxMonthPayment)
                    expect(response.body.total.totalAmount).equal(responseCredit.total.totalAmount)
                    expect(response.body.total.totalOverpayment).equal(responseCredit.total.totalOverpayment)
                    expect(response.body.total.relativeOverpayment).equal(responseCredit.total.relativeOverpayment)
                    expect(response.body.total.inflationTotalAmount).equal(responseCredit.total.inflationTotalAmount)
                    expect(response.body.total.inflationTotalOverpayment).equal(responseCredit.total.inflationTotalOverpayment)
                    expect(response.body.total.inflationRelativeOverpayment).equal(responseCredit.total.inflationRelativeOverpayment)
                    expect(response.body.total.xirr).equal(responseCredit.total.xirr)
                })
            })
        })
    })
})
