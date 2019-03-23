describe('Integration test with visual testing', () => {
  it('Loads the homepage', () => {
    cy.visit('http://localhost:3030');
    cy.percySnapshot();
  });

  it('Loads the sign in page', () => {
    cy.visit('http://localhost:3030/signIn');
    cy.percySnapshot();
  });
});
