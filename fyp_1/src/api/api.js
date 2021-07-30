//Predict API
export const predictData = (data) =>{

    console.log("Predction Requested")  
    
    console.log(data)
  
      return fetch(`http://localhost:3000/prediction-request/`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(data)
        })
      .then(res=>{
          console.log("Sent from front-end")
          console.log(res)
          return res.json()
      })
    }
//Login API
export const loginData = (data) =>{

    console.log("Login Requested")  
    
    console.log(data)
  
      return fetch(`http://localhost:3000/login-request/`,{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json',
          },
          body : JSON.stringify(data)
        })
      .then(res=>{
          console.log("Sent login data for verification")
          console.log(res)
          return res.json()
      })
    }
//Register API
export const registerData = (data) =>{

  console.log("New User Registration Requested")  
  
  console.log(data)

    return fetch(`http://localhost:3000/new-user-register/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      })
    .then(res=>{
        console.log("Sent register data for upload")
        console.log(res)
        return res.json()
    })
  }

//Personal Data Extraction API
export const extractPersonalData = (data) =>{

  console.log("User Data Requested")  
  
  console.log("Data sent:",data)

    return fetch(`http://localhost:3000/user-data-request/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      })
    .then(res=>{
        console.log("Sent request for personal data")
        console.log(res)
        return res.json()
    })
  }

//Updata User API
export const updatePersonalData = (data) =>{

  console.log("Update User Requested")  
  
  console.log(data)

    return fetch(`http://localhost:3000/update-profile-request/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      })
    .then(res=>{
        console.log("Sent data for update")
        console.log(res)
        return res.json()
    })
  }

//////////////////////////////////////////////////PROPERTY API/////////////////////////////////////
//Extract all properties API
export const extractAllProperty = () =>{

  console.log("All Properties Requested")  
  
    return fetch(`http://localhost:3000/property-request/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        
      })
    .then(res=>{
        console.log("Request for all properties")
        console.log(res)
        return res.json()
    })
  }
    

//Personal Property API
export const ExtractpersonalProperty = (data) =>{

  console.log("Personal Property Requested")  
  
  console.log(data)

    return fetch(`http://localhost:3000/personal-property-request/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      })
    .then(res=>{
        console.log("Requested personal property data")
        console.log(res)
        return res.json()
    })
  }

//Delete Property API
export const deletePersonalProperty = (data) =>{

  console.log("Delete Property Requested")  
  
  console.log(data)

    return fetch(`http://localhost:3000/delete-property-request/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      })
    .then(res=>{
        console.log("Request for deletion of personal property")
        console.log(res)
        return res.json()
    })
  }

//Upload new property API
export const uploadPersonalProperty = (data) =>{

  console.log("Upload New Property Requested")  
  
  console.log(data)

    return fetch(`http://localhost:3000/insert-new-property-request/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(data)
      })
    .then(res=>{
        console.log("Request for uploading of new personal property")
        console.log(res)
        return res.json()
    })
  }

//Extract specific property API
export const extractSpeificProperty = (propertyID) =>{

  console.log("Extrract Specific Property Requested")  
  
  console.log(propertyID)

    return fetch(`http://localhost:3000/extract-specific-property-request/`,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(propertyID)
      })
    .then(res=>{
        console.log("Requested for specific property")
        console.log(res)
        return res.json()
    })
  }