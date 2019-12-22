const fs = require('fs')

// 创建
// fs.WriteStream('www/2.txt',function(err){})

// 删除
fs.unlink('www/2.txt',function(){})