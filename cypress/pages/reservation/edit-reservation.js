//

const editReservationTitle = 'Edit Hotel Reservation'
const entryDateField = '#entryDate'
const exitDateField = '#exitDate'
const bedroomIdDropdown = '#bedroomId'
const clientDropdown = '#clientId'
const reservationStatusDropdown = '#reservationStatusId'
const saveButton = '.btn-primary'

function assertPage(cy){
cy.title().should('eq',editReservationTitle)
}

function assertPageAfterReservationEdit(cy){
cy.contains('HotelReservation was successfully updated.') 
}

function editReservation(cy, enterDate, exitDate, bedroomId, clientId, reservationStatus){
    cy.get(entryDateField).clear()
    cy.get(entryDateField).type(enterDate)
    cy.get(entryDateField).type('{enter}')
    cy.get(exitDateField).clear()
    cy.get(exitDateField).type(exitDate)
    cy.get(exitDateField).type('{enter}')
    cy.get(bedroomIdDropdown).select(bedroomId)
    cy.get(clientDropdown).select(clientId)
    cy.get(reservationStatusDropdown).select(reservationStatus)
    cy.get(saveButton).click()
    
   



}


//Exports
module.exports = {
    assertPage,
    editReservation,
    assertPageAfterReservationEdit
   
    }
