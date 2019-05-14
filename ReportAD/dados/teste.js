var preparingSql = require('./preparingSql')

var p = new preparingSql.PreparingSql()
p.addString('talison')
p.addString('fernandes')
p.addNumber(20.3)
console.log(p.sql)