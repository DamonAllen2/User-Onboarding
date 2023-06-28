describe('Advanced Forms', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    describe('Sanity tests', () => {
        it('true is equal to true', () => {
            expect(true).to.equal(true);
        })
    })
    it('checks if Name textbox can be typed in', () => {
        cy.get('[name=fullname]').type('Damon Allen')
        .should('have.value', 'Damon Allen')
    })
    it('Checks if Email textbox can be typed in', () => {
        cy.get('[name=email]').type('damon.nicholas.allen@live.com')
        .should('have.value', 'damon.nicholas.allen@live.com')
    })
    it('Checks if password textbox can be typed in', () => {
        cy.get('[name=password]').type('Damon')
        .should('have.value', 'Damon')
    })
    it('TOS box works', () => {
        cy.get('[name=tos]').click()
    })
    it('can submit data', () => {
        cy.get('[name=fullname]').type('Damon Allen')
        .should('have.value', 'Damon Allen')
        cy.get('[name=email]').type('damon.nicholas.allen@live.com')
        .should('have.value', 'damon.nicholas.allen@live.com')
        cy.get('[name=password]').type('Damon')
        .should('have.value', 'Damon')
        cy.get('[type=submit]').click()
    })
    it('Shouldnt work because text inbox isnt filled', () => {
        cy.get('[name=fullname]').type('Damon Allen')
        .should('have.value', 'Damon Allen')
        cy.get('[name=password]').type('Damon')
        .should('have.value', 'Damon')
        cy.get('[type=submit]').click()
        .should('be.disabled')
    })






















})