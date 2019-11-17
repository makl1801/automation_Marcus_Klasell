const createNewUserButton = '.btn-primary'
const userTitle = 'List'
const buttonText = 'Create New User'

function assertPage(cy){
cy.title().should('eq', userTitle)
cy.contains(buttonText)

}


function navigateToCreateNewUser (cy){
    cy.get(createNewUserButton).click()

}


//Exports
module.exports = {
    navigateToCreateNewUser,
    assertPage
   
    }