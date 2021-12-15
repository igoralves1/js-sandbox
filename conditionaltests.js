


let resource = 'products'
resource = '/products/{sn}'
resource = '/products/types'
resource = '/products/models'


let result = 'none'
if (resource === '/products'){
  result = '/products'
} else if(resource === '/products/{sn}') {
  result = '/products/{sn}'
} else if(resource === '/products/types') {
  result = '/products/types'
} else if(resource === '/products/models') {
  result = '/products/models'
} else {
  result = 'none'
}

result

x = true
y = true
z = false

res1 = x || y
res2 = x && y

res1
res2

