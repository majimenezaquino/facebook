const express= require('express')
const app =express();

const PORT_SERVE =process.env.PORT || 3000;
app.get('/',function(req,res){
   res.json({
       message: 'todo esta funcionando'
   })
})

app.listen(PORT_SERVE,()=>{
    console.log(`Conoxion establecidad por el puerto ${PORT_SERVE}`)
})