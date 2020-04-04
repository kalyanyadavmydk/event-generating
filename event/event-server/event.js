const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express()

app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const event=require('./models/event-schema');
const db=require('./config/mongoose');
const register=require('./models/register-details-schema')

app.listen(3002,()=>{
    console.log("server stared successfully")
})

var nodemailer = require('nodemailer');



app.post('/create/event',(req,res,next)=>{
        //console.log(req.body)
        event.create({
            eventname:req.body.title,
            organisedby:req.body.organizer,
            start:req.body.start,
            end:req.body.end,
            close:req.body.close,
            description:req.body.description
        })
       
        
         
})
app.post('/register/event',(req,res,next)=>{
    console.log(req.body)
    register.create({
        eventname:req.body.event,
        username:req.body.username,
        gmail:req.body.email
    })
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                //enter your mail
              user: '',
              //enter your pass
              pass: ''
            }
          });
          
          var mailOptions = {
            //from: from mailaddress,
            //to: to mail address,
            subject: 'No Reply',
            text: 'successfully registered for the event!'
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
            //res.send({status:"ok"})
          });
    
    res.send({status:"successfully Registered"})
})
app.get('/extract/details',(req,res,next)=>{
    event.find().then(data=>{
        console.log(data)
        res.send(data)
    }).catch(error=>{
        res.send({status:"no events are available"})
    })
})
