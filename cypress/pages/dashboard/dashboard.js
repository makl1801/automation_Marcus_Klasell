const dashboardLabelOnTop = 'Hotel Accommodadion'
const dashboardTitle = 'Dashboard'


function assertPage(cy){
cy.contains(dashboardLabelOnTop)
cy.title().should('eq', dashboardTitle)
}



module.exports = {
assertPage


}