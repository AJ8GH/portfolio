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
    cy.get('.linkedinLink')
      .should('have.attr', 'href', 'https://www.linkedin.com/in/adamjonas1/')
  })

  it('has GitHub link', () => {
    cy.visit('/')
    cy.get('.github')
    cy.get('.githubLink')
      .should('have.attr', 'href', 'https://github.com/AJ8GH')
  })

  it('has CV link', () => {
    cy.visit('/')
    cy.get('.cv')
  })
})
