describe('template srec', () => {
    it('passed', () => {
        cy.visit('https://dev.profteam.su/login')
    })
    it('Positive login test', () => {
        cy.fixture('data_test_login').then(data => {

            cy.visit('https://dev.profteam.su/login')
            cy.log('Переход на страницу авторизации')

            cy.log('Ввод правильного логина')
            cy.get('.form-input--text')
                .type(data.login)

            cy.log('Ввод правильного пароля')
            cy.get('.form-input--password')
                .type(data.password)

            cy.log('Клик по кнопке "Войти"')
            cy.get(':nth-child(3) > .button').click()
        })
    })
})