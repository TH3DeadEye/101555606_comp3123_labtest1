const fs = require('fs');
const path = require('path');

const logFolder = path.join(process.cwd(), 'Logs');
 

if (!fs.existsSync(logFolder))  {
    fs.mkdirSync(logFolder);
    console.log('Create Logs folder')
}

process.chdir(logFolder) 

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `log file ${i}`);
    console.log(`Create file ${fileName}`)
}