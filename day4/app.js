const express = require('express');
const fs=require('fs/promises')
const app = express();
app.use(express.json())
let users=[];
const readdata = async ()=>{
    users=JSON.parse(await fs.readFile('./user.json','utf8'))
}

const writedata = async()=>{
    await fs.writeFile('./user.json',JSON.stringify(users))
}
readdata();

app.get('/getdata',async(req,res)=>{
    res.json(users)
    
})


app.put('/postdata/:uid',(req,res)=>{
    const {uid}=req.params;
    const {name,age}= req.body;
    const userIndex=users.findIndex((users)=>users.id == uid);
    if(!name || !age){
        res.status(400).json({message : 'name and age are recived'})
        return;
    }
    if(userIndex == -1){
        res.status(400).json({message:'user not found'});
    }
    else{
        users[userIndex].name=name;
        users[userIndex].age=age;
        writedata();
        res.status(200).json({message:'user updated successfully',data : users[userIndex]});
    }

    // const newid=users.length>0?users[users.length-1].id+1:1;
    // const newuser={id:newid,name,age};
    // users.push(newuser);
    // writedata()
    // res.status(200).json({message:'user register success',data:newuser})
})

app.listen(9000,()=>{
    console.log("Server is running on port 9000")
})