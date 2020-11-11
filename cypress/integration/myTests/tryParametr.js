//рандом с округлением
function getrandome(min, max){
  return Math.floor(Math.random() * (max - min + 1 ) + min)
}
//рандом без окгуления
function getrandomeNotfloor(min, max){
  return (Math.random() * (max - min) + min)
}

describe('Параметризация кредитного калькулятора', () => {
  beforeEach(() => {
    cy.visit('https://fincalculator.ru/kreditnyj-kalkulyator');
  })

  let testingData = [{
      description: 'light',
      requestData: {
        summa:  getrandome(1000000, 3000000),
        period: 10,
      }
    },

    {
      description: 'hardcore',
      requestData: {
        summa:  getrandomeNotfloor(1000000, 3000000),
        period: 1000,
      }
    }
  ]

  testingData.forEach(({
    description,
    requestData
  }) => {
    it(`UI - Ввод корректных значений в поля "суммы" и "период" - ${description}`, () => {
      cy.get('input.all-column12[name="loanParameters.amount"]').clear().type(requestData.summa)
      cy.get('input.all-column12[name="loanParameters.root_periodValue"]').clear().type(requestData.period)
    });
  });
})
