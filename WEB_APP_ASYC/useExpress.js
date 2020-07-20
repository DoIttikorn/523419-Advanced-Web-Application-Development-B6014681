const expressFuction = require('express')
const expressApp = expressFuction();


expressApp.use((req,res,next)=>{
        console.log('LOGGED')
        next()
})

expressApp.get('/',(req,res,next)=>{
        res.send('Hello World')
})

expressApp.get('/api/resource',(req,res)=>{
        const myjon = {stid:'B6014681',name:"Ittikorn Chawkamud"}
        res.send(myjon)
    })


expressApp.listen(3000,()=>{
    console.log('Listening on port 3000')
})