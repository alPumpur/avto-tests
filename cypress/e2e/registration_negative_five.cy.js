describe('template spec', () => {
it('Negative register test 5 (incorrect surname - другой язык)', () => {
    cy.fixture('data_test_registr_n').then(data => {
        cy.visit('https://dev.profteam.su/registration')

        cy.log('Ввод корректного логина')
        cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login)

        cy.log('Ввод корректного email')
        cy.get('.form-input--email').type(data.email)

        cy.log('Ввод корректного пароля')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password)
        cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password)

        cy.log('Клик по кнопке')
        cy.get(':nth-child(4) > .button').click()

        cy.log('Ввод некорректной фамилии (другой язык)')
        cy.get('[style=""] > :nth-child(1) > .form-control--medium > .form-input--text').type(data.surname)

        cy.log('Ввод корректного имени')
        cy.get(':nth-child(2) > .form-control--medium > .form-input--text').type(data.name)

        cy.log('Ввод корректного отчества ')
        cy.get(':nth-child(3) > .form-control--medium > .form-input--text').type(data.patronymic)
    })
})
})