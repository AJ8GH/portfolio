describe('About page', () => {
  it('displays its title', () => {
    cy.visit('/')
      cy.contains('About Me')
  })

  it('displays its paragraph', () => {
    cy.visit('/')
      cy.get('.aboutParagraph')
      .contains('Makers Academy')
  })
})
