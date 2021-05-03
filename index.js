const axios = require("axios"); 


const hot = { 
  log(message, options){
    try {
    const api_key = process.env.HOT_LOG_KEY;
    if (!api_key) throw "HOT_LOG_KEY is not defined in the ENV";
    // console.log("API KEY is", api_key); 
    const timeStamp = new Date().toISOString();
        axios.post('http://localhost:2297/log',{api_key,timeStamp,message,options}).then(()=>null,err=> {throw err})
        .catch(err=> {throw err})
    } catch (error) {
      console.log("Logging Failed due to", error);
    }
  }
};

module.exports =  hot ;


