const billStatusDropdown = '#billStatusId'
const hotelReservationDropdown = '#hotelReservationId'
const saveButton = '#saveBtn'

function assertPage(cy){
cy.title().should('eq','Create New Bill')

}

function assertPageAfterBillCreation(cy){
cy.contains('Bill was successfully created.') 
}

function createNewBill(cy, billStatusId, hotelReservationId){

cy.get(billStatusDropdown).select(billStatusId)
cy.get(hotelReservationDropdown).select(hotelReservationId)
cy.get(saveButton).click()

}


//Exports
module.exports = {
    assertPage,
    createNewBill,
    assertPageAfterBillCreation
   
    }