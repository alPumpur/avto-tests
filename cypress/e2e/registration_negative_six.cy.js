describe('template spec', () => {
    it('Negative register test 3 (incorrect login - другой язык)', () => {
        cy.fixture('data_test_registr_n').then(data => {
            cy.visit('https://dev.profteam.su/registration')

            cy.log('Ввод некорректного логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_n)

            cy.log('Ввод корректного email')
            cy.get('.form-input--email').type(data.email)

            cy.log('Ввод корректного пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)
        })
    })
})