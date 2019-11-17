const createNewClientButton = '.btn-primary'
const clientTitle = 'List'
const buttonText = 'Create New Client'

function assertPage(cy){
cy.title().should('eq', clientTitle)
cy.contains(buttonText)

}


function navigateToCreateNewClient (cy){
    cy.get(createNewClientButton).click()

}


//Exports
module.exports = {
    navigateToCreateNewClient,
    assertPage
   
    }