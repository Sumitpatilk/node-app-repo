
const {error} = require('console');
const fs = require('fs');
const filePath='output.txt';
const dataToAppend='\n this data will be appended to the file.';

//Append data to the file asynchronously

fs.appendFile(filePath,dataToAppend,(error)=>{
    if (error) {
        console.error(error);
        return;
    }
    console.log('data has been appended to the file');
    
});