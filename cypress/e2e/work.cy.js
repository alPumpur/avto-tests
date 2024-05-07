describe('template spec', () => {
    it('Working test', () => {
        cy.fixture('data_test_login').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()
            cy.wait(2000)

            cy.log('Клик по кнопке "Стажировки"')
            cy.get(':nth-child(1) > .header__nav > [href="/internships"]').click()
            cy.wait(2000)
        })
    })
})