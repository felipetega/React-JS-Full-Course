describe('Busca um filme', () => {
  it('Minecraft', () => {
    cy.visit('http://localhost:5173/');

    // Digita "Minecraft" no campo de busca
    cy.get('input[placeholder="Search Through Thousands of Movies"]')
      .type('Minecraft');

    // Aguarda debounce / resultado aparecer
    cy.wait(1000); // opcional, dependendo do app

    // Verifica se ao menos um resultado foi renderizado
    cy.get('.movie-card')
      .should('exist')
      .first()
      .scrollIntoView(); // scrolla até o primeiro card encontrado
  });
});
