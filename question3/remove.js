const fs = require('fs');
const path = require('path');

const SystemLogPath = path.join(process.cwd(), 'Logs');

if (fs.existsSync(SystemLogPath) ) {
    const logNames = fs.readdirSync(SystemLogPath);
    for(let i = 0; i < logNames.length; i++) {
        const file = logNames[i];
        fs.unlinkSync(path.join(SystemLogPath, file))
        console.log(`Delete files... ${logNames[i]}`)
    }
    fs.rmdirSync(SystemLogPath)
}
