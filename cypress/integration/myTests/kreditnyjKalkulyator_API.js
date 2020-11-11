
describe('API tests', () => {
    Cypress.config('baseUrl', 'https://fincalculator.ru')

    it('ApI - 1 - Открытие страницы', () => {
        cy.request('./kreditnyj-kalkulyator').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })

    let data = ['minMonthPayment', 'maxMonthPayment', 'totalAmount', 'totalOverpayment', 
                'relativeOverpayment', 'inflationTotalAmount', 'inflationTotalOverpayment', 
                'inflationTotalAmount', 'inflationTotalOverpayment', 'inflationRelativeOverpayment', 
                'xirr'] 
    
    it('ApI - 2 - Поля по умолчанию (проверка по блоку общий платеж)', () => {  
        cy.fixture('defaultResponse').then(defaultResponse => {
            cy.fixture('loan').then(loan => {
               data.forEach(i  => { 
                    cy.request('POST', 'calculators/CalculateLoan', loan).then((response) => {
                        expect(response.status).to.eq(200) // 
                        expect(response.body.total.[i]).equal(defaultResponse.total.[i])
                    })
                })
            })
        })
    })

    it('ApI - 3 - Отправка значений не по умолчанию (проверка по блоку общий платеж)', () => {
        cy.fixture('responseCredit').then(responseCredit => {
            cy.fixture('credit').then(credit => {
                data.forEach(i  => { 
                    cy.request('POST', 'calculators/CalculateLoan', credit).then((response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body.total.[i]).equal(responseCredit.total.[i])
                    })  
                })
            })
        })
    })
})
