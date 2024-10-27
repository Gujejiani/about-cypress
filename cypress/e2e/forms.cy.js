

describe('Forms tests', ()=>{

    beforeEach(()=>{
        cy.visit('/forms')
    })

    it('Test Subscribe form', ()=>{
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.contains(/testing forms/i).should('be.visible')

        cy.get('@subscribe-input').type('kakha.gujejiain@gmail.com')
       
        cy.contains(/successfully subbed/i).should('not.exist')

        cy.getDataTest('subscribe-button').click()
        
        cy.contains(/successfully subbed/i).should('be.visible')
        cy.wait(3000)
        cy.contains(/successfully subbed/i).should('not.exist')



        cy.get('@subscribe-input').type('kakha@gujejiain.io')

        cy.getDataTest('subscribe-button').click()

        cy.contains(/invalid email/i).should('exist')

        cy.wait(3000)
        cy.contains(/invalid email/i).should('not.exist')

        cy.getDataTest('subscribe-button').click()

        cy.contains(/fail/i).should('exist')





    })
})