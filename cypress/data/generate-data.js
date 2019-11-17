

const faker = require('faker');
var createdBedroomsArray = getRandomInts(151);
var bedroomToGet = 5;
var firstName;
var lastName;
var email;
var gender;
var socialSecurityNumber;
var bedroomDescription;
var floorNr;
var bedroomPrice;
var bedroomStatus;
var bedroomId;
var loginName;
var password;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function getRandomInts(num) {
    var ints = [200, 21, 102, 103, 110, 109];
    while (ints.length < num-1) {
      var randNum = getRandomInt(1, 200);
      if(!ints.includes(randNum)){
        ints.push(randNum); 
      }
    }
    for (let index = 0; index < ints.length; index++) {
        console.log(ints[index]);
    }
    return ints;
   
  }

function getName(){
    firstName = faker.name.firstName()
    lastName = faker.name.lastName()
    const completeName = firstName + ' ' + lastName;
    return completeName;
}

function getEmail(){
email = faker.internet.email()
return email;
}

function getSocialSecurityNumber(){
    socialSecurityNumber = faker.random.number(999999999999)

    return socialSecurityNumber;
}

function getGender(){
   gender = Math.round(Math.random());

   if(gender == 0){
    console.log('F');
    return 'F';
    
   }else
   console.log('M');
   return 'M';

}

function getBedroomDescription(){
    var d1 = faker.commerce.productAdjective();
    var d2 = faker.company.catchPhraseAdjective();
    var d3 = faker.commerce.color();
    bedroomDescription = d1.toUpperCase()+', '+d2.toUpperCase()+', '+d3.toUpperCase();
    console.log(bedroomDescription);
    return bedroomDescription;
}

function getBedroomFloorNr(){
    floorNr = faker.random.number({min:1, max:10})
    console.log(floorNr);
    return floorNr;
}

function getBedroomNr(){
    bedroomToGet++;
    console.log('Bedroom number ' + createdBedroomsArray[bedroomToGet]);
    return createdBedroomsArray[bedroomToGet];
  
}

function getBedroomPrice(){
    bedroomPrice = faker.random.number(100000)
    console.log(bedroomPrice);
    return bedroomPrice;
}

function getBedroomStatus(){
    bedroomStatus = faker.random.number({min:1, max:3})
    console.log(bedroomStatus);
    return bedroomStatus.toString();
}

function getBedroomId(){
    bedroomId = faker.random.number({min:2, max:6})
    console.log(bedroomId);
    return bedroomId.toString();
}

function getLoginName(){
loginName = faker.internet.userName()

return loginName;

}
function getPassword(){
password = faker.internet.password()
return password;

}
function getTypeOfUser(){
    const nr = Math.round(Math.random());

    if(nr == 0){
     console.log('1');
     return '1';
     
    }else
    console.log('2');
    return '2';



}
function getClientId(){
return '7';
}
function getClientStatus(){
    const nr = Math.round(Math.random());

    if(nr == 0){
     console.log('1');
     return '1';
     
    }else
    console.log('2');
    return '2';

}


module.exports = {
getName,
getEmail,
getGender,
getSocialSecurityNumber,
getBedroomDescription,
getBedroomFloorNr,
getBedroomNr,
getBedroomPrice,
getBedroomStatus,
getBedroomId,
getLoginName,
getPassword,
getTypeOfUser,
getClientId,
getClientStatus



}