const typeOfUserDropdown = '#typeUser'
const loginNameTxtField = '#login'
const passwordTxtField ='#password'
const passwordTxtFieldRetype = '#retypingPassword'
const clientIdDropdown = '#clientId'
const userStatusDropdown = '#userStatusId'


const saveButton = '.btn-primary'

function assertPage(cy){
cy.title().should('eq','Create New User')

}

function assertPageAfterUserCreation(cy){
cy.contains('User was successfully created.') 
}

function createNewUser(cy, typeOfUser, loginName, password, clientId, userStatus){
cy.get(typeOfUserDropdown).select(typeOfUser)
cy.get(loginNameTxtField).type(loginName)
cy.get(passwordTxtField).type(password)
cy.get(passwordTxtFieldRetype).type(password)
cy.get(clientIdDropdown).select(clientId)
cy.get(userStatusDropdown).select(userStatus)
cy.get(saveButton).click()

}


//Exports
module.exports = {
    assertPage,
    createNewUser,
    assertPageAfterUserCreation
   
    }