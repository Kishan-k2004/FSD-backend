const fs=require('fs');
const data=fs.writeFileSync("./data.txt","utf8");

console.log(data);