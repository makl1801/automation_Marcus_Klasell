const bedroomDescriptionTxtField ='#description'
const bedroomFloorNrField = '#floor'
const bedroomNumberNrField = '#number'
const bedroomDailyPriceNrField = '#priceDaily'
const bedroomStatusDropdown = '#bedroomStatusId'
const bedroomTypeDropdown = '#typeBedroomId'
const saveButton = '#saveBtn'

function assertPage(cy){
cy.title().should('eq','Create New Bedroom')

}

function assertPageAfterBedroomCreation(cy){
cy.contains('Bedroom was successfully created.') 
}

function createNewBedroom(cy, description, floorNr, bedroomNr, dailyPrice, statusId, bedroomId){


    
cy.get(bedroomDescriptionTxtField).type(description)
cy.get(bedroomFloorNrField).type(floorNr)
cy.get(bedroomNumberNrField).type(bedroomNr)
cy.get(bedroomDailyPriceNrField).type(dailyPrice)
cy.get(bedroomStatusDropdown).select(statusId)
cy.get(bedroomTypeDropdown).select(bedroomId)
cy.get(saveButton).click()

}


//Exports
module.exports = {
    assertPage,
    createNewBedroom,
    assertPageAfterBedroomCreation
   
    }