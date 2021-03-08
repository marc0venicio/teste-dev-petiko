function formatDate(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];
  
    return ano + '' + ("0"+dia).slice(-2) + '' +  ("0"+mes).slice(-2) ;
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
  }
  
  
  console.log(formatDate("12/31/2014"));