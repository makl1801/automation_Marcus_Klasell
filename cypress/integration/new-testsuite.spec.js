import * as loginPg from '../pages/index'
import * as dashboardPg from '../pages/dashboard/dashboard'
import * as navigation from '../pages/side-navigation/navigation'
import * as bedroomPg from '../pages/bedroom/bedroom'
import * as createNewBedroomPg from '../pages/bedroom/creat-new-bedroom'
import * as clientPg from '../pages/client/client'
import * as createNewClientPg from '../pages/client/create-new-client'
import * as data from '../data/generate-data'
import * as billPg from '../pages/bill/bill'
import * as createNewBillPg from '../pages/bill/create-new-bill'
import * as userPg from '../pages/user/user'
import * as createNewUserPg from '../pages/user/create-new-user'
import * as reservationPg from '../pages/reservation/reservation'
import * as editReservationPg from '../pages/reservation/edit-reservation'

const targets = require('../targets/targets')

describe('Test suite', function(){

    beforeEach(() => {
        cy.visit(targets.base_url)
        loginPg.checkLoginpageLabel(cy)
        loginPg.performLogin(cy, targets.username, targets.password)
        dashboardPg.assertPage(cy)
        
    })

    afterEach(() => {
        navigation.logout(cy)
        loginPg.checkLoginpageLabel(cy)

    })
    it('Create a new bedroom', () => {
   
        navigation.navigateToBedroom(cy)
        bedroomPg.assertPage(cy)
        bedroomPg.navigateToCreateNewBedroom(cy)
        createNewBedroomPg.assertPage(cy)
        createNewBedroomPg.createNewBedroom(cy, data.getBedroomDescription(), data.getBedroomFloorNr(), data.getBedroomNr(), data.getBedroomPrice(), data.getBedroomStatus(), data.getBedroomId())
        createNewBedroomPg.assertPageAfterBedroomCreation(cy)
        

    });

    it('Create a new client', () => {
        
        navigation.navigateToClient(cy)
        clientPg.assertPage(cy)
        clientPg.navigateToCreateNewClient(cy)
        createNewClientPg.assertPage(cy)
        createNewClientPg.createNewClient(cy, data.getName(), data.getEmail(), data.getGender(), data.getSocialSecurityNumber())
        createNewClientPg.assertPageAfterClientCreation(cy)
        
    });

    it('Create a new bill', () => {
        navigation.navigateToBill(cy)
        billPg.assertPage(cy)
        billPg.navigateToCreateNewBill(cy)
        createNewBillPg.assertPage(cy)
        createNewBillPg.createNewBill(cy, '3', '7')
        createNewBillPg.assertPageAfterBillCreation(cy)

    });

    it('Create a new user', () => {
        navigation.navigateToUser(cy)
        userPg.assertPage(cy)
        userPg.navigateToCreateNewUser(cy)
        createNewUserPg.assertPage(cy)
        createNewUserPg.createNewUser(cy, data.getTypeOfUser(), data.getLoginName(), data.getPassword(), data.getClientId(), data.getClientStatus())
        createNewUserPg.assertPageAfterUserCreation(cy)
        
    });

    it('Change the status of a reservation', () => {
        navigation.navigateToReservation(cy)
        reservationPg.navigateToEditReservation('5')
        editReservationPg.editReservation(cy, '2016-08-05', '2016-08-15', '7', '4', '1')
        editReservationPg.assertPageAfterReservationEdit(cy)
        
    });

   

    

})