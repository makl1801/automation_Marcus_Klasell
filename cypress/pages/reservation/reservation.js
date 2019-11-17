const createNewReservationButton = '.btn-primary'
const reservationTitle = 'List'
const buttonText = 'Create New Reservation'
var specificEditButton;
var editButton;

function assertPage(cy){
cy.title().should('eq', reservationTitle)
cy.contains(buttonText)

}


function navigateToCreateNewReservation (cy){
    cy.get(createNewReservationButton).click()

}

function navigateToEditReservation(editButtonToClick){
 specificEditButton = editButtonToClick
 editButton = '#j_idt50 > table > tbody > tr:nth-child('+specificEditButton+') > td:nth-child(8) > a:nth-child(2)'
 cy.get(editButton).click()   

}


//Exports
module.exports = {
    navigateToCreateNewReservation,
    assertPage,
    navigateToEditReservation
   
    }
// #j_idt50 > table > tbody > tr:nth-child(1) > td:nth-child(8) > a:nth-child(2)
// #j_idt50 > table > tbody > tr:nth-child(2) > td:nth-child(8) > a:nth-child(2)
// #j_idt50 > table > tbody > tr:nth-child(3) > td:nth-child(8) > a:nth-child(2)
// #j_idt50 > table > tbody > tr:nth-child(4) > td:nth-child(8) > a:nth-child(2)
// #j_idt50 > table > tbody > tr:nth-child(5) > td:nth-child(8) > a:nth-child(2)