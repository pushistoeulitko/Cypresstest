
import All from '../PageObjects/All'

const all = new All()

context('kreditnyjKalkulyator', () => {
  beforeEach(() => {
    all.visit()
  })

 let data = [
   {
     description : 'Ипотечный калькулятор',
     link : 'ipotechnyj-kalkulyator'
   },
   {
    description : 'Калькулятор автокредита',
    link : 'kalkulyator-avtokredita'
   },
   {
    description : 'Калькулятор потребительского кредита',
    link : 'kalkulyator-potrebitelskogo-kredita'
   }
 ]

 data.forEach(({description, link }) => {
  it(`UI - 1 - проверка перехода на страницу - ${description}`, () => {
    cy.title().should('eq', 'Кредитный калькулятор')
    all.followingLink(link)
    cy.title().should('eq',  description)
    cy.url().should('eq', 'https://fincalculator.ru/' + link)
  })
})

  it('UI - 2 - Срабатывание чекбокса "учитывать инфляцию" (по появлению элементов)', () => {
    all.selectInflation()
    all.clickConfirm()
    all.overpaymentWithInflation()
    all.totalPaymentsWithInflation()
  })

  it('UI - 3 Ввод корректных значений в поле "суммы"', () => {
    all.insertSum('3000000')
    all.clickConfirm()
    all.calculateButtom()
    all.totalPayments()
  })

  it('UI - 4 Ввод не корректных значений в поле "суммы"', () => {
    all.insertSum('jhfdsghkjgesrlhj')
    all.clickConfirm()
    all.calculateButtom()
    all.totalPayments()
  })
})

