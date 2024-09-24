describe('Teste da tela: Operação - Cadastro - Tipo de Movimentação', () => {
  it('Login', () => {
    cy.visit('https://demo.vrsoft.com.br/login')
    cy.get('input[placeholder="E-mail"]').type("rafael.fernandes@vrsoft.com.br")
    cy.get('input[placeholder="Senha"]').type("Teste123@")
    cy.get('.btn').click()
    cy.wait(5000)
  });

  it('teste', () => {
    cy.visit('https://demo.vrsoft.com.br/operacao/cadastro/tipo-movimentacao/consulta')
    cy.get('vr-nav-button-add > .main-nav-action__btn--container > vrc-icon > .vr').click()
    cy.get('input[placeholder="Descrição"]').type("Teste QA Rafael")
    cy.contains("combobox[id='1727193289067vr1204-9007199254740969b2a1-900719925474096995d4-9007199254740969acc6-fieldRequired']").click


  });

})