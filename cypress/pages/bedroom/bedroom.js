const createNewBedroomButton = '.btn-primary'
const bedroomTitle = 'List'
const buttonText = 'Create New Bedroom'

function assertPage(cy){
cy.title().should('eq', bedroomTitle)
cy.contains(buttonText)

}


function navigateToCreateNewBedroom (cy){
    cy.get(createNewBedroomButton).click()

}


//Exports
module.exports = {
    navigateToCreateNewBedroom,
    assertPage
   
    }