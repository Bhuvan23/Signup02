const os = require('os');
console.log('platform:' ,os.platform());
console.log('cpu cores:' ,os.cpus().length);
console.log('uptime:' ,os.uptime());

const totalmem = (os.totalmem() / (1024*1024)).toFixed(0);
const freemem = (os.freemem() / (1024*1024)).toFixed(0);

console.log('totalmem:' ,totalmem, 'MB');
console.log('freemem:' ,freemem, 'MB');


