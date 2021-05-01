describe('Home page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })

  it('displays my name', () => {
    cy.visit('/')
    cy.contains('Adam Jonas')
  })
})
