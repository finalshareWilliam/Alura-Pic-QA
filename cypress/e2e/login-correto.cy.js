describe('Pagina de login, utilizando função "Login"', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    it('Deve preencher os campos de login e realizar login', () => {
        cy.login('williamteste', 'teste123')
    })
})
