
context('kreditnyjKalkulyator', () => {
  beforeEach(() => {
    cy.visit('https://fincalculator.ru/kreditnyj-kalkulyator')
  })

  //проверка заголовка страницы "Кредитный калькулятор"
  it('UI - 1', () => {
    cy.title().should('eq', 'Кредитный калькулятор')
  })

  //чекбокс "учитывать инфляцию"
  it('UI - 2', () => {
    cy.get('input.pull-right[name="inflationParameters.isDiscounted"]')
        .not('[disabled]')
        .check()
        .should('be.checked')
    cy.get('button:contains("Рассчитать")').not('[disabled]').click()
    cy.get('span.pull-left[data-bind="text : decimalToString(inflationTotalAmount)"]').should('be.visible')
    cy.get('div:nth-child(6) > div.all-column6.result-value.inflation > span').should('be.visible')
  })

  // Ввести и рассчитать
  it('UI - 3', () => {
    cy.get('input.all-column12[name="loanParameters.amount"]').type('3000000')
    cy.get('button:contains("Рассчитать")').not('[disabled]').click()
    cy.get('span.pull-left[data-bind="text : decimalToString(totalAmount)"]').should('be.visible')
  })

})
 
