describe('Form Validations', function() {
  beforeEach(function() {
    cy.visit('localhost:3000')
  })

  it('check for presence of a password', () => {
    cy.get('input[name=email]').type('john.doe@gmail.com{enter}')
    cy.get('[type="password"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
  })
})
