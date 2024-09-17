const os = require('os');

console.log('My first app');
console.log(`File Name: ${__filename}`);
console.log(`Directory Name: ${__dirname}`);

console.log("=============== Built in Module - OS =======================");
console.log(`Arch: ${os.arch()}`);
console.log(`cpus:${os.cpus()}`);
console.log(`freemen:${os.freemem()}`);
console.log(`totalmen:${os.totalmem()}`);
console.log(`hostname:${os.hostname()}`);
console.log(`platform:${os.platform()}`);
console.log(`release:${os.release()}`);
console.log(`type:${os.type()}`);
console.log(`uptime:${os.uptime}`);


