function log(msg, options = { case: 'default' }){
  if (options && options.case) {
    switch (options.case) {
      case 'upper':
        if (typeof msg === 'string') {
          console.log(msg.toUpperCase());
        }  
        break;
      case 'lower':
        if (typeof msg === 'string'){
          console.log(msg.toLowerCase());
        } 
        break;
      default:
        console.log(msg);
    }
  }
};

module.exports = log;
