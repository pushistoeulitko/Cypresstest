/// <reference types="cypress" />

context('kreditnyjKalkulyator', () => {
  beforeEach(() => {
    cy.visit('https://fincalculator.ru/kreditnyj-kalkulyator') })

  //проверка заголовка
  it('UI - 1', () => {
      cy.title().should('eq','Кредитный калькулятор')
    })

  //проверка поля суммы
  it('UI - 2', () => {
    cy.get('input.all-column12[name="loanParameters.amount"]').contains('1 500 000,00') 
  })

  //проверка ввода не валидного значения в поле суммы
  it('UI - 3', () => {
      cy.get('input.all-column12[name="loanParameters.amount"]')
      .type('djfdkghdkgdk')
      .should('eq','1500000,00')
  })

  //чекбокс учитывать инфляцию
  it('UI - 4', () => {
    cy.get('input.pull-right[name="inflationParameters.isDiscounted"]')
      .not('[disabled]')
      .check()
      .should('be.checked')
  })

  //кликнуть на кнопку "Рассчитать"
  it('UI - 5', () => {
    cy.get('button:contains("Рассчитать")').not('[disabled]').click()
  })

})
 
