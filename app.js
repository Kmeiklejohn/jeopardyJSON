const api = 'http://jservice.io/api/categories?count=100&offset='
const fs = require('fs')
const fetch = require('node-fetch')


const randomOffset = () => Math.floor(Math.random()*18000)*1;
(async function () {
    const response = await fetch(api+randomOffset())
    console.log(randomOffset())
  
    const data = await response.json()
    const categories = JSON.stringify(data)
   
    fs.writeFile('categories.json',categories, (err)=>{
        if(err) throw err;
        console.log('the file has been saved!');
    })
})();










