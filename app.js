const api = 'http://jservice.io/api/categories?count=100&offset='
const fs = require('fs')
const fetch = require('node-fetch')


const randomOffset = () => Math.random()*18000;

(async function () {
    const response = await fetch(api)
    const data = await response.json()
    const categories = JSON.stringify(data)
    console.log(data)
    fs.writeFile('categories.json',categories, (err)=>{
        if(err) throw err;
        console.log('the file has been saved!');
    })
})();










