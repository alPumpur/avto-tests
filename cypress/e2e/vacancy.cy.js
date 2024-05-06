describe('template spec', () => {
    it('Notification test', () => {
        cy.fixture('data_test_login').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()
            cy.wait(2000)

            cy.log('Клик по кнопке "Вакансии"')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()
            cy.wait(2000)
        })
    })
    it('Notification search test', () => {
        cy.fixture('data_test_login').then(data =>{
            cy.visit('https://dev.profteam.su/login')

            cy.log('Ввод логина')
            cy.get('.form-input--text').type(data.login)

            cy.log('Ввод пароля')
            cy.get('.form-input--password').type(data.password)

            cy.log('Клик по кнопке')
            cy.get('.form__buttons > :nth-child(3)').click()
            cy.wait(2000)

            cy.log('Клик по кнопке "Вакансии"')
            cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()
            cy.wait(2000)

            cy.log('Ввод запроса')
            cy.get('.form-input--text').type(data.search)

            cy.log('Клик по иконке поиска')
            cy.get('div.search-input__field > .button').click()
        })
    })
})