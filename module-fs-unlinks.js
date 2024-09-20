
const fs = require('fs');
const filePath = 'sample.txt';

// Delete the file asynchronously

fs.unlink(filePath,(err)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has beem deleted');
    
});