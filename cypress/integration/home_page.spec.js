describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  describe('Content', () => {
    it('displays my name', () => {
      cy.visit('/')
      cy.contains('Adam Jonas')
    })
  })

  it('dsiplays my portrait', () => {
    cy.visit('/')
    cy.get('.portrait')
      .should('have.attr', 'alt', 'Image of Adam')
  })

  describe('ContactLinks', () => {
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
      cy.get('.cvLink')
      .should('have.attr', 'href')
    })
  })

  describe('PageLinks', () => {
    it('has projects link', () => {
      cy.visit('/')
      cy.get('.projectsLink')
        .should('have.attr', 'href', '#projects')
    })
  })
})
