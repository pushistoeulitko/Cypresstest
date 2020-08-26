/// <reference types="cypress" />

describe('API tests', () => {
    Cypress.config('baseUrl', 'https://fincalculator.ru')


    it('ApI - 1 - Открытие страницы', () => {
        cy.request('./kreditnyj-kalkulyator').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })

    it('ApI - 2 - Поля по умолчанию', () => {
        cy.fixture('loan').then(loan => {
            cy.request('POST', 'calculators/CalculateLoan', loan).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.total.totalOverpayment).equal(152792.06)
                expect(response.body.total.totalAmount).equal(1652792.06)
                expect(response.body.total.xirr).equal(0.12484)
            })
        })
    })

    it('ApI - 3 - Отправка значений не по умолчанию', () => {
        cy.fixture('credit').then(credit => {
            cy.request('POST', 'calculators/CalculateLoan', credit).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.total.totalOverpayment).equal(17038899.54)
                expect(response.body.total.totalAmount).equal(23038899.54)
                expect(response.body.total.xirr).equal(0.2498)
            })
        })
    })
})
