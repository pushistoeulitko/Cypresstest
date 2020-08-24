
describe('API tests', () => {
    Cypress.config('baseUrl','https://fincalculator.ru')

    it('ApI - 1', () => {
        cy.request('./kreditnyj-kalkulyator').then((response) => {
            expect(response).to.have.property('status', 200)
        })
    })

    it('ApI - 0', () => {
        cy.fixture('credit').then(credit => {
            cy.request('POST', 'calculators/CalculateLoan', credit ).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('amount',credit.amount)
                expect(response.body).to.have.property('period',credit.period)
                expect(response.body).to.have.property('rate',credit.rate)
                // expect(response.body).to.deep.equal('amount', credit.amount)
                // expect(response.body).to.deep.equal('period',credit.period)
                // expect(response.body).to.deep.equal('rate',credit.rate)

            })
        })
    })

    it('ApI - 2', () => {
        const item = {"amount": "7000000"}
        cy.request('POST', '/calculators/CalculateLoan', item)
            .its('body')
            //.its('data')
            .should('deep.equal', item)
    })
})
