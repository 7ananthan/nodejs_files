var a =require('os');

var arch =a.arch();
console.log('System architecture is '+ arch);
var user= a.userInfo();
console.log(user.username);
var ost=a.type();
console.log(ost);
var temp=a.tmpdir();
console.log(temp);
var mem=a.totalmem();
console.log(mem);
var uptm=a.uptime();
console.log(uptm);
var frmem=a.freemem();
console.log(frmem);
var cpu = a.cpus();
console.log(cpu);