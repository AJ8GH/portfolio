describe('About page', () => {
  it('displays its title', () => {
    cy.visit('/')
      cy.contains('About Me')
  })
})
