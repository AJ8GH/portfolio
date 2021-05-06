describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('displays my name', () => {
    cy.visit('/')
    cy.contains('Adam Jonas')
  })

  it('has LinkedIn link', () => {
    cy.visit('/')
    cy.get('.linkedin')
  })

  it('has GitHub link', () => {
    cy.visit('/')
    cy.get('.github')
  })

  it('has CV link', () => {
    cy.visit('/')
    cy.get('.cv')
  })
})
