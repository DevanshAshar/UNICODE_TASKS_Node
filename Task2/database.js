import fetch from 'node-fetch';
import mongoose from 'mongoose';
mongoose.connect("mongodb://127.0.0.1:27017/BreakingBad")
const charSchema=new mongoose.Schema({
    char_id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    occupation:{
        type:Array,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    nickname:{
        type:String,
        required:true
    },
    appearance:{
        type:Array,
        required:true
    },
    portrayed:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
})
const chardata=mongoose.model('Character',charSchema);
async function BreakingBad(){
    const url=await fetch("https://www.breakingbadapi.com/api/characters");
    const resp=await url.json();
    for(let i=0;i<resp.length;i++)
    {
        const post=new chardata({
            char_id:resp[i]['char_id'],
            name:resp[i]['name'],
            birthday:resp[i]['birthday'],
            occupation:resp[i]['occupation'],
            img:resp[i]['img'],
            status:resp[i]['status'],
            nickname:resp[i]['nickname'],
            appearance:resp[i]['appearance'],
            portrayed:resp[i]['portrayed'],
            category:resp[i]['category']
        });
        post.save();
    }
}
BreakingBad();