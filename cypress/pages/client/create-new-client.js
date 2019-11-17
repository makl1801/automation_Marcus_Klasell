const clientNameTxtField = '#name'
const clientEmailTxtField = '#email'
const clientGenderRadioButtons = '[type="radio"]'
const clientSocialSecurityNumberTxtField = '#socialSecurityNumber'
const saveButton = '.btn-primary'

function assertPage(cy){
cy.title().should('eq','Create New Client')

}

function assertPageAfterClientCreation(cy){
cy.contains('Client was successfully created.') 
}

function createNewClient(cy, name, email, gender, socialSecurityNumber){
cy.get(clientNameTxtField).type(name)
cy.get(clientEmailTxtField).type(email)
cy.get(clientGenderRadioButtons).check(gender)
cy.get(clientSocialSecurityNumberTxtField).type(socialSecurityNumber)
cy.get(saveButton).click()


}

//Exports
module.exports = {
    assertPage,
    createNewClient,
    assertPageAfterClientCreation
   
    }