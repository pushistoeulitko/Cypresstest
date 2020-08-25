/// <reference types="cypress" />
import All from '../PageObjects/All'

const all=new All()

context('kreditnyjKalkulyator', () => {
  beforeEach(() => {
    all.visit()
  })

  //проверка заголовка страницы "Кредитный калькулятор"
  it('UI - 1', () => {
    cy.title().should('eq', 'Кредитный калькулятор')
  })

  //чекбокс "учитывать инфляцию"
  it('UI - 2', () => {
    all.selectInflation()
    all.clickConfirm()
    all.overpaymentWithInflation()
    all.totalpaymentsWithInflation()
  })

  // Ввести и рассчитать
  it('UI - 3', () => {
    cy.get('input.all-column12[name="loanParameters.amount"]').type('3000000')
    cy.get('button:contains("Рассчитать")').not('[disabled]').click()
    cy.get('span.pull-left[data-bind="text : decimalToString(totalAmount)"]').should('be.visible')
        //.should('eq',"3 305 561,13")
  })

})
 
