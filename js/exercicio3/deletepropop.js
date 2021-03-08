function removeProperty(obj,prop) {

    if(obj.hasOwnProperty(prop)) {
        console.log(obj);
        delete obj.prop;
        return true;
      }
      else
        {
          return false;
        }
    }
    
    var obj= {
      name:"John"
    };
    
    removeProperty(obj,'name');