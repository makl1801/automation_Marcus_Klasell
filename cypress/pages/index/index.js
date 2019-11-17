//Elements
const titleIndexPage = 'Hotel Accomodation - login page'
const loginFormLabel = 'Please, login!'
const usernameTxtField = '#login'
const passwordTxtField = '#senha'
const loginSubmitBtn = '#loginBtn'

//Functions
function performLogin(cy, username, password){
    cy.get(usernameTxtField).clear()
    cy.get(usernameTxtField).type(username)
    cy.get(passwordTxtField).type(password)
    cy.get(loginSubmitBtn).click()

}

function checkLoginpageLabel(cy){
cy.contains(loginFormLabel)

}

//Exports

module.exports = {

performLogin,
checkLoginpageLabel

}