const express=require('express')
const mongoose=require('mongoose')
const app=express()

const DB='mongodb+srv://ayushee11:maithilimadan@cluster0.so2pm.mongodb.net/mernstack?retryWrites=true&w=majority'

mongoose.connect(DB,{
     useNewUrlParser:true,
     useCreateIndex:true,
     useUnifiedTopology:true,
     useFindAndModify:false
}).then(()=>{
     console.log('connection successful')
}).catch((err)=>{
     console.log('no connection')
})
//Middleware
const middleware=(req,res,next)=>{
     console.log("Hello my middleware")
     next();
}



app.get('/',(req,res)=>{
     res.send('Hello world from the server')
})

app.get('/about',middleware,(req,res)=>{
     console.log('Hello')
     res.send('Hello about world from the server')
})
app.get('/contact',(req,res)=>{
     res.send('Hello contact world from the server')
})

app.get('/signin',(req,res)=>{
     res.send('Hello login world from the server')
})
app.get('/signup',(req,res)=>{
     res.send('Hello registration world from the server')
})
//console.log('Subscribe')

app.listen(3000,()=>{
     console.log('server is running at port 3000')
})