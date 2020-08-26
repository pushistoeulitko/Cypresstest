/// <reference types="cypress" />
import All from '../PageObjects/All'

const all = new All()

context('kreditnyjKalkulyator', () => {
  beforeEach(() => {
    all.visit()
  })

  it('UI - 1 - проверка перехода на страницу "Ипотечный калькулятор" (проверка по заголовки и URL)', () => {
    cy.title().should('eq', 'Кредитный калькулятор')
    all.followingLink()
    cy.title().should('eq', 'Ипотечный калькулятор')
    cy.url().should('eq', 'https://fincalculator.ru/ipotechnyj-kalkulyator')
  })

  it('UI - 2 - Срабатывание чекбокса "учитывать инфляцию" (по появлению элементов)', () => {
    all.selectInflation()
    all.clickConfirm()
    all.overpaymentWithInflation()
    all.totalPaymentsWithInflation()
  })

  //
  it('UI - 3 Ввод корректных значений в поле "суммы"', () => {
    all.insertSum('3000000')
    all.clickConfirm()
    all.calculateButtom()
    all.totalPayments()

  })

  it('UI - 4 Ввод корректных значений в поле "суммы"', () => {
    all.insertSum('jhfdsghkjgesrlhj')
    all.clickConfirm()
    all.calculateButtom()
    all.totalPayments()
  })

  //бессполезный, но забавло сворачивается
  it('UI - 0', () => {
    cy.get('.antiscroll-content > :nth-child(8) > :nth-child(1)').click()
    cy.get('.antiscroll-content > :nth-child(8) > :nth-child(2)')
  })
})
 
