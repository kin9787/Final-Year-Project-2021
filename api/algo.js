const { mysql } = require('../api/config/database');

//login 
const getLoginData = async(login_data) => {

  console.log("Recived Login Data:",login_data.username)

  let username = login_data.username

  let query = 'SELECT password FROM `user_data` WHERE username="' + username + '"'; 
  
  
  console.log(query)
  return mysql.query(query, username)
  .then(res => {
    
     return{     
       details : JSON.parse(JSON.stringify (res))[0]
     }
  })
  .catch(err => {
    console.log(err)
     return{
      
       details : JSON.parse(JSON.stringify (err))
     }
   })
 
}

//register new user
const newUserRegistration = async(register_data) => {

  let usernameId = register_data.username
  let email = register_data.email
  let password = register_data.password

  let query = 'INSERT INTO `user_data` (username, email, password) VALUES ("'+ usernameId +'","'+ email +'","'+password+'")' 
  
  console.log(query)
  return mysql.query(query)
  .then(res => {
     return{
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}


//take user data
const ExtractUserData = async(userdata) => {

  let query = 'SELECT * FROM  `user_data` WHERE username="' + userdata.user + '"';
  

  return mysql.query(query)
  .then(res => {
     return{
       
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}

//upadate user data
const UpdateUserData = async(userdata) => {

  let usernameId = userdata.username
  let email = userdata.email
  let password = userdata.password

  let query = 'UPDATE `user_data` SET `username`="' + usernameId + '",`email`="' + email + '",`password`="' + password + '" WHERE username = "'+ usernameId + '"'
  

  return mysql.query(query)
  .then(res => {
     return{
       
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}

//PROPERTY DB QUERY
const ExtractPropertyData = async() => {

  let query = 'SELECT * FROM `property_data`' 
  

  return mysql.query(query)
  .then(res => {
     return{
       
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}

//extract all house based on username
const ExtractPersonalPropertyData = async(userData) => {

  let usernameId = userData.user

  let query = 'SELECT * FROM `property_data` WHERE user = "' + usernameId + '"' 
  

  return mysql.query(query)
  .then(res => {
     return{
       
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}

//delete house
const DeletePersonalPropertyData = async(data) => {

  let tag = data.propertykey
  let user = data.user

  let query = 'DELETE FROM `property_data` WHERE propertyID ="' + tag + '" AND user = "' + user + '"' 
  

  return mysql.query(query)
  .then(res => {
     return{
       
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}

//insert new properrt data
const InsertPersonalPropertyData = async(propertyData) => {

  let logoLocation = './img-2.svg'


  let titlez = propertyData.title
  let pricez = propertyData.price
  let statez = propertyData.state
  let bed = propertyData.bedroom
  let bath = propertyData.bathroom
  let sqftLiv = propertyData.sqftLiving
  let floorz = propertyData.floors
  let waterfr = propertyData.waterfront
  let sqftAbv = propertyData.sqftAbove
  let sqftBase = propertyData.sqftBasement
  let yrBuilt = propertyData.yearBuilt
  let yrRenov = propertyData.yearRenovated
  let zip = propertyData.zipcode
  let latz = propertyData.lat
  let longz = propertyData.long
  let userz = propertyData.user
  let propID = propertyData.propertyID


  let query = 'INSERT INTO `property_data`(`title`,`price`,`state`,`bedroom`, `bathroom`, `sqftLiving`, `floor`, `waterfront`, `sqftAbove`, `sqftBasement`, `yearBuilt`, `yearRenovated`, `zipcode`, `latitude`, `longtitude`, `user`, `propertyID`, `logo`) VALUES ("' + titlez + '","' + pricez + '","' + statez + '","' + bed + '","' + bath + '","' + sqftLiv + '","' + floorz + '","' + waterfr + '","' + sqftAbv + '","' + sqftBase + '","' + yrBuilt + '","' + yrRenov + '","' + zip + '","' + latz + '","' + longz + '","' + userz + '","' + propID +'","' +logoLocation+ '") ' 


  return mysql.query(query)
  .then(res => {
     return{
       
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}

//extraact specific house by ID
const extractSpecificProperty = async(propertyID) => {

  let tag = propertyID.user

  let query = 'SELECT * FROM `property_data` WHERE propertyID = "' + tag + '"'
  

  return mysql.query(query)
  .then(res => {
     return{
       
       details : JSON.parse(JSON.stringify(res))
     }
  })
  .catch(err => {
     return{
       
       details : JSON.parse(JSON.stringify(err))
     }
   })
 
}

module.exports = {
    getLoginData, newUserRegistration, ExtractUserData, UpdateUserData, 
    ExtractPropertyData, ExtractPersonalPropertyData, DeletePersonalPropertyData,InsertPersonalPropertyData,extractSpecificProperty
}

