//Elements
const dashboardLink = ':nth-child(2) > a'
const bedroomLink = ':nth-child(3) > a'
const billLink = ':nth-child(4) > a'
const clientLink = ':nth-child(5) > a'
const reservationLink = ':nth-child(6) > a'
const userLink = ':nth-child(7) > a'
const dropdownMenu = '.dropdown-toggle'
const logoutLink = '.dropdown-menu > li > a'


//Functions
function navigateToDashboard(cy){
cy.get(dashboardLink).click()
}

function navigateToBedroom(cy){
    cy.get(bedroomLink).click()
}

function navigateToBill(cy){
    cy.get(billLink).click()
}

function navigateToClient(cy){
    cy.get(clientLink).click()
}

function navigateToReservation(cy){
    cy.get(reservationLink).click()
}

function navigateToUser(cy){
    cy.get(userLink).click()
}

function logout(cy){
cy.get(dropdownMenu).click()
cy.get(logoutLink).click()
}

//Exports
module.exports = {
logout,
navigateToBedroom,
navigateToBill,
navigateToClient,
navigateToDashboard,
navigateToReservation,
navigateToUser
}