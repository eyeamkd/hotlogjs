# World's Simplest Logger! 

### Usage  

1. Go to hotlog.in and create your package 

2. Copy the API_KEY into your project's .env file 

3. `npm i hotlogjs`

4. hot.log("your data")

5. check your logs on the dedicated URL given to you 


## Log Options 

options: 
    - data : type object or string 
    - flag : anyone of INFO | WARNING | ERROR 

examples:

`hot.log("log 1",{flag:"INFO"})` 

`hot.log("log with only message")`  

`hot.log("log 1",{data:{prop:"value"}})` 

