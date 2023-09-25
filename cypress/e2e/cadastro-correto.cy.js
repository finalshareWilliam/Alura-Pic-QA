import Cadastro from '../support/pages/pagina-cadastro/cadastro'

describe('Página de Cadastro, cadastro em massa.', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')
  })

  // const usuarios = require('../fixtures/usuarios.json')
  // usuarios.forEach(usuario => {

    it('Preencher os campos do formulario corretamente para cadastrar novo usuario.', () => {

      // cy.get('[data-test="register"]').click();
      // cy.get('[data-test="email"]').type(usuario.email)
      // cy.get('[data-test="fullName"]').type(usuario.fullName)
      // cy.get('[data-test="registerUserName"]').type(usuario.userName)
      // cy.get('[data-test="registerPassword"]').type(usuario.password)
      // cy.get('[data-test="btnRegister"]').click();

      Cadastro.acessarPaginaDeCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro();
    })

  })


