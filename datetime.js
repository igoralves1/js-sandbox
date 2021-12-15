const d = new Date()
d
const dn = Date.now()
dn
let y = d.getFullYear()
y

// NOW JS to MYSQL format
let dt = new Date().toISOString().slice(0, 19).replace('T', ' ');
dt

const dtest = '2011-11-30 11:25:30'
const t = dtest.split(/[- :]/)
t
