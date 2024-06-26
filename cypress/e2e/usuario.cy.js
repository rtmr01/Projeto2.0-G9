describe('usuario', () => {
    it('usuario', () => {
        cy.visit("/");
        cy.get('.column-left > a > .button').click();
        cy.get('#username').type("felipe");
        cy.get('#password').type("camisa");
        cy.get('.btn').click();
        cy.get('#id_username').type("felipe");
        cy.get('#id_password').type("camisa");
        cy.get('.btn').click();
        cy.get(':nth-child(3) > a > .bx').click();
        cy.get('[value="tem wifi"]').click();
        cy.get('#cafeteriadetail > :nth-child(1) > div').invoke('text').should('have.string', 'Versado na Recife Antigo (81999998181)');
        cy.get('[value=""]').click();
        cy.get('#cafeteriadetail > :nth-child(1) > div').invoke('text').should('have.string', 'Versado na Recife Antigo (81999998181)');
        cy.get('#cafeteriadetail').click();
        cy.get('#favoritoBtn').click()
        cy.get('#favBtn').click()
        cy.get('#wishBtn').click()
        cy.get(':nth-child(3) > a > .bx').click();
        cy.get('#cafeteriadetail').click();
        cy.get('h6.card-text').invoke('text').should('have.string', 'Promoção do dia: tudo 2 reais');
        cy.get('.btn-success').click();
        cy.get('#comentario_texto').type("Muito bom, recomendo");
        cy.get('.btn-primary').click();
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(2) > .card > .card-body > :nth-child(2)').invoke('text').should('have.string', 'Muito bom, recomendo');
        cy.get('.btn-sm').click();
        cy.get('.modal-footer > .btn-danger').click();
        cy.get('#avaliarBtn').click();
        cy.get('#avaliacao').select('1 Estrela');
        cy.get('.btn-primary').click();
        cy.get('.col-md-8 > :nth-child(3)').invoke('text').should('have.string', '1 Estrela');
        cy.get('#avaliarBtn').click();
        cy.get('#avaliacao').select('2 Estrelas');
        cy.get('.btn-primary').click();
        cy.get('.col-md-8 > :nth-child(3)').invoke('text').should('have.string', '2 Estrelas');
        cy.get('#avaliarBtn').click();
        cy.get('#avaliacao').select('3 Estrelas');
        cy.get('.btn-primary').click();
        cy.get('.col-md-8 > :nth-child(3)').invoke('text').should('have.string', '3 Estrelas');
        cy.get('#avaliarBtn').click();
        cy.get('#avaliacao').select('4 Estrelas');
        cy.get('.btn-primary').click();
        cy.get('.col-md-8 > :nth-child(3)').invoke('text').should('have.string', '4 Estrelas');
        cy.get('#avaliarBtn').click();
        cy.get('#avaliacao').select('5 Estrelas');
        cy.get('.btn-primary').click();
        cy.get('.col-md-8 > :nth-child(3)').invoke('text').should('have.string', '5 Estrelas');
    })
})