const createNewBillButton = '.btn-primary'
const billTitle = 'List'
const buttonText = 'Create New Bill'

function assertPage(cy){
cy.title().should('eq', billTitle)
cy.contains(buttonText)

}


function navigateToCreateNewBill (cy){
    cy.get(createNewBillButton).click()

}


//Exports
module.exports = {
    navigateToCreateNewBill,
    assertPage
   
    }