const moment = require('moment')
setInterval(function(){
console.log(moment().format('HH:mm:ss'))
},1*1000)