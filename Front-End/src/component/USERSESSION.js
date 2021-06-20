var UserProfile = (function() {
    var username = "";
    var loginKey = "";
  
    var getName = function() {
      return username;    
    };

    var getKey = function() {
        return loginKey;    
      };
  
    var setName = function(name) {
        username = name;     
    }
    var setKey = function(key) {
        loginKey = key; 
      
    };
  
    return {
      getName: getName,
      setName: setName,
      getKey: getKey,
      setKey: setKey
    }
  
  })();
  
  export default UserProfile;