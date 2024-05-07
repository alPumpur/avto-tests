describe('template spec', () => {
    it('Needs filter test', () => {
        cy.fixture('data_test_login').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get(':nth-child(3) > .button').click()
            cy.wait(2000)

            cy.log('Клик по кнопке "Потребности"')
            cy.get(':nth-child(1) > .header__nav > [href="/needs"]').click()
            cy.wait(2000)

            cy.log('Клик по нужной кнопке фильтра')
            cy.get(':nth-child(2) > .radio-component__input').click()
            cy.wait(2000)

        })
    })
})