import {MongoClient} from 'mongodb';
import express from 'express';
const url ='mongodb://localhost:27017';
const database='BreakingBad';
const client=new MongoClient(url);
async function dbConnect()
{
     let result=await client.connect();
     let db=result.db(database);
     return db.collection('characters');
}
/*const main=async()=>{
     let data=await dbConnect();
     data=await data.find().toArray();
}
main();*/
const app=express();
app.get('/',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    resp.send(data);
});
app.get('/bettercallsaul',async(req,resp)=>{
    let bdata=await dbConnect();
    bdata=await bdata.find({category:'Better Call Saul'}).toArray();
    resp.send(bdata);
});
app.get('/:char_id',async(req,resp)=>{
    let data=await dbConnect();
    data=await data.find({char_id:Number(req.params.char_id)}).toArray();
    resp.send(data);
});
app.use((req,res,next)=>{
    const error=new Error('not found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status);
    res.json({
        error:{
            message:error.message
        }
    })
})
app.listen(3000);
