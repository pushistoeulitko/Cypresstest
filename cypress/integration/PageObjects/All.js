/// <reference types="cypress" />

class All {
    visit() {
        cy.visit('https://fincalculator.ru/kreditnyj-kalkulyator')
    }

    calculateButtom(value) {
        const button = cy.get('button:contains("Рассчитать")')
        button.not('[disabled]').click()
        return this
    }

    insertSum(value) {
        const field = cy.get('input.all-column12[name="loanParameters.amount"]')
        field.type(value)
        return this
    }

    selectInflation(value) {
        const checkbox = cy.get('input.pull-right[name="inflationParameters.isDiscounted"]')
        checkbox.not('[disabled]').check()
        return this
    }

    clickConfirm(value) {
        const button = cy.get('button:contains("Рассчитать")').not('[disabled]').click()
        button.click()
        return this
    }

    totalPaymentsWithInflation(){
        const field = cy.get('span.pull-left[data-bind="text : decimalToString(inflationTotalAmount)"]')
        field.should('be.visible')
        return this
    }
    overpaymentWithInflation(){
        const field =cy.get('div:nth-child(6) > div.all-column6.result-value.inflation > span')
        field.should('be.visible')
        return this
    }

    totalPayments(){
        const field =cy.get('span.pull-left[data-bind="text : decimalToString(totalAmount)"]')
        field.should('be.visible')
        return this
    }

}
export default All
