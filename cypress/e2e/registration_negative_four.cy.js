describe('template spec', () => {
it('Negative register test 4 (incorrect password - пароли не совпадают)', () => {
    cy.fixture('data_test_registr_n').then(data => {
        cy.visit('https://dev.profteam.su/registration')

        cy.log('Ввод корректного логина')
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)

        cy.log('Ввод корректного email')
        cy.get('.form-input--email').type(data.email)

        cy.log('Ввод некорректного пароля')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_n2)
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password_n3)
    })
})
})
