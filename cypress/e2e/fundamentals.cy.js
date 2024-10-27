describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('/fundamentals')

  })
  it('passes', () => {
    console.log('Hello, world!')
    cy.getDataTest('fundamentals-header').should('be.visible')
  
  })
  it('Accordion Works correctly', () => {
 
    

    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible') 
    
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible') 

    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()

    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible') 



  })


})
