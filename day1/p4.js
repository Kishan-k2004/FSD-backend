const fs=require('fs');

const data="I am i async write"

fs.writeFile("./data.txt",data,(err)=>{
    if(err)
        console.error("Error writing file",err);
    else
    console.log("File written successfully")
})