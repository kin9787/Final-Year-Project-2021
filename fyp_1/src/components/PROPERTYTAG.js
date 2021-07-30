//property cookie storage
var PropertyTAG = (function() {
    var propertyTag = "";
  
    var getProperty = function() {
      return propertyTag;    
    };
  
    var setProperty = function(propertyID) {
        propertyTag = propertyID;     
    };
  
    return {
        getProperty: getProperty,
        setProperty: setProperty,
    }
  
  })();
  
  export default PropertyTAG;