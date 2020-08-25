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
    all.totalPaymentsWithInflation()
  })

  // Ввести и рассчитать
  it('UI - 3', () => {
    all.insertSum('3000000')
    all.clickConfirm()
    all.calculateButtom()
    all.totalPayments()//.should('eq',"3 305 561,13")
  })

})
 
