describe('template srec', () => {
it('Negative login test login and password (incorrect - неправильный логин и пароль)', () => {
    cy.fixture('data_test_login_n').then(data => {

        cy.visit('https://dev.profteam.su/login')
        cy.log('Переход на страницу авторизации')

        cy.log('Ввод неправильного логина')
        cy.get('.form-input--text')
            .type(data.login_n)

        cy.log('Ввод неправильного пароля')
        cy.get('.form-input--password')
            .type(data.password)

        cy.log('Клик по кнопке "Войти"')
        cy.get(':nth-child(3) > .button').click()
    })
})
})